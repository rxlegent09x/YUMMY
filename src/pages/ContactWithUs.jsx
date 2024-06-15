import NavOfHead from "./NavOfHead";
import {useEffect} from "react";
export default function ContactWithUs(){
  useEffect(()=>{
    const loc = (window.location.href).endsWith("#helpcenter");
    if(loc){
      window.scrollTo(0, 0);
    }
    else{
      window.scrollTo(0, 1e5);
    }
  },[]);
  return(
    <>
      <NavOfHead name="Contact With Us"/>
      <div id="contact">
<section id="helpcenter">

<h1>Help Center</h1>
<img src="https://w1.pngwing.com/pngs/483/167/png-transparent-call-logo-customer-service-technical-support-purchasing-service-quality-business-call-centre-selfservice-thumbnail.png"/>
<p>Call To Yummy Help Center</p>
  <button>Call Now</button>

</section>
  <section id="feedback">

  <h1>Feed Back</h1>

<textarea placeholder="Type A FeedBack ... "></textarea>
<button><i className="fa fa-send"></i></button>

  </section>  
    </div>
    </>
  )
}