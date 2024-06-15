import NavOfHead from "./NavOfHead";
import {useState,useEffect,useContext} from "react"
import {useNavigate} from "react-router-dom";
import {UserContext} from "../App";
import {toast} from "react-toastify";
export default function AddPlate(){
const {user_Details,loading} = useContext(UserContext);
  const [user,setUser] = user_Details;
  const [load,setLoad] = loading;
  const nav = useNavigate();
    useEffect(()=>{
    window.scrollTo(0,0);
      // if(user.gender=="dragon"){
      //   toast.error("You are not allowed to view this page Please login");
      //   nav("/login");
      // }
  },[]);
  return (
    <>

    <NavOfHead name="Add Plate" num={3} bar={true}/>
    <div id="addPlate_Div">
    <p className="loc"><i className="fa fa-map-marker" ></i> {(user.address && user.pin)?`Deleverd to : ${user.address},${user.pin}`:"Not Found ! "}<span>{(user.address && user.pin)?`${user.address} , ${user.pin}`:null}</span> <button onClick={()=>nav("/account/profile")} className="fa fa-edit"></button></p>

     <div id="plates">

        <section onClick={()=>nav("/viewfood/999")} >
          <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezgocwIQiKvxBGenSIXdDmxpNUisbp32Ghg&usqp=CAU')"}}></div>
         <p>sai resturant's chicken biryani dal fries  <p>25% off ₹550 <span>₹250</span></p></p>

       <div>
    <i className="fas fa-trash"></i>
       <i className="fa fa-share"></i>

       <input type="number" value="1"></input>
  <p>₹250</p>
       </div>
     </section>


       <section onClick={()=>nav("/viewfood/999")} >
         <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezgocwIQiKvxBGenSIXdDmxpNUisbp32Ghg&usqp=CAU')"}}></div>
        <p>sai resturant's chicken biryani dal fries  <p>25% off ₹550 <span>₹250</span></p></p>

       <div>
       <i className="fas fa-trash"></i>
       <i className="fa fa-share"></i>

       <input type="number" value="1"></input>
       <p>₹250</p>
       </div>
       </section>

        <section onClick={()=>nav("/viewfood/999")} >
          <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezgocwIQiKvxBGenSIXdDmxpNUisbp32Ghg&usqp=CAU')"}}></div>
         <p>sai resturant's chicken biryani dal fries  <p>25% off ₹550 <span>₹250</span></p></p>

        <div>
        <i className="fas fa-trash"></i>
        <i className="fa fa-share"></i>

        <input type="number" value="1"></input>
        <p>₹250</p>
        </div>
        </section>

         <section onClick={()=>nav("/viewfood/999")} >
           <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezgocwIQiKvxBGenSIXdDmxpNUisbp32Ghg&usqp=CAU')"}}></div>
          <p>sai resturant's chicken biryani dal fries  <p>25% off ₹550 <span>₹250</span></p></p>

         <div>
         <i className="fas fa-trash"></i>
         <i className="fa fa-share"></i>

         <input type="number" value="1"></input>
         <p>₹250</p>
         </div>
         </section>       
         <section onClick={()=>nav("/viewfood/999")} >
           <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezgocwIQiKvxBGenSIXdDmxpNUisbp32Ghg&usqp=CAU')"}}></div>
          <p>sai resturant's chicken biryani dal fries  <p>25% off ₹550 <span>₹250</span></p></p>

         <div>
         <i className="fas fa-trash"></i>
         <i className="fa fa-share"></i>

         <input type="number" value="1"></input>
         <p>₹250</p>
         </div>
         </section>       
         <section onClick={()=>nav("/viewfood/999")} >
           <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezgocwIQiKvxBGenSIXdDmxpNUisbp32Ghg&usqp=CAU')"}}></div>
          <p>sai resturant's chicken biryani dal fries  <p>25% off ₹550 <span>₹250</span></p></p>

         <div>
         <i className="fas fa-trash"></i>
         <i className="fa fa-share"></i>

         <input type="number" value="1"></input>
         <p>₹250</p>
         </div>
         </section>       
         <section onClick={()=>nav("/viewfood/999")} >
           <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezgocwIQiKvxBGenSIXdDmxpNUisbp32Ghg&usqp=CAU')"}}></div>
          <p>sai resturant's chicken biryani dal fries  <p>25% off ₹550 <span>₹250</span></p></p>

         <div>
         <i className="fas fa-trash"></i>
         <i className="fa fa-share"></i>

         <input type="number" value="1"></input>
         <p>₹250</p>
         </div>
         </section>       
         <section onClick={()=>nav("/viewfood/999")} >
           <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezgocwIQiKvxBGenSIXdDmxpNUisbp32Ghg&usqp=CAU')"}}></div>
          <p>sai resturant's chicken biryani dal fries  <p>25% off ₹550 <span>₹250</span></p></p>

         <div>
         <i className="fas fa-trash"></i>
         <i className="fa fa-share"></i>

         <input type="number" value="1"></input>
         <p>₹250</p>
         </div>
         </section>       
         <section onClick={()=>nav("/viewfood/999")} >
           <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezgocwIQiKvxBGenSIXdDmxpNUisbp32Ghg&usqp=CAU')"}}></div>
          <p>sai resturant's chicken biryani dal fries  <p>25% off ₹550 <span>₹250</span></p></p>

         <div>
         <i className="fas fa-trash"></i>
         <i className="fa fa-share"></i>

         <input type="number" value="1"></input>
         <p>₹250</p>
         </div>
         </section>       
         <section onClick={()=>nav("/viewfood/999")} >
           <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezgocwIQiKvxBGenSIXdDmxpNUisbp32Ghg&usqp=CAU')"}}></div>
          <p>sai resturant's chicken biryani dal fries  <p>25% off ₹550 <span>₹250</span></p></p>

         <div>
         <i className="fas fa-trash"></i>
         <i className="fa fa-share"></i>

         <input type="number" value="1"></input>
         <p>₹250</p>
         </div>
         </section>       
         <section onClick={()=>nav("/viewfood/999")} >
           <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezgocwIQiKvxBGenSIXdDmxpNUisbp32Ghg&usqp=CAU')"}}></div>
          <p>sai resturant's chicken biryani dal fries  <p>25% off ₹550 <span>₹250</span></p></p>

         <div>
         <i className="fas fa-trash"></i>
         <i className="fa fa-share"></i>

         <input type="number" value="1"></input>
         <p>₹250</p>
         </div>
         </section>       
         <section onClick={()=>nav("/viewfood/999")} >
           <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezgocwIQiKvxBGenSIXdDmxpNUisbp32Ghg&usqp=CAU')"}}></div>
          <p>sai resturant's chicken biryani dal fries  <p>25% off ₹550 <span>₹250</span></p></p>

         <div>
         <i className="fas fa-trash"></i>
         <i className="fa fa-share"></i>

         <input type="number" value="1"></input>
         <p>₹250</p>
         </div>
         </section>       
         <section onClick={()=>nav("/viewfood/999")} >
           <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezgocwIQiKvxBGenSIXdDmxpNUisbp32Ghg&usqp=CAU')"}}></div>
          <p>sai resturant's chicken biryani dal fries  <p>25% off ₹550 <span>₹250</span></p></p>

         <div>
         <i className="fas fa-trash"></i>
         <i className="fa fa-share"></i>

         <input type="number" value="1"></input>
         <p>₹250</p>
         </div>
         </section>       
         <section onClick={()=>nav("/viewfood/999")} >
           <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezgocwIQiKvxBGenSIXdDmxpNUisbp32Ghg&usqp=CAU')"}}></div>
          <p>sai resturant's chicken biryani dal fries  <p>25% off ₹550 <span>₹250</span></p></p>

         <div>
         <i className="fas fa-trash"></i>
         <i className="fa fa-share"></i>

         <input type="number" value="1"></input>
         <p>₹250</p>
         </div>
         </section>       
         <section onClick={()=>nav("/viewfood/999")} >
           <div style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezgocwIQiKvxBGenSIXdDmxpNUisbp32Ghg&usqp=CAU')"}}></div>
          <p>sai resturant's chicken biryani dal fries  <p>25% off ₹550 <span>₹250</span></p></p>

         <div>
         <i className="fas fa-trash"></i>
         <i className="fa fa-share"></i>

         <input type="number" value="1"></input>
         <p>₹250</p>
         </div>
         </section>


     </div>

    <div id="order_It">
    <p>₹568</p>
      <button>
    Order Now
    </button>
    </div>

    </div>

    </>
  )
}


