import { useState, useEffect } from 'react';
import { socket } from "./SOCKET-config";


export default function Online_Join() {


  const [no, setNo] = useState(0);
  useEffect(() => {
    socket.on("yes_join", (howMany) => {
      setNo(howMany);
    });

  }, []);





  return (
    <>
      <div className="online">

        <i className="fa fa-wifi"> {no}</i>


      </div>
    </>
  )





}