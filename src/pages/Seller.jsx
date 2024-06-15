import {useEffect,useState} from "react";
import {useNavigate,useParams} from "react-router-dom";
import { Button } from "@mui/material";


export function NavOfSeller({is_pan=false}){
  const nav = useNavigate();

  return (
    <>
    <div id="nav_of_seller">
      <img src="/ico.png" ></img><p className="fa f" style={{fontSize:"1.5rem",margin:"auto",translateY:"-50%"}}>* S_e_l_l_e_r *</p>
<section><i className="fa fa-store" onClick={()=>nav("/")}></i>
{
  is_pan?<i className="fas fa-computer"  onClick={()=>nav("/seller-pannel")}/>:<i className="fa fa-book" onClick={()=>nav("/seller-login")}></i>
}
</section>
    </div>

    </>
  )



}


export default function Seller(){








  const nav = useNavigate();

    useEffect(()=>{

window.document.title="Y_Seller";
return (()=>{
  window.document.title="YUMMY";
        });

    });







return(

   <>
     <div className="seller_div">
     <NavOfSeller is_pan={true}/>
<div id="seller_adv">
<h1 className="fa mb-3 ml-5 mt-5" style={{paddingLeft:"1rem"}}>Are you intrested sell in YUMMY ?</h1>
<img className="temp_img fa mb-2" src="https://assets.architecturaldigest.in/photos/60083dde274aca243711c34c/16:9/w_1280,c_limit/restaurants-owned-by-cricketers-1366x768.jpg" style={{maxWidth:"100vw", height:"15rem"}}></img>

<h1 className="fa ml-2" style={{paddingLeft:"1rem"}}>Why sell on YUMMY?</h1>
<section className="fa m-1">
<p className="fas p-3 "> <i className="fas fa-bicycle"></i>
 Sell Across & Reach over customers across Odisha
</p>
<p className="fas p-3 "> <i className="fas fa-">0%</i>
 No extra commisons
</p>

<p className="fas p-3 "> <i className="fas fa-user"></i>

 Account Management
</p>

<p className="fas p-3 "> <i className="fas fa-dollar"></i>

 Lower Return Charges
</p>

<p className="fas p-3 "> <i className="fas fa-calculator"></i>

 Simple Pricing Calculator
</p>

<p className="fas p-3 "> <i className="fas fa-beer"></i>

 24x7 Seller Support
</p>

<p className="fas p-3 "> <i className="fa fa-inr"></i>

 Fast & Regular Payments
</p>

<p className="fas p-3 "> <i className="fas fa-computer"></i>

 Business on the App
</p>
</section>

<Button color="error"  variant="contained" style={{position:"fixed",top:"3.5rem",right:"0"}} onClick={()=>nav("/seller-login")}>Start to sell now</Button>

</div>
       </div>
   </>
  )






}