import {useNavigate} from "react-router-dom";
import {Sub_Nav} from "./Home";


export default function NavOfHead({num,name,bar=false,bg="var(--fg)", clr="var(--bg)"}){
  const nav = useNavigate();

const back=()=>{
  if(window.history.length==2){
    nav("/");
  }else{
  nav(-1);
  }
}


  return (
<>


   <div id="nav_head" style={{backgroundColor:bg,color:clr}}>
     <button onClick={()=>nav("/")}><img src="../../public/y.png" title="YUMMY"></img></button>
 <i onClick={()=>back()} className="fas fa-arrow-left" id="back_btn" title="back"></i> <span style={{letterSpacing:"2px"}}>{name}</span>
   </div>

<Sub_Nav num={num} visible={bar}/>


</>

  )
}