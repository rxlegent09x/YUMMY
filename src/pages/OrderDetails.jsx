import NavOfHead from "./NavOfHead";
import { useState,useEffect } from "react";
import {useParams} from "react-router-dom";

export default function OrderDetails(){
  const prm = useParams();
  const [id,setId] = useState(prm.oid);
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  return (


    <>
    <NavOfHead name="Order Details"/>

<div id="order_Details_Div">

<p style={{justifyContent:"flex-end",marginRight:"1rem"}}>Order Id : {id}</p>
  <div id="order_title">
<h3>Chicken Biriyani  With Double Naan Mutton</h3>
   <section> <img src="https://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg"></img></section>
 <section>   <p>Resturant : Sai Family Resturant , Ganjam ,Odisha get lost from here</p>
   <h3>₹309 <span>[5]</span></h3></section>
    </div>
  <div id="order_updates">
<p style={{justifyContent:"flex-start",gap:"1rem"}}><i className="fa fa-rocket" ></i> Order Confirmed, Dec 02 2023, 10:16 AM</p>
    <section className="spr" >
    {/* style={{backgroundColor:"var(--red)"}}  for cancellation status*/}
    </section>

<p style={{justifyContent:"flex-start",gap:"1rem"}}><i className="fa fa-rocket" style={{rotate:"90deg"}}></i> Cancelled, Dec 02 2023, 10:16 AM</p>



  </div>

  <div id="shipping_Details">
  <p>Shipping Details</p>
  <p>Rudra Pratap Nahak</p>
    <p>Rambha Haripur Burudi,Rambha,Ganjam,Odisha,761027</p>
    <p>Phone number : 6370567763 , 8908589709</p>

  </div>

  <div id="price_Details">
  <p>List Price <span><del>₹589</del></span></p>
  <p>Selling Price <span>₹356</span></p>
    <p>Shipping Fee <span>₹35</span></p>
    <h5 style={{fontSize:"1rem",fontWeight:"bold",borderTop:"2px solid grey",paddingTop:"0.5rem"}}>Total Amount <span>₹401</span></h5>
  </div>


</div>




    </>
  )
}