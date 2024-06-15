import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Error from "./pages/Error";
import ViewFood from "./pages/ViewFood";
import Orders from "./pages/Orders";
import Account from "./pages/Account";
import AddPlate from "./pages/AddPlate";
import Items from "./pages/Items";
import ContactWithUs from "./pages/ContactWithUs";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";
import OrderDetails from "./pages/OrderDetails";
import DEMO from "./pages/DEMO";
import Admin from "./pages/Admin";
import Online_Join from "./pages/Online_Join";
import Yummians from "./pages/Yummians";
import Load from "./pages/Load";
import Seller_Signup from "./pages/Seller_Signup";
import Seller_Login from "./pages/Seller_Login";
import Seller_Pannel from "./pages/Seller_Pannel";
import Meet_Random from "./pages/Meet_Random";
import Seller from "./pages/Seller";
import { x_secret } from "./pages/X";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Mode,
  get_Local_User,
  encryption,
  decryption,
  set_Local_User,
} from "./pages/Utility";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, createContext, useState } from "react";

export const UserContext = createContext();

import { socket } from "./pages/SOCKET-config";

let temp_help = 0;
export default function App() {
  const [user, setUser] = useState({
    name: "Guest_X",
    gender: "dragon",
    is_Admin: false,
  });
  const [load, setLoad] = useState(false);

  useEffect(() => {
    Mode();
    if (
      localStorage.getItem("__yummy__temp__user__") == null ||
      localStorage.getItem("__yummy__temp__user__") == "{}"
    ) {
      localStorage.setItem("__yummy__temp__user__", "");
    }
    socket.on("yes_check", (enc_data) => {
      const dec_data = JSON.parse(decryption(enc_data));
      if (!dec_data.gmail) {
        setUser({
          name: "Guest_X",
          gender: "dragon",
          is_Admin: false,
        });
        setLoad(false);
        set_Local_User("");
        return;
      }

      setUser(dec_data);

      set_Local_User(dec_data);
      setLoad(false);
    });

    if (get_Local_User()) {
      setUser(get_Local_User());
    }
  }, []);

  useEffect(() => {
    if (temp_help == 1) {
      if (user.gmail) {
        //user exist in local

        const id = user.gmail;
        socket.emit("early_check", encryption(id));
        setLoad(true);
      }
    }
    temp_help++;
  }, [user]);

  return (
    <>
      <UserContext.Provider
        value={{ user_Details: [user, setUser], loading: [load, setLoad] }}
      >
        <ToastContainer
          style={{
            zIndex: 1e100 + "",
            fontSize: "0.7rem",

          }}
          autoClose={2000}
        />
        {load ? <Load /> : null}
        <Online_Join></Online_Join>
        <BrowserRouter>
          <Routes>
            <Route path="/demo" element={<DEMO />}></Route>

            <Route index element={<Home />}></Route>

            <Route path="/login" element={<Login />}></Route>

            <Route path="/signup" element={<Signup />}></Route>

            <Route path="/viewfood/:foodid" element={<ViewFood />}></Route>
            <Route path="/items/:alpha" element={<Items />}></Route>
            <Route path="/orders/:typeoford" element={<Orders />}></Route>

            <Route path="/addplate" element={<AddPlate />}></Route>
            <Route
              path="/account/contactwithus"
              element={<ContactWithUs />}
            ></Route>

            <Route path="/account/aboutus" element={<AboutUs />}></Route>
            <Route path="/account/profile" element={<Profile />}></Route>
            <Route path="/account" element={<Account />}></Route>


            <Route
              path="/orders/orderdetails/:oid"
              element={<OrderDetails />}
            ></Route>
<Route path="/seller" element={<Seller/>}>   </Route> 
<Route path="/seller-login" element={<Seller_Login />}/>
<Route path="/seller-signup" element={<Seller_Signup />}/>
<Route path="/seller-pannel" element={<Seller_Pannel />}/>

            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/yummians" element={<Yummians />}></Route>
<Route path="/meet_random" element={<Meet_Random/>}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>


        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
