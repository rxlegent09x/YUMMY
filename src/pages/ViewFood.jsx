import { useParams, useNavigate } from "react-router-dom";
import NavOfHead from "./NavOfHead";
import { useEffect } from "react";
import Past_Viewed_Items from "./Past_Viewed_Items";

export default function ViewFood() {
  const prm = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const share=()=>{

}


  return (
    <>

      <NavOfHead name="Food View" />
      <div id="food_div">

        <img src="https://www.simplyrecipes.com/thmb/Th15MyYH39AyYVe3Yy1uuXMp1E0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Matar-Paneer-LEAD-04-54973561cdb944f587165ecf161acc83.jpg" />
        <div>
          <h5><b className="fas fa-seedling" style={{ fontSize: "3rem" }}></b> SAI Resturant's Chicken  Tandoori </h5>
          <p style={{marginLeft:"5rem"}}> 25% off <del>₹550</del> <span>₹250</span></p>
          <p style={{ fontSize: "0.7rem" }}><b className="fas fa-pepper-hot" ></b> : Hariyaa Goseinin</p>
          <p style={{ fontSize: "0.7rem" }}><b className="fas fa-hamburger" ></b> : SAI Family Resturant,Ganjam</p>
          <div id="food_control">
<section>            <i className="fas fa-pizza-slice" style={{ backgroundColor: "var(--red)" }}><span style={{ fontSize: "2rem" }}>+</span></i>
</section>
<section>            <i className="fas fa-share" style={{ backgroundColor: "var(--blue)" }}><span></span></i>
</section>
<section>            <i className="fas fa-shopping-bag" style={{ backgroundColor: "var(--yellow)" }}></i>
</section>
          </div>
        </div>
        <section id="about_food">
          <h5 style={{ marginTop: 10 , paddingLeft:"0.5rem",width:"20rem",borderBottom:"2px solid var(--fg",height:"2rem"}}>About The Food</h5>
      <p>ttps://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149ttps://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149ttps://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149</p>

        </section>
      </div>
      <Past_Viewed_Items></Past_Viewed_Items>
    </>
  )
}