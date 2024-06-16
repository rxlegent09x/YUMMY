import { toast } from "react-toastify" ;
import { UserContext } from "../App" ;
import React, { useEffect,useContext, useState, useRef } from "react" ;
import {socket} from "./SOCKET-config" ;
import NavOfHead from "./NavOfHead" ;


export default function Meet_Random() {
  const { user_Details, loading } = useContext(UserContext);
  const [user, setUser] = user_Details;
  const [load, setLoad] = loading;
  const [per,setPer] = useState(true);
  const [rex,setRex] = useState("vid.mp4");
useEffect(()=>{
  
    const constraints = {
      'video': true,
      'audio': true,

    }

    navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => {
        
        setRex(stream);
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
       (per) && <video autoPlay playsInline muted srcObject={rex} /> 
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
