import NavOfHead from "./NavOfHead";
import { useState,useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Items() {
  const prm = useParams();
  const nav = useNavigate();

useEffect(()=>{
  window.scrollTo(0,0);

},[]);


  return (
    <>
      <NavOfHead name="Items" />

      <div id="items_Div">
        <p
          style={{
            fontSize: "0.7rem",
            width: "100vw",
            height: "auto",
            wordBreak: "break-word",
          }}
        >
          <i className="fa fa-search"></i> Searching Result For {prm.alpha}
        </p>
        <div id="Items">
          <section onClick={() => nav("/viewfood/999")}>
            <section
              style={{
                backgroundImage: `url("https://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg")`,
              }}
            ></section>
            <i
              className="fas fa-pizza-slice"
              onClick={(e) => {
                e.stopPropagation();
                alert("Hello");
              }}
              style={{ backgroundColor: "var(--red)", color: "white" }}
            >
              <span>+</span>
            </i>
            <p>Raju dhaba's Chicken Mughlaai</p>
            <p>
              50% off <del>₹500 </del>
              <span>₹250</span>
            </p>
          </section>
          <section onClick={() => nav("/viewfood/999")}>
            <section
              style={{
                backgroundImage: `url("https://source.unsplash.com/random/520x600/?food")`,
              }}
            ></section>

            <i className="fas fa-pizza-slice">
              <span>+</span>
            </i>
            <p>Sai Resturant... ddhdhdhhddhh.</p>
            <p>
              50% off <del>₹500</del>
              <span>₹250</span>
            </p>
          </section>
          <section onClick={() => nav("/viewfood/999")}>
            <section
              style={{
                backgroundImage: `url("https://source.unsplash.com/random/520x600/?food")`,
              }}
            ></section>

            <i className="fas fa-pizza-slice">
              <span>+</span>
            </i>
            <p>Sai Resturant... ddhdhdhhddhh.</p>
            <p>
              50% off <del>₹500</del>
              <span>₹250</span>
            </p>
          </section>{" "}
          <section onClick={() => nav("/viewfood/999")}>
            <section
              style={{
                backgroundImage: `url("https://source.unsplash.com/random/520x600/?food")`,
              }}
            ></section>

            <i className="fas fa-pizza-slice">
              <span>+</span>
            </i>
            <p>Sai Resturant... ddhdhdhhddhh.</p>
            <p>
              50% off <del>₹500</del>
              <span>₹250</span>
            </p>
          </section>{" "}
          <section onClick={() => nav("/viewfood/999")}>
            <section
              style={{
                backgroundImage: `url("https://source.unsplash.com/random/520x600/?food")`,
              }}
            ></section>

            <i className="fas fa-pizza-slice">
              <span>+</span>
            </i>
            <p>Sai Resturant... ddhdhdhhddhh.</p>
            <p>
              50% off <del>₹500</del>
              <span>₹250</span>
            </p>
          </section>{" "}
          <section onClick={() => nav("/viewfood/999")}>
            <section
              style={{
                backgroundImage: `url("https://source.unsplash.com/random/520x600/?food")`,
              }}
            ></section>

            <i className="fas fa-pizza-slice">
              <span>+</span>
            </i>
            <p>Sai Resturant... ddhdhdhhddhh.</p>
            <p>
              50% off <del>₹500</del>
              <span>₹250</span>
            </p>
          </section>{" "}
          <section onClick={() => nav("/viewfood/999")}>
            <section
              style={{
                backgroundImage: `url("https://source.unsplash.com/random/520x600/?food")`,
              }}
            ></section>

            <i className="fas fa-pizza-slice">
              <span>+</span>
            </i>
            <p>Sai Resturant... ddhdhdhhddhh.</p>
            <p>
              50% off <del>₹500</del>
              <span>₹250</span>
            </p>
          </section>{" "}
          <section onClick={() => nav("/viewfood/999")}>
            <section
              style={{
                backgroundImage: `url("https://source.unsplash.com/random/520x600/?food")`,
              }}
            ></section>

            <i className="fas fa-pizza-slice">
              <span>+</span>
            </i>
            <p>Sai Resturant... ddhdhdhhddhh.</p>
            <p>
              50% off <del>₹500</del>
              <span>₹250</span>
            </p>
          </section>{" "}
          <section onClick={() => nav("/viewfood/999")}>
            <section
              style={{
                backgroundImage: `url("https://source.unsplash.com/random/520x600/?food")`,
              }}
            ></section>

            <i className="fas fa-pizza-slice">
              <span>+</span>
            </i>
            <p>Sai Resturant... ddhdhdhhddhh.</p>
            <p>
              50% off <del>₹500</del>
              <span>₹250</span>
            </p>
          </section>{" "}
          <section onClick={() => nav("/viewfood/999")}>
            <section
              style={{
                backgroundImage: `url("https://source.unsplash.com/random/520x600/?food")`,
              }}
            ></section>

            <i className="fas fa-pizza-slice">
              <span>+</span>
            </i>
            <p>Sai Resturant... ddhdhdhhddhh.</p>
            <p>
              50% off <del>₹500</del>
              <span>₹250</span>
            </p>
          </section>{" "}
          <section onClick={() => nav("/viewfood/999")}>
            <section
              style={{
                backgroundImage: `url("https://source.unsplash.com/random/520x600/?food")`,
              }}
            ></section>

            <i className="fas fa-pizza-slice">
              <span>+</span>
            </i>
            <p>Sai Resturant... ddhdhdhhddhh.</p>
            <p>
              50% off <del>₹500</del>
              <span>₹250</span>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
