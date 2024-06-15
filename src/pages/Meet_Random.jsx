import { toast } from "react-toastify" ;
import { UserContext } from "../App" ;
import React, { useEffect,useContext, useState, useRef } from "react" ;
import {socket} from "./SOCKET-config" ;
import NavOfHead from "./NavOfHead" ;


export default function Meet_Random() {
  const { user_Details, loading } = useContext(UserContext);
  const [user, setUser] = user_Details;
  const [load, setLoad] = loading;
  const [per,setPer] = useState(false);
  const rex = useRef(0);
useEffect(()=>{
  
    const constraints = {
      'video': true,
      'audio': true,

    }
    navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => {
        setPer(true);
        rex.target.srcObject = stream;
      })
      .catch(error => {
          setPer(false);
      });
    
    
  
},[]);


if(user.gender!="dragon"){

  return (
    <>
       <NavOfHead name="Random Meet" bg="lightgreen" clr="black"></NavOfHead>
    <div className="vid_Div">
      
   <section>
      
     {
       (per)?<video ref={rex} autoPlay playsInline muted src="" />:<p style={{display:"grid",placeItems:"center",height:"100vh"}}>Your Media Not Allowed To Random Meet So Try After Allow to Media Services !</p>
     }
  
   </section>

    </div>

    </>
  )
  
}else{
  return (
    <>
      <NavOfHead name="Random Meet" ></NavOfHead>
    <div style={{display:"grid",placeItems:"center",height:"100vh"}}>
    <h1>Please Login or Create a account...</h1>
    <a href="/login">LOGIN</a>
    </div>
    
    </>
  )
}
  


  
 
}
