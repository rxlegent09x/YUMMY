import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import {ScaleLoader,HashLoader,BarLoader} from "react-spinners";



export default function Load() {
  const [howMany, setHowMany] = useState(0);
  return (
    <>
      <div id="load_Div">
<LinearProgress color="success" id="load_Section" />
<section>

<HashLoader
  color="#14DC8C"
/>
</section>

        
        {/* <section id="load_Section"></section> */}
        
      
        {/* <i className="fa fa-spinner fa-spin" style={{fontSize:"7rem",color:"var(--fg)"}}></i>
        
        
        <LinearProgress color="success" id="load_Section" />
 <CircularProgress style={{ color: "rgb(0, 248, 112)" }} size={70} />
 
        
        
        
        
        */}
      </div>
    </>
  );
}
