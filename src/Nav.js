import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
    const history = useHistory()

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.addEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img onClick={()=>history.push("/")}
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img onClick={()=>history.push("/profile")}
          className="nav_avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ22H-et3cLZZfMf8uFawJt_8y3nZ-Y1u2wWg&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
