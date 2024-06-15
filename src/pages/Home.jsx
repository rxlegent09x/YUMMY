import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TimeZ, spido } from "./Utility";
import Past_Viewed_Items from "./Past_Viewed_Items";
import { toast } from "react-toastify";
import { UserContext } from "../App";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Sub_Nav(props) {
  const cnum = props.num;
  
  const { user_Details, loading } = useContext(UserContext);
  const stl = {
    backgroundColor: "var(--bg)",
    color: "var(--fg)",
    border: "2px solid var(--fg)",
    boxShadow: "0px 0px 4px 2px var(--bg)",
  };
  const [user, setUser] = user_Details;
  const [load, setLoad] = loading;





  
  return (
    <>
      <div id="sub_Nav" style={{ display: props.visible ? "flex" : "none" }}>
        <Link to="/" title="Store">
          {" "}
          <i
            className="fas fa-shop"
            id="home_Btn"
            style={cnum == 1 ? stl : null}
          ></i>
        </Link>

        <Link to="/account" title={user.name}>
          {" "}
          <i
            className={"fas fa-" + (user.gender == "dragon" ? "dragon" : null)}
            id="account_Btn"
            style={cnum == 2 ? stl : null}
          >
            {user.gender != "dragon" ? user.name[0] : null}
          </i>
        </Link>

        <Link to="/addplate" title="Add plate">
          {" "}
          <i
            className="fas fa-pizza-slice"
            id="addPlate_Btn"
            style={cnum == 3 ? stl : null}
          >
            <span>+</span>
            <p>0</p>
          </i>
        </Link>

        <Link to="/orders/ongoing" title="Orders">
          {" "}
          <i
            className="fas fa-shopping-bag"
            id="orders_Btn"
            style={cnum == 4 ? stl : null}
          ></i>
        </Link>
        <Link title="Mode change">
          <i
            className="fa-solid fa-lightbulb"
            id="spido_ico"
            style={{ fontSize: "1.5rem" }}
            onClick={() => spido()}
          ></i>
        </Link>
      </div>
    </>
  );
}

export default function Home() {
  const [scrl, setScrl] = useState(0);
  const nav = useNavigate();

  const [txt, setTxt] = useState("");
  const [cng, setCng] = useState(1);
  const top = () => {
    setCng(0);
  };
  const bottom = () => {
    setCng(1);
  };
  const search_Txt = () => {
    if (txt.trim().toLowerCase().length == 0) {
      toast("Please enter a valid search text");
      return;
    }
    nav("/items/" + txt.trim().toLowerCase());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.innerWidth < 806) {
      window.onscroll = () => {
        if (scrl < +window.scrollY) {
          top();
        } else {
          bottom();
        }
        setScrl(+window.scrollY);
      };
    }

    return () => {};
  }, []);

  return (
    <>
      {/*<Load></Load> */}
      <section>
        <div id="main_Bar">
          <img
            src="logo.png"
            alt={"logo"}
            id="logo"
            loading="auto"
            style={
              window.innerWidth < 806
                ? { display: cng == 0 ? "none" : "block" }
                : {}
            }
            onClick={() => toast("Hey It's Yummy ! Whats Up ?")}
          ></img>

          <section id="help_main">
            <input
              type="search"
              id="srch_Text"
              placeholder="Search The Taste..."
              onChange={(e) => setTxt(e.target.value)}
              style={
                window.innerWidth < 806
                  ? { marginTop: cng == 0 ? "3rem" : "0rem" }
                  : {}
              }
            ></input>
            <button id="srch_Btn" onClick={() => search_Txt()}>
              <i className="fa fa-search"></i>
            </button>
          </section>
          <Sub_Nav name="home" num={1} visible={true} />
        </div>

        <div id="category_Div">
          <section onClick={() => nav("/items/all_catagories")}>
            <i className="fa fa-list-alt"></i>
            <p>*Categories</p>
          </section>
          <section onClick={() => toast.success("Call The Copied Number !")}>
            <img src="https://www.storypick.com/wp-content/uploads/2020/10/50167705913_1ebd370d92_c.jpg"></img>
            <p>Wishdish</p>
          </section>
          <section onClick={() => nav("/items/breakfast")}>
            <img src="https://cdn-icons-png.flaticon.com/512/887/887359.png"></img>
            <p>Breakfast</p>
          </section>
          <section onClick={() => nav("/items/lunch")}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnoaU-WEQuo7E8dsaKqSjPzH2Uaf-OTlv-jA&usqp=CAU"></img>
            <p>Lunch</p>
          </section>
          <section onClick={() => nav("/items/dinner")}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjYoigh4zaRw1x_7WKuELTJN5P3PtnjJ37g&usqp=CAU"></img>
            <p>Dinner</p>
          </section>
          <section onClick={() => nav("/items/fastfood")}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0bmrftWCOowZIdRPvF8kYIZlrIlzBsbp6DA&usqp=CAU"></img>
            <p>Fastfood</p>
          </section>
          <section onClick={() => nav("/items/sweets")}>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/001/397/486/small/indian-sweet-dumpling-dessert-free-photo.jpg"></img>
            <p>Sweets</p>
          </section>
          <section onClick={() => nav("/items/colddrinks")}>
            <img src="https://thumbs.dreamstime.com/b/summer-blue-sky-cold-drinks-165280519.jpg"></img>
            <p>Colddrinks</p>
          </section>
          <section onClick={() => nav("/items/healthyfood")}>
            <img src="https://www.licious.in/blog/wp-content/uploads/2020/12/3-Step-Chicken-Salad.jpg"></img>
            <p>Healthyfood</p>
          </section>
          <section onClick={() => nav("/items/alcohols")}>
            <img src="https://png.pngtree.com/png-clipart/20221017/original/pngtree-no-alcohol-with-forbidden-symbol-vector-clipart-png-image_8699814.png"></img>
            <p>Alcohols</p>
          </section>{" "}
          <section onClick={() => nav("/items/hotdrinks")}>
            <img src="https://images.healthshots.com/healthshots/en/uploads/2023/01/08125853/jaggery-tea.jpg"></img>
            <p>Hotdrinks</p>
          </section>
          <section onClick={() => nav("/items/specialpack")}>
            <img src="https://assets.winni.in/product/primary/2014/8/36065.jpeg?dpr=1&w=1000"></img>
            <p>Specialpack</p>
          </section>
        </div>
        {/*carasoule*/ }
<div className="slides">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
          
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          
          >
          <SwiperSlide className="slides"><img src="https://source.unsplash.com/random/520x400/?chicken"/></SwiperSlide>
          <SwiperSlide className="slides"><img src="https://source.unsplash.com/random/520x400/?curry"/></SwiperSlide>
          <SwiperSlide className="slides"><img src="https://source.unsplash.com/random/520x400/?resturant"/></SwiperSlide>
          <SwiperSlide className="slides"><img src="https://source.unsplash.com/random/520x400/?fish"/></SwiperSlide>
          <SwiperSlide className="slides"><img src="https://source.unsplash.com/random/520x400/?fruit"/></SwiperSlide>
        </Swiper>

</div>
        <Past_Viewed_Items></Past_Viewed_Items>
        <p
          style={{
            textAlign: "center",
            fontSize: "1rem",
            padding: "1rem",
            marginBottom: "-0.5rem",
            width: "100vw",
            height: "auto",
            backgroundColor: "",
            position: "relative",
            bottom: "3rem",
          }}
        >
          ॐ सह नाववतुसहनौ भुनक्तु। सहवीर्यं करवावहैतेजस्विनावधीतमस्तुमा विद्विषा
          वहै॥ ॐ शान्ति: शान्ति: शान्ति:॥
        </p>

        <div id="show_spons">
          <section>
            <h1>YummY Suggested Foods For {TimeZ()}</h1>
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" />
            <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400" />
            <img src="https://media.istockphoto.com/id/1403973419/photo/table-top-of-food-spread-on-table.jpg?b=1&s=612x612&w=0&k=20&c=OSi7adYFKTNCUil3eTUoTWzKk5vPjeeTMXMZhXGrzxc=" />
            <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400" />
            <img src="https://media.istockphoto.com/id/1403973419/photo/table-top-of-food-spread-on-table.jpg?b=1&s=612x612&w=0&k=20&c=OSi7adYFKTNCUil3eTUoTWzKk5vPjeeTMXMZhXGrzxc=" />
          </section>
          <section>
            <h1>Top Trending Foods</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqhdTEPR1kmN-WE207VEeLopdGUXSIe1UpCxN52YBvlw&s" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhM_HwX9vh8Ad2ouRjv2dKY-fJijcdQTmx7vjHFmML5A&s" />
            <img src="https://image.shutterstock.com/image-photo/chicken-fillet-salad-healthy-food-260nw-1721943142.jpg" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhM_HwX9vh8Ad2ouRjv2dKY-fJijcdQTmx7vjHFmML5A&s" />
            <img src="https://image.shutterstock.com/image-photo/chicken-fillet-salad-healthy-food-260nw-1721943142.jpg" />
          </section>

          <section>
            <h1>Best Rated Foods</h1>
            <img src="https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlI73_o5bWceo9-GirTXq8d-k4V_4c_1ilw&usqp=CAU" />
            <img src="https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702080000&semt=ais" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlI73_o5bWceo9-GirTXq8d-k4V_4c_1ilw&usqp=CAU" />
            <img src="https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702080000&semt=ais" />
          </section>

          <section>
            <h1>Top Resturants</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRsc1QAZBXzHZZAtmDl9N8RrGaJuehRpQ9Jk28hyA5ARjXx13yQ8QuolZzta8p5eQVRDU&usqp=CAU" />
            <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30151550/1317.png" />
            <img src="https://t4.ftcdn.net/jpg/02/88/84/21/360_F_288842168_nhgjfMO0vtARTs6obR3i9bfdRIuaSL56.jpg" />
            <img src="https://images-platform.99static.com//nLgWk9kDV7svStT7X2uzGnfVvkE=/0x0:1000x1000/fit-in/500x500/99designs-contests-attachments/79/79596/attachment_79596552" />
            <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30151557/1516-768x591.png" />
            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/274416718/original/9f07967fa86e931d0f689b0548fa9bcdfabc4414/do-modern-restaurant-logo.jpg" />
          </section>
          <section>
            <h1>Sponsered By</h1>
            <img src="https://pitchergroup.com/wp-content/uploads/2012/07/Logo-Soup-Sponsors.jpg" />
            <img src="https://image.shutterstock.com/image-photo/image-260nw-697628668.jpg" />
            <img src="https://img.freepik.com/free-vector/hand-drawn-healthy-food-logo-template_23-2149650556.jpg" />
          </section>
        </div>

        <footer>
          <i>
            <p className="fa fa-">
              ©All CopyRights Reserving By RX_LEGENT_09X
            </p>
          </i>
          <section>
            <a href="https://flipkart.com" target="_blank">
              {" "}
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://flipkart.com" target="_blank">
              {" "}
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://flipkart.com" target="_blank">
              {" "}
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://flipkart.com" target="_blank">
              {" "}
              <i className="fa fa-github"></i>
            </a>
            <a href="https://flipkart.com" target="_blank">
              {" "}
              <i className="fa fa-google"></i>
            </a>
            <a href="https://flipkart.com" target="_blank">
              {" "}
              <i className="fa fa-youtube"></i>
            </a>
            <a href="https://flipkart.com" target="_blank">
              {" "}
              <i className="fa fa-snapchat-ghost"></i>
            </a>
            <a href="https://flipkart.com" target="_blank">
              {" "}
              <i className="fa fa-pinterest"></i>
            </a>
            <a href="https://flipkart.com" target="_blank">
              {" "}
              <i className="fa fa-linkedin"></i>
            </a>
          </section>
        </footer>

      </section>
    </>
  );
}
