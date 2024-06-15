import { useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../App";
import { TextField, Button } from "@mui/material";
import { x_secret } from "./X";
import { encryption, decryption, set_Local_User, getQ } from "./Utility";
import { socket } from "./SOCKET-config";
export default function Login() {
  const nav = useNavigate();
  const [ques, setQues] = useState(getQ());
  const [otp, setOtp] = useState("");
  const { user_Details, loading } = useContext(UserContext);
  const [user, setUser] = user_Details;
  const [load, setLoad] = loading;
  const [md, setMd] = useState("");
  const [inp_Otp, setInp_Otp] = useState("");
  const [gmailF, setGmailF] = useState("");
  const [passF, setPassF] = useState({
    pass: "",
    pass_c: "",
  });
  useEffect(() => {
    window.scrollTo(0, 0);

    socket.on("otp_sent", (xotp) => {
      const dec_otp = decryption(xotp);
      setOtp(dec_otp);
      setLoad(false);
      setMd("fotp");
      toast.success("OTP Sent Succesfully");
    });
    setQues(getQ());

  }, []);

  const [data, setData] = useState({
    gmail: "",
    pass: "",
    ans: "",
  });
  const [see,setSee] = useState(0);
  const Login_User_Verify = () => {
    const { gmail, pass, ans } = data;
    if (
      !(
        gmail.trim().length >= 6 &&
        gmail.trim().length <= 30 &&
        gmail.endsWith("@gmail.com")
      )
    ) {
      toast.error("Please Enter User Gmail ?");
      return false;
    }
    if (!(pass.trim().length >= 3 && pass.trim().length <= 9)) {
      toast.error("Please Enter User Password");
      return false;
    }
    if (!(ans.trim() == ques[1])) {
      toast.error("Please Enter Correct Answer");
      return false;
    }
    const enc_Data = encryption(JSON.stringify(data));
    const dtx = { enc_dt: enc_Data };
    setLoad(true);
    fetch(x_secret.login, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dtx),
    })
      .then((res) => res.json())
      .then((dt) => {
        if (dt.txt) {
          toast.success("Login Successfull");
          const dec_txt = JSON.parse(decryption(dt.dtx));
          setUser(dec_txt);
          nav("/account");
          set_Local_User(dec_txt);

          setLoad(false);
          return true;
        } else {
          toast.error("Login Failed Plase SignUp Or Retry");
          setLoad(false);
          return false;
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something Went Wrong " + err);
        return false;
      });
  };

  const verify_Otp_Forget_Pass = () => {
    if (inp_Otp.trim() == otp.trim()) {
      toast.success("OTP Verified Successfully !");
      setMd("choose_Type");
    } else {
      toast.error("Otp Not Match !");
    }
  };
  const get_Otp_Forget_Pass = () => {
    if (
      gmailF.trim().length >= 6 &&
      gmailF.trim().length <= 30 &&
      gmailF.endsWith("@gmail.com")
    ) {
      const enc_Data = encryption(JSON.stringify([{ gmail: gmailF }]));
      fetch(x_secret.user_exist, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bd_data: enc_Data,
        }),
      })
        .then((res) => res.json())
        .then((dt) => {
          if (dt.is_Exist) {
            setLoad(true);
            socket.emit("send_otp", gmailF);

          } else {
            toast.error("User Not Found");
            setLoad(false);
          }
        });
    } else {
      toast.error("Please Enter User Gmail ?");
    }
  };
  const sendMyPass = () => {
    socket.emit("send_my_pass", gmailF.trim());
    toast.success("Password Sent To Your Gmail Check And Login !");
    setMd("forget_pass");
    setGmailF("");
    setPassF({
      pass: "",
      pass_c: "",
    });
  };
  const reset_Pass = () => {
    if (
      passF.pass.trim() === passF.pass_c.trim() &&
      passF.pass.trim().length >= 3 &&
      passF.pass.trim().length <= 9
    ) {
      toast.success("Your password has been successfully reset");
      const enc_pass = encryption(passF.pass);
      const enc_mail = encryption(gmailF);
      socket.emit("reset_pass", { mailf: enc_mail, passf: enc_pass });
      setMd("forget_pass");
      setPassF({
        pass: "",
        pass_c: "",
      });
      setGmailF("");
    } else {
      toast.error("Please Enter Correct Password");
    }
  };

  if (md == "set_New_Pass") {
    return (
      <>
        <div className="forget_Div">
          <i
            className="fas fa-angle-double-left"
            onClick={() => setMd("choose_Type")}
          ></i>
          <p><span style={{fontSize:"3rem"}}>S</span>et My Password</p>
          <section>
            {" "}

            <TextField
              type="text"
              onChange={(e) =>
                setPassF({ ...passF, pass: e.target.value.trim() })
              }
              label="New password"
              variant="standard"
              color="info"
            ></TextField>
          </section>
          <section>
            {" "}
            <TextField
              type="password"
              onChange={(e) =>
                setPassF({ ...passF, pass_c: e.target.value.trim() })
              }
              label="Confirm password"
              variant="standard"
              color="info"
            ></TextField>
          </section>
          <Button onClick={() => reset_Pass()} color="info" variant="contained">Reset</Button>
        </div>
      </>
    );
  }

  if (md == "choose_Type") {
    return (
      <>
        <div className="forget_Div">
          <i
            className="fas fa-angle-double-left"
            onClick={() => setMd("forget_pass")}
          ></i>
          <p style={{ fontSize: "0.7rem", textAlign: "center",color:"black" }}>
            <span style={{fontSize:"2rem"}}>W</span>hat Type Of Forgotten Mechanism You Need To Do ?
          </p>
          <Button style={{ fontSize: "0.7rem" }} onClick={() => sendMyPass()}  variant="contained"
                
                color="warning">
            Send my password
          </Button>
          <Button
            style={{ fontSize: "0.7rem" }}
            onClick={() => setMd("set_New_Pass")}
            variant="contained"
                
            color="secondary"
          >
            Reset my password
          </Button>
        </div>
      </>
    );
  }

  if (md == "fotp") {
    return (
      <>
        <div className="forget_Div">
          <i
            className="fas fa-angle-double-left"
            onClick={() => setMd("forget_pass")}
          ></i>
          <section>
            {" "}
            <TextField
              type="text"
              variant="standard"
              color="error"
              value={inp_Otp}
              onChange={(e) => setInp_Otp(e.target.value)}
              label="*OTP"
            ></TextField>
          </section>
          <Button onClick={() => verify_Otp_Forget_Pass()} color="error" variant="contained">Verify</Button>
        </div>
      </>
    );
  }

  if (md == "forget_pass") {
    return (
      <>
        <div className="forget_Div">
          <i className="fas fa-angle-double-left" onClick={() => setMd("login")}></i>
          <p><span style={{fontSize:"3rem",textAlign:"center"}}>F</span>orget My Password</p>
          <section>
            {" "}
           

            <TextField
              type="email"
              onChange={(e) => setGmailF(e.target.value)}
              label="User gmail"
              variant="standard"
              color="success"
            ></TextField>
          </section>
          <Button onClick={() => get_Otp_Forget_Pass()} variant="contained" color="success" >Get Otp</Button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="xtx">
        <div className="xtx_cop">
        <div id="login_Container" className="register_Container">
          <img src="logo.png"></img>
          <h1>
            <i className="fa fa-sign-in"></i> Login
          </h1>
          <TextField
            label="User gmail"
            variant="outlined"
            color="success"
            value={data.gmail}
            onChange={(e) => setData({ ...data, gmail: e.target.value })}
          />
          <section className="eye_cop"> <TextField
            label="User password"
            variant="outlined"
            color="success"
            type={(see)? "text": "password"}
            value={data.pass}
            onChange={(e) => setData({ ...data, pass: e.target.value })}
          /> <i className="fa fa-bug eye" onClick={()=>setSee(!see)}></i></section>

          <TextField
            label={`Answer : ${ques[0]}`}
            variant="outlined"
            color="success"
            value={data.ans}
            onChange={(e) => setData({ ...data, ans: e.target.value })}
          />

          <div>
            {" "}
            <Button
              variant="outlined"
              color="success"
              onClick={() => nav("/signup")}
            >
              Signup
            </Button>{" "}
            <Button
              variant="contained"
              color="success"
              onClick={() => Login_User_Verify()}
            >
              Login
            </Button>
            <Button color="success" onClick={() => nav("/")}>
              <i className="fa fa-home" style={{ fontSize: "1.5rem" }}></i>
            </Button>
          </div>
          <Button
            style={{
              borderBottom: "1px solid var(--fg)",
              borderRadius: "0",
              textTransform: "capitalize",
            }}
            color="success"
            onClick={() => setMd("forget_pass")}
          >
            Forgot Password
          </Button>
          {/* <Inputs></Inputs> */}
        </div>
        </div>
      </div>
    </>
  );
}
