
import react,{useState} from "react";
//import { Button } from "@mui/material";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
export default function DEMO(){

const [otp,setOtp] = useState(["","","",""]);
//otp container 
  function settale(x){

//setData
<AudioPlayer src={"demo.mp3"} defaultCurrentTime="Loading" defaultDuration="Loading" />


    
  }
  

  
 /* return (
    <>
    <div className="OTP_CONT">
    
    <section>
    <input placeholder="*" onChange={()=>settale(1)} value={otp[0]}></input>
      <input placeholder="*" onChange={()=>settale(2)} value={otp[0]} ></input>
      <input placeholder="*" onChange={()=>settale(3)} value={otp[0]}></input>
      <input placeholder="*" onChange={()=>settale(4)} value={otp[0]}></input>
    </section>
      <Button
                variant="contained"
              
                color="info"   >
                verify
              </Button>  
    
    </div>
    
    </>
  )*/


  return (

<>

<h1>Hello World</h1>



</>



    
  )
}