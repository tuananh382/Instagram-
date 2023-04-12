import React from "react";
import logo from "../assets/img/logo2.png"
import "../assets/style.css"

function Header () {
    return (
        <div className="header">
            <div className="logo">
                {/* <img src={logo}></img> */}
                <a href="/">Instagram</a>
            </div>
            <div className="menu">
               <div className="itemmenu">
                    <a className="frontpage"><i class="material-symbols-outlined">home</i>FrontPage</a>
               </div>
            </div>
            <div className="more">

            </div>
        </div>
    )
}

export default Header