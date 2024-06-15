import {toast} from 'react-toastify';



export const getQ = () => {
  const x = Math.floor(Math.random() * 2);
  if (x == 1) {
    //arithmetic
    const num1 = Math.floor(Math.random() * 11);
    const num2 = Math.floor(Math.random() * 11);
    const signArray = ["+", "-", "*"];
    const sign = signArray[Math.floor(Math.random() * 3)];
    const que = `${num1}${sign}${num2}=?`;
    const ans = eval(que.slice(0, -2));

    return ([que, ans]);

  }
  else {
    //greater&Lesser
    const num1 = Math.floor(Math.random() * 101);
    const num2 = Math.floor(Math.random() * 101);
    const num3 = Math.floor(Math.random() * 101);
    const q = Math.floor(Math.random() * 2);
    if (q == 1) {
      //greater than
      return ([`find biggest ${num1}, ${num2}, ${num3} ?`, Math.max(num1, num2, num3)]);
    }
    else {
      //less than
      return ([`find smallest ${num1}, ${num2}, ${num3} ?`, Math.min(num1, num2, num3)]);
    }

  }
}

export const TimeZ = () => {
  const t = new Date();
  const h = t.getHours();
  const now = ((h >= 5 && h < 12) ? "Morning" : (h >= 12 && h < 13) ? "Noon" : (h >= 13 && h < 17) ? "Afternoon" : (h >= 17 && h < 20) ? "Evening" : "Night");
  return (now)
}

export function changeTheme(x, y) {
  let r = document.querySelector(':root');
  r.style.setProperty('--bg', x);
  r.style.setProperty('--fg', y);
  if(x=="black"){
    localStorage.setItem("yummy_theme_mode","dark");
    toast("Dark Mode Enabled");
  }
  else{
    localStorage.setItem("yummy_theme_mode","light");
    toast("Light Mode Enabled");
  }
  
}
export function changeThemeMode(x){
  if(x=="dark"){
    changeTheme("black","rgb(20,220,140)");
  }
  else{
    changeTheme("#E6E6E6","green");
  }
  
}
export function nowMode(){
  return localStorage.getItem("yummy_theme_mode");  
}

export function spido(){
    const mode=nowMode();
    if(mode==="light"){
        changeThemeMode("dark");
    }
    else{
        changeThemeMode("light");
    }

  
}



export function Mode(){
  const g=localStorage.getItem("yummy_theme_mode");
  let x="",y="";
  if(!g){
localStorage.setItem("yummy_theme_mode","dark");
    //default
    if(TimeZ()!="Night"){
      //light
     x="#E6E6E6";
       y="green";
  }
  else{
    //dark
    x="black";
     y="rgb(20,220,140)";
  }
    changeTheme(x,y);
return;
  }
  
  
  if(g=="dark"){
    //dark
    x="black";
    y="rgb(20,220,140)";
  }
  else{
    //light
    x="#E6E6E6";
    y="green";
    
  }
  changeTheme(x,y);
}


export const isAlpha = str => /^[a-zA-Z]*$/.test(str);
export const is_Valid=(data,qn)=>{

  
  //check empty or not 
  const f = Object.keys(data);
  for(let i=0;i<f.length;i++){
   if(!(data[f[i]].trim())) return {status:false,msg:"Please fill all the fields Corectly ! "};
  }


  const {name,pass,gmail,gender,phone,pin,address,ans}=data;
  
  if(!(name.trim().length>=3 && name.trim().length<=20 && isAlpha(name[0])==true)) {
     //check username 
    return ({
      status:false,
      msg:"Please enter a valid username !"
    });

  }

  if(!(pass.trim().length>=3 && pass.trim().length<=9)){
    //check pass
    return({
      status:false,
      msg:"Please enter a valid password !"
    });
    
  }
  if(!(gmail.trim().length>=6 && gmail.trim().length<=30 && gmail.endsWith("@gmail.com") )){
    //check gmail
    return({
      status:false,
      msg:"Please enter a valid gmail !"
    });
    
  }
  if(!(phone.trim().length==10)){
    //check phone
    return({
      status:false,
      msg:"Please enter a valid phone number !"
    });
    
  }
  if(!(ans==qn)){
    //check ans
    return({
      status:false,
      msg:"Please enter a valid answer !"
    });
    
  
  }
  if(!(address.trim().length>=20 && address.trim().length<=100)){
    //check address
    return({
      status:false,
      msg:"Please enter a valid address !"
    });
    
  }
  
  if(!(pin.trim().length==6)){
    //check pin
    return({
      status:false,
      msg:"Please enter a valid pin !"
    });
  }
  
  return fetch(`https://api.postalpincode.in/pincode/${pin}`).then(res=>res.json()).then(codds=>{
           const sts = codds[0]["Status"];
            if(sts === "Error"){
              return({
                status:false,
                msg:"Please enter a valid pin !"
              })
            }
            else{
              return({
                status:"true"
              })
            }
          }).catch(err=>{
            return({
              status:false,
              msg:"Something Went Wrong !"
            });
  });


  

}


    
export const get_Loc = (pin) => {
  if (pin) {

    fetch(`https://api.postalpincode.in/pincode/${pin}`).then(res => res.json()).then(data => {
        console.log(data);
        return (data);

      })

  }
  else {
    return "Please Insert Any Zip Code !";
  }
}




import CryptoJS from "crypto-js";
export const encryption=(data)=>{
   const passphrase = 'xxxxxxxxxxxxxxxx';
   return CryptoJS.AES.encrypt(data, passphrase).toString();
}
export const decryption=(data)=>{
   const passphrase = 'xxxxxxxxxxxxxxxx';
  const bytes = CryptoJS.AES.decrypt(data, passphrase);

  return bytes.toString(CryptoJS.enc.Utf8);
}


//locally store users get and set 
export const get_Local_User=()=>{

if(!(localStorage.getItem("__yummy__temp__user__"))){
  localStorage.setItem("__yummy__temp__user__","");
  return "";
}

  
const data = localStorage.getItem("__yummy__temp__user__");
  const dtx = JSON.parse(data);
   const decryptData = decryption(dtx.details);
  
  return JSON.parse(decryptData);
  
}
export const set_Local_User=(data)=>{
  
  const dt = encryption(JSON.stringify(data));
  
  localStorage.setItem("__yummy__temp__user__",JSON.stringify({"details":dt}));
  return true;

  
}



export const time_Now=()=>{
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let d = new Date();
  let day = days[d.getDay()];
  let hr = d.getHours();
  let min = d.getMinutes();
  const sec = d.getSeconds(); 
  if (min < 10) {
      min = "0" + min;
  }
  let ampm = "am";
  if( hr > 12 ) {
      hr -= 12;
      ampm = "pm";
  }
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  return (day + " " + hr + ":" + min + ":" + sec + ampm + " " + date + " " + month + " " + year);
}

