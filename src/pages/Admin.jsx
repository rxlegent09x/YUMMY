import { useEffect, useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";



export default function Admin(){
  const { user_Details, loading } = useContext(UserContext);
  const nav = useNavigate();
  const [user, setUser] = user_Details;
  const [load, setLoad] = loading;

  useEffect(()=>{
    if(!(user.is_Admin)){
      nav("/");
    }
    window.scrollTo(0, 0);



  },[]);
  return (
    <div>
      <h1>Admin</h1>
    </div>
  );
}