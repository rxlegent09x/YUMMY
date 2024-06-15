import NavOfHead from "./NavOfHead";
import {useState,useEffect,useContext} from "react";
import {UserContext} from "../App";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import { socket } from "./SOCKET-config";
import { encryption, decryption} from "./Utility";

export default function Profile(){

  const nav = useNavigate();
const [md,setMd] = useState(2);
    const {user_Details} = useContext(UserContext);
  const [user,setUser] = user_Details;
  const [data,setData] = useState({
    name:user.name,
    pin:user.pin,
    phone:user.phone,
    address:user.address,
    gender:((user.gender==1)?"male":(user.gender==2)?"female":"lgbtq+")
  });
useEffect(()=>{
    window.scrollTo(0,0);
  /*if(user.gender=="dragon"){
    toast.error("You are not allowed to view this page Please login");
    nav("/login");
  }*/

  socket.on("update_res",(enc_dt)=>{
    const dec_dt = JSON.parse(decryption(enc_dt));
    setUser({...user,...dec_dt});
 toast("Update Successfully !");
 nav("/account");
    setLoad(false);

  })



},[]);
  useEffect(()=>{

const setmd = (user.gender=="male")?1:(user.gender=="female")?2:3;
    setMd(setmd);
    setData({
             name:user.name,
             pin:user.pin,
             phone:user.phone,
             address:user.address,
      gender:((user.gender==1)?"male":(user.gender==2)?"female":"lgbtq+")

           });

  },[user]);

  useEffect(()=>{
    const gend=((md==1)?"male":(md==2)?"female":"lgbtq+");
    setData({...data,gender:gend});


  },[md]);



const stl = {
  position:"absolute",
  zIndex:"3",
  boxShadow:"0px 0px 10px 2.5px black"
};


const UpdateData=()=>{
  if(user.gmail){
  socket.emit("update_req",encryption(JSON.stringify({...data,gmail:user.gmail})));
  setLoad(true);
  }
  else{

    toast.error("You Are Not Allowed To Update Your Data ");
  }
}


  return(
<>
<NavOfHead name="Profile" bg="var(--blue)"/>
  <div id="profile">
   <section>
<span className="fa fa-star" ></span>
<i className="fa fa-male" style={(md==1)?stl:{}} onClick={()=>setMd(1)}></i>
  <i className="fa fa-female" style={(md==2)?stl:{}} onClick={()=>setMd(2)} ></i>
  <i className="fas fa-transgender" style={(md==3)?{...stl,textShadow:"0px 2px 2px black"}:{textShadow:"0px 2px 2px black"}} onClick={()=>setMd(3)}></i>
     <h5 className="fa fa-" style={{fontWeight:"bold"}}>{md==1?"male":md==2?"female":"lgbtq+"}</h5>
     <h2>@{user.name}</h2>
</section>
<div>
<h1>Basic Details</h1>
  <p>User Name </p>
<input type="text" value={data.name} onChange={(e)=>setData({...data,"name":(e.target.value)})}></input>
  <p>User Gmail </p>
  <input type="text" value={user.gmail} readOnly></input>
  {/*        <section>
          <span style={{fontSize:"0.9rem",padding:"1rem",color:"var(--red)"}}>JOIN ID : {user._id}<br/> JOIN TIME : {user.time}</span>
        </section>  */}
<p>User Id</p>
  <input value={user._id} readOnly></input>
  <p>Join Time</p>
  <input value={user.time} readOnly ></input>

  <p>+ Edit Phone Number </p>
<input type="number" value={data.phone} onChange={(e)=>setData({...data,"phone":(e.target.value)})}></input>

<h1>Address</h1>
  <p>PinCode</p>
  <input type="text" value={data.pin} onChange={(e)=>setData({...data,"pin":(e.target.value)})}></input>
  <p>Addressing House No/+Add Nearby Famous Shop/Mall/Landmark and Alt. Phone </p>
  <textarea placeholder="ex : plotno./village/post/city/district/state/country" style={{backgroundColor:"var(--blue)",color:"var(--bg)",fontSize:"0.7rem"}} value={data.address} onChange={(e)=>setData({...data,"address":(e.target.value)})}>
  </textarea>

</div>
  <button onClick={()=>UpdateData()}>Update</button>
  </div>

</>


  )
}