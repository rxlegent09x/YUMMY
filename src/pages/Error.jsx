import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function Error() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div id="err_Div">
        <img src="../public/_logo1.png"></img>
        <h3>Error 404 Occured !</h3>
        <Link to="/" draggable="true">
          <i className="fa fa-home"></i>
        </Link>
      </div>
    </>
  );
}
