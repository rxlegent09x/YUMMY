import NavOfHead from "./NavOfHead";
import { useNavigate } from "react-router-dom";
import { TimeZ, set_Local_User } from "./Utility"
import { useEffect, useContext } from "react";
import { UserContext } from "../App";
import { toast } from "react-toastify";
export default function Account() {

  const { user_Details, loading } = useContext(UserContext);
  const [user, setUser] = user_Details;
  const [load, setLoad] = loading;
  useEffect(() => {
    window.scrollTo(0, 0);
    // const prompt = window.prompt("Enter your Name");
    // setUser(prompt);

  }, []);


  const nav = useNavigate();
  const Logout = () => {
    if (user.pin && user.pin) {
      setUser({
        "name": "Guest_X",
        "gender": "dragon",
        "is_Admin": false
      });
      set_Local_User("");
      toast("Logout Succesfully");
    }
    else {
      toast("Logout Failed");
    }
  }




  return (
    <>
      <NavOfHead name="Account" num={2} bar={true} />

      <div id="account_Div">

        <section>
          <img src={`/public/${user.gender}.png`} style={{height:"13rem",borderRadius:"50%"}}></img>
          {/*<i className={((user.gender == "lgbtq+") ? `fas fa-transgender x` : `fas fa-${user.gender} x`)}></i>
         fa-male fa-female fa-transgender fa-dragon */}
          <h4 style={{ textAlign: "center", fontSize: "1rem", marginTop: "1rem" }}>Good <TimeZ /> , @{user.name}</h4>


          <span id="tag" className={"fas fa-" + ((user.is_Admin) ? "user-secret" : "user")}></span>

<span><i className="fa fa-edit" onClick={()=>nav("/account/profile")}></i></span>

        </section>
        <section>
          <h5><i className="fa fa-globe"></i> Account Verification</h5>
          <button onClick={() => nav("/login")}> Existing Login <i className="fa fa-sign-in"></i></button>
          <button onClick={() => nav("/signup")}> New Register <i className="fa fa-add"></i></button>
          <button onClick={() => nav("/yummians")}> Login As Yummians <i className="fa fa-sign-in"></i></button>

        </section>
        <section>
          <h5><i className="fa fa-message" ></i> Contact With Us</h5>
          <button onClick={() => nav("/account/contactwithus#helpcenter")}>Help Center <i className="fa fa-archive"></i> </button>
          <button onClick={() => nav("/account/contactwithus#feedback")}> FeedBack  <i className="fa fa-send"></i></button>
        </section>

        <section><h5><i className="fa fa-cog"></i> Account Setting</h5>
          <button onClick={() => nav("/account/profile")}> Edit Profile <i className="fas fa-user-edit"></i></button>
          <button onClick={() => window.open("/seller","_blank")}> Sell On YummY <i className="fa fa-store"></i></button>
          {
            (user.is_Admin)? <button onClick={() => nav("/admin")}> Admin Pannel <i className="fa fa-user-secret"></i></button>:null
          }
        </section>
        <section>
          <h5><i className="fa fa-book"></i> About Us.</h5>
          <button onClick={() => nav("/account/aboutus#terms&policies")}>Terms & Policies <i className="fa fa-file-contract"> </i> </button>
          <button onClick={() => nav("/account/aboutus#browsefaqs")}>Browse FAQs <i className="fa fa-blind"></i> </button>
        </section>
<section>
<button id="lgbtn" onClick={() => Logout()} style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}><i className="fa fa-power-off" style={{fontSize:"2rem"}}></i> Log Out</button>
</section>       
      </div>
    </>
  )
}