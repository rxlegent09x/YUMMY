import { useNavigate } from "react-router-dom";
import { getQ } from "./Utility";
import { useState, useEffect, useContext } from "react";
import { x_secret } from "./X";
import { TextField, Button } from "@mui/material";
import {
  is_Valid,
  encryption,
  decryption,
  set_Local_User,
  time_Now,
} from "./Utility";
import { socket } from "./SOCKET-config";
import { toast } from "react-toastify";
import { UserContext } from "../App";

function Signup_Div() {
  const [otp, setOtp] = useState(null);
  const [inp_Otp, setInp_Otp] = useState("");
  const [ques, setQues] = useState(getQ());
  const [see, setSee] = useState(0);
  const [md, setMd] = useState("sign");
  const { user_Details, loading } = useContext(UserContext);
  const [load, setLoad] = loading;
  const [user, setUser] = user_Details;
  const [data, setData] = useState({
    name: "",
    pass: "",
    gmail: "",
    gender: "",
    phone: "",
    pin: "",
    address: "",
    ans: "", //dont need to send back
    time: time_Now() + "",
  });
  const nav = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [md]);
  useEffect(() => {
    socket.on("otp_sent", (xotp) => {
      const dec_otp = decryption(xotp);
      setOtp(dec_otp);
      setLoad(false);
    });
    setQues(getQ());
  }, []);

  const valid = async (dt) => {
    setLoad(true);
    const is = await is_Valid(dt, ques[1]);
    if (is) {
      if (is.status) {
        const send_Data = {
          bd_data: encryption(
            `[ { "gmail":"${dt.gmail}" },{ "phone":"${dt.phone}" } ]`,
          ),
        };

        fetch(x_secret.user_exist, {
          method: "POST",
          body: JSON.stringify(send_Data),
          headers: { "Content-Type": "application/json; charset=UTF-8" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (!data.is_Exist) {
              toast.success("Send Otp Successfully !");
              setMd("otp");
              socket.emit("send_otp", dt.gmail);
            } else {
              toast.error("User Already Exist !");
              setMd("sign");
              setLoad(false);
            }
          })
          .catch((err) => {
            toast.error("Something Went Wrong !" + err);
            setLoad(false);
          });
      } else {
        toast.error(is.msg);
        setLoad(false);
      }
    }
  };

  const verify_Otp = () => {
    if (inp_Otp.trim() === (otp + "").trim()) {
      toast.success("Otp Verified Successfully !");
      setLoad(true);
      const RDX_ENCRYPTED = encryption(
        JSON.stringify({ ...data, time: time_Now() }),
      );
      const REX = { enc_dbt: RDX_ENCRYPTED };
      fetch(x_secret.sign_up, {
        method: "POST",
        body: JSON.stringify(REX),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const dtx = decryption(data.snd_data);

          const dtx_data = JSON.parse(dtx);
          setUser({ ...user, ...dtx_data });
          nav("/account");
          setLoad(false);
          toast.success("Signup Successfully !");
          setInp_Otp("");
          set_Local_User(dtx_data);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something Went Wrong !" + err);
          setLoad(false);
        });
    } else {
      toast.error("Otp Not Matched !");
      setLoad(false);
    }
  };

  if (md != "sign")
    return (
      <>
        <div className="otp_Continer">
          <i className="fa fa-chevron-left" onClick={() => setMd("sign")}></i>

          <input
            type="text"
            placeholder="****"
            value={inp_Otp}
            onChange={(e) => setInp_Otp(e.target.value)}
          ></input>
          <p style={{color:"orange",width:"100%",textAlign:"left",fontFamily:"arial",fontSize:"0.5rem"}}>
            * The OTP sent From yummy.team.india@gmai.com To {data.gmail} Please
            Check And Fill It Faster !
          </p>
          <button
            className="fa fa-space-shuttle	
    "
            onClick={() => verify_Otp()}
          ></button>
        </div>
      </>
    );

  return (
    <>
      <div className="xtx">
        <div className="xtx_cop">
        <div id="login_Container" className="register_Container">
          <img src="logo.png"></img>
          <h1>
            <i className="fa fa-user-plus" /> New
          </h1>
          <TextField
            id="outlined-basic"
            label="User name"
            variant="outlined"
            color="success"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            type="text"
          />
          <p className="h6">
            User Gender : {data.gender ? data.gender : "choose"}
          </p>
          <section className="gender">
            <i
              className="fa fa-male"
              onClick={(e) => setData({ ...data, gender: "male" })}
              style={
                data.gender == "male"
                  ? { background: "transparent", height: "4rem", width: "4rem" }
                  : {}
              }
            ></i>
            <i
              className="fa fa-female"
              onClick={(e) => setData({ ...data, gender: "female" })}
              style={
                data.gender == "female"
                  ? { background: "transparent", height: "4rem", width: "4rem" }
                  : {}
              }
            ></i>
            <i
              className="fa fa-transgender"
              onClick={(e) => setData({ ...data, gender: "lgbtq+" })}
              style={
                data.gender == "lgbtq+"
                  ? { background: "transparent", height: "4rem", width: "4rem" }
                  : { color: "aqua" }
              }
            ></i>
          </section>
          <TextField
            id="outlined-basic"
            label="User gmail"
            variant="outlined"
            color="success"
            value={data.gmail}
            onChange={(e) => setData({ ...data, gmail: e.target.value })}
            type="email"
          />

          <section className="eye_cop"><TextField
            id="outlined-basic"
            label="User password"
            variant="outlined"
            color="success"
             value={data.pass}
             type={(see)?"text":"password"}
            onChange={(e) => setData({ ...data, pass: e.target.value })}
          ></TextField><i className="fa fa-bug eye" onClick={()=>setSee(!see)}></i></section>

          <TextField
            id="outlined-basic"
            label="User phone no."
            variant="outlined"
            color="success"
             value={data.phone}
             type="number"
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />

          <TextField
            id="outlined-basic"
            label="PinCode/ZipCode"
            variant="outlined"
            color="success"
            value={data.pin}
            type="number"
            onChange={(e) => setData({ ...data, pin: e.target.value})}
          />

          <TextField
            id="outlined-textarea"
            label="Resident/Office Address"
            placeholder="Ex: plotno./village/post/city/district/state/country"
            multiline
            color="success"
            background="grey"
            value={data.address}
            onChange={(e)=> setData({...data,address: e.target.value})}
          />
          <TextField
            id="outlined-basic"
            label={`Answer : ${ques[0]}`}
            variant="outlined"
            color="success"
            value={data.ans}
            type="number"
            onChange={(e) => setData({ ...data, ans: e.target.value })}
          />

          <div>
            {" "}
            <Button
              variant="outlined"
              color="success"
              onClick={() => nav("/login")}
            >
              LogIn
            </Button>{" "}
            <Button variant="contained" color="success" 
            onClick={() => valid(data)}
            >
              SignUp
            </Button>
            <Button color="success" onClick={() => nav("/")}>
              <i className="fa fa-home" style={{ fontSize: "1.5rem" }}></i>
            </Button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default function Signup() {
  return (
    <>
      <Signup_Div />
    </>
  );
}

