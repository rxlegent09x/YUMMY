import { TextField, Button } from "@mui/material";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getQ,encryption,decryption } from "./Utility";


export default function Seller_Login() {


  function Header_Form({children}){
    return (
      <>
        <div className="xtx">
          <section className="xtx_cop" style={{padding:"5rem 0rem"}} >
  
  
  
          <div className="register_Container">
              <img src="/logo.png"></img>
  
  {
    children
  }
  
  
            </div>
  
  
          </section>
  
  
        </div>
      </>
    )
  }
  


  useEffect(()=>{

    window.document.title="Y_Seller";
    return (()=>{
      window.document.title="YUMMY";
            });

        });
  const nav = useNavigate();
  const [data,setData] = useState({
    gmail:"",
    pass:""
  });
  const [ques, setQues] = useState(getQ());
  const [ans,setAns] = useState("");
const [see,setSee] = useState(0);
const [otp,setOtp] = useState("");
const[mode,setMode] = useState("");
//mode => login , otp , option , reset 



if(mode=="otp"){
  return (
    <>
        <Header_Form>

   <TextField label="* OTP" color="success" type={"number"}></TextField>

        <Button
                variant="contained"
                // onClick={() => Login_User_Verify()}
                color="error"

                onClick={() => setMode("option")}

                >
                verify
              </Button>  </Header_Form>  </>
  )
}
// (mode=="login")?<Login_T/>:(mode=="otp")?<Otp_T/>:(mode=="option") ? <Option_T/> : <Reset_T/>

if(mode=="option"){
    return (
      <>
          <Header_Form>

      <p>* Choose forgot mechanism </p>
       <Button
                variant="contained"
                
                color="warning"
                // onClick={() => Login_User_Verify()}
                onClick={() => setMode("login")}

                >
                Resend password
              </Button>     <Button
                variant="contained"
                // onClick={() => Login_User_Verify()}
                color="secondary"

                onClick={() => setMode("reset")}

                >
                Reset password
              </Button>    
</Header_Form>
      </>
    )
}


  if(mode == "reset"){
    return (
    <Header_Form>
    <p>* Reset Seller Password</p>
    <TextField label="New password" color="success" ></TextField>
    <Button  color="info"  variant="contained" onClick={()=>setMode("login")} >Set</Button>
    </Header_Form>
  )
    }



return (
  <>
          
          <div className="xtx">
          <section className="xtx_cop" style={{padding:"5rem 0rem"}} >
  
  
  
          <div className="register_Container">
              <img src="/logo.png"></img>
      <h1><i className="fa fa-store"></i> Login</h1>
              <TextField label="Seller gmail"
                variant="outlined"
                value={data.gmail}
                color="success" onChange={(e)=>setData({...data,"gmail":e.target.value})}></TextField>
              <section className="eye_cop">
                 <TextField
                label="Seller password"
                variant="outlined"
                color="success"
                type={(see) ? "text": "password"}
                value={data.pass}
                onChange={(e)=>setData({...data,"pass":e.target.value})}
              /> <i className="fa fa-bug eye" onClick={()=>setSee(!see)}></i></section>
              <TextField label={"Answer : "+ques[0]}
  onChange={(e)=>setAns(e.target.value)}
                variant="outlined"
                type={"number"}
                color="success"
                value={ans}
                ></TextField>
              <div>
  
                <Button
                  variant="outlined"
                  color="success"
                  onClick={() => nav("/seller-signup")}
                >
                  Signup
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => Login_User_Verify()}
                >
                  Login
                </Button>
  
                <Button color="success" onClick={() => nav("/seller")}>
                  <i className="fa fa-store" style={{ fontSize: "1.5rem" }}></i>
                </Button>
  
              </div>
              <Button
                style={{
                  borderBottom: "1px solid var(--fg)",
                  borderRadius: "0",
                  textTransform: "capitalize",
                }}
                color="success"
                onClick={() => setMode("otp")}
              >Forgot Password</Button>
    </div>
  
  
  </section>


</div>
  </>
  
)





}