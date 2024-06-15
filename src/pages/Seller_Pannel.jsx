import { TextField,Button } from "@mui/material";
import {useEffect,useState} from "react";
import {NavOfSeller} from "./Seller";

export default function Seller_Pannel() {

const [slide,setSlide] = useState(false);
  useEffect(()=>{

    window.document.title="Y_Seller";
    return (()=>{
      window.document.title="YUMMY";
            });

        });

return(
  <div style={{background:"white",minHeight:"100vh"}}>
       <NavOfSeller/>

  <div className="seller_pannel">
<section className="info" style={slide?{height:"auto"}:{height:"8rem"}}>
  <p style={{fontSize:"1rem",marginBottom:"2rem"}} className="fa">Hello ,  {"Seller_name"}</p>
<i className={`fa fa-angle-double-${slide?"up":"down"} tag_sel`} onClick={()=>setSlide(!slide)}></i>

<section className="sub_cat">
<p className="fa fa-shop" style={{width:"100%",height:"2rem",background:"black",display:"flex",alignItems:"center",color:"white",paddingLeft:"1rem",paddingRight:"1rem",justifyContent:"space-around"}}><i className="fa" style={{marginRight:"auto"}}>.close</i><i className="fa fa-edit"></i></p>
<TextField label="Seller id" color="success" readOnly value={""} className="inp_sub_cat"></TextField>
<TextField label="Seller name"  color="success" className="inp_sub_cat"></TextField>
<TextField label="Seller gmail"  color="success" readOnly value={""} className="inp_sub_cat" ></TextField>
<TextField label="Seller phone"  color="success" readOnly value={""}  className="inp_sub_cat"></TextField>
<TextField label="Resturant name"  color="success" className="inp_sub_cat"></TextField>
<TextField label="Resturant pincode"  color="success"  className="inp_sub_cat"></TextField>
<TextField multiline label="Seller address" color="success"  className="inp_sub_cat" ></TextField>
<Button color="warning"   variant="contained" className="inp_sub_cat" style={{display:"block"}}
>Update</Button>
</section>




</section>

<section className="main_menu">
  <h1 className="fa"> Seller Control Panel</h1>
<i className="fa fa-list"> List Of All Items</i>
<i className="fa fa-add"> Add A New Item</i>
<i className="fa fa-edit"> Edit Existing Items</i>
<i className="fa fa-shopping-basket"> All Orders</i>
<i className="fa fa-send"> Feedback</i>
<i className="fa fa-support"> Customer Support & Help</i>
<p className="fa fa-backward pxz"></p>
</section>



  </div>
  </div>
)

}