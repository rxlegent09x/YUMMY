import NavOfHead from "./NavOfHead";
import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";



const Ongoing = () => {
  const nav = useNavigate();
  return (<>
    <div onClick={() => nav("/orders/orderdetails/999")} >
      <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxdDkQ1fJTDD7agaeCiSQH86rc8RLlqwrAgqJsEV5tIby78SSwrzIPx4&s=100')"}}>
    </div>
      <p>ttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxdDkQ1f<br /><span>₹453</span> <span>[2]</span></p>
    </div>
    <div onClick={() => nav("/orders/orderdetails/999")} >
      <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxdDkQ1fJTDD7agaeCiSQH86rc8RLlqwrAgqJsEV5tIby78SSwrzIPx4&s=100')"}}>
    </div>
      <p>ttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxdDkQ1f<br /><span>₹453</span> <span>[2]</span></p>
    </div>
    <div onClick={() => nav("/orders/orderdetails/999")} >
      <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxdDkQ1fJTDD7agaeCiSQH86rc8RLlqwrAgqJsEV5tIby78SSwrzIPx4&s=100')"}}>
    </div>
      <p>ttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxdDkQ1f<br /><span>₹453</span> <span>[2]</span></p>
    </div>

  </>
  )
}

const Delivered = () => {
  const nav = useNavigate();
  return (

    <>
      <div onClick={() => nav("/orders/orderdetails/999")} >
        <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxdDkQ1fJTDD7agaeCiSQH86rc8RLlqwrAgqJsEV5tIby78SSwrzIPx4&s=100')"}}>
      </div>
        <p>ttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxdDkQ1f<br /><span>₹453</span> <span>[2]</span></p>
      </div>
      <div onClick={() => nav("/orders/orderdetails/999")} >
        <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxdDkQ1fJTDD7agaeCiSQH86rc8RLlqwrAgqJsEV5tIby78SSwrzIPx4&s=100')"}}>
      </div>
        <p>ttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxdDkQ1f<br /><span>₹453</span> <span>[2]</span></p>
      </div>
      <div onClick={() => nav("/orders/orderdetails/999")} >
        <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxdDkQ1fJTDD7agaeCiSQH86rc8RLlqwrAgqJsEV5tIby78SSwrzIPx4&s=100')"}}>
      </div>
        <p>ttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxdDkQ1f<br /><span>₹453</span> <span>[2]</span></p>
      </div>
    </>
  )
}
const Cancelled = () => {
  const nav = useNavigate();
  return (
    <>
      <div onClick={() => nav("/orders/orderdetails/999")} >
        <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxdDkQ1fJTDD7agaeCiSQH86rc8RLlqwrAgqJsEV5tIby78SSwrzIPx4&s=100')"}}>
      </div>
        <p>ttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxdDkQ1f<br /><span>₹45367890</span> <span>[2]</span></p>
      </div>
      <div onClick={() => nav("/orders/orderdetails/999")} >
        <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxdDkQ1fJTDD7agaeCiSQH86rc8RLlqwrAgqJsEV5tIby78SSwrzIPx4&s=100')"}}>
      </div>
        <p>ttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxdDkQ1f<br /><span>₹453</span> <span>[2]</span></p>
      </div>
      <div onClick={() => nav("/orders/orderdetails/999")} >
        <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxdDkQ1fJTDD7agaeCiSQH86rc8RLlqwrAgqJsEV5tIby78SSwrzIPx4&s=100')"}}>
      </div>
        <p>ttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxdDkQ1f<br /><span>₹453</span> <span>[2]</span></p>
      </div>
    </>
  )

}

export default function Orders() {

  const nav = useNavigate();
  const {typeoford} = useParams();
  const [os, setOs] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
    const ct = ((typeoford=="ongoing")?1:(typeoford=="delivered")?2:(typeoford=="cancelled")?3:4);
    if(ct==4){
      nav("/error");
    }
    setOs(ct);
  }, [typeoford]);
  const stl = {
    color: "var(--bg)",
    backgroundColor: ((os == 1) ? "var(--yellow)" : (os == 2) ? "var(--blue)" : "var(--red)"),
    padding: "1rem",
    borderBottomLeftRadius: "1rem"
  }

  return (
    <>
      <NavOfHead name="Orders" num={4} bar={true} />

    <div id="orders_Div">
      {/* ordersdiv style demo style={{background:(os==1?"var(--yellow)":(os==2)?"var(--blue)":"var(--red)"),minHeight:"100vh"}} */}
        <section style={{ marginBottom: "1rem" }}>
          <i className="fas fa-frog" onClick={() => nav("/orders/ongoing")} style={(os == 1 ? stl : null)}><span>Ongoing</span></i>
          <i className="fas fa-kiwi-bird" onClick={() => nav("/orders/delivered")} style={(os == 2 ? stl : null)}><span>Delivered</span></i>
          <i className="fas fa-spider" onClick={() => nav("/orders/cancelled")} style={(os == 3 ? stl : null)}><span>Cancelled</span></i>
        </section>
        <div>

          {(os == 1) ? <Ongoing /> : (os == 2) ? <Delivered /> : <Cancelled />}

        </div >

      </div>
    </>
  )
}