import { TextField, Button } from "@mui/material";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getQ,encryption,decryption } from "./Utility";



export default function Seller_Signup() {

const nav = useNavigate();
const [see,setSee] = useState(0);
const [ques,setQues] = useState(getQ());
const [ans,setAns] = useState("");
const [data,setData] = useState({
  seller_name:"" ,
  gender:"" ,
  resturant_name:"",
  address:"" ,
  phone: "",
  gmail:"",
  pin:"",
});



useEffect(()=>{

  window.document.title="Y_Seller";
  return (()=>{
    window.document.title="YUMMY";
          });

      });

      function signup_seller_func(){
          if(ques[1]!=ans){
              toast.error("Please enter right answer !")
            return ;
          }







      }




  return (
    <>
      <div className="xtx" >
        <section className="xtx_cop"  style={{padding:"5rem 0rem"}} >

          <div className="register_Container">
          <img src="/logo.png" alt="#img_rest_owner" style={{height:"20rem",maxWidth:"100%"}}></img>
          <h1><i className="fa fa-store"></i> New</h1>
<TextField type="text" color="success"  label="Seller name" onChange={(e)=>setData({...data,seller_name:e.target.value})}/>
<TextField type="email" color="success"  label="Seller gmail"/>
<section className="eye_cop" > <TextField
              label="Seller password"
              variant="outlined"
              color="success"
              type={see?"text":"password"}
            /> <i className="fa fa-bug eye" onClick={()=>setSee(!see)}></i></section>


<TextField type="number" color="success"  label="Seller phone"/>

          <TextField type="text" color="success"  label="Resturant name"/>
          <TextField type="number" color="success"  label="Resturant pincode/zipcode"/>

          <TextField type="text" color="success" multiline  label="Resturant address"             placeholder="Ex: plotno./village/post/city/district/state/country"
/>

<TextField color="success"  label={"Answer : "+ques[0]} onChange={(e)=>{
setAns((e.target.value.trim()))
}} value={ans} type="number" />

<div>
<Button
  variant="outlined"
  color="success"
  onClick={() => nav("/seller-login")}>
  Login
</Button>

<Button
  variant="contained"
  color="success"
  onClick={()=> signup_seller_func()}

>
  Signup
</Button>


<Button color="success" onClick={() => nav("/seller")}>
  <i className="fa fa-store" style={{ fontSize: "1.5rem" }}></i>
</Button>

</div>
          </div>






</section>

</div>

    </>
    );
}


