import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo2.png"
import "../assets/style.css"

function Header(props) {
    const [header, setHeader] = useState("first")
    const [active, setAtive] = useState(props.active)
    function clicksearch() {
        setHeader("second")
        setAtive("search")
    }
    function clicknotice() {
        setHeader("second")
        setAtive("notice")
    }
    return (
        <div >
            {header === "first" &&
                <div className="header">
                    <div className="logo">
                        {/* <img src={logo}></img> */}
                        <a href="/">Instagram</a>
                    </div>
                    <div className="menu">
                        <a className="itemmenu" id={active === "frontpage" ? "active" : ""} href="/"><i class="material-symbols-outlined">home</i>Trang Chủ</a>
                        <a className="itemmenu" id={active == "search" ? "active" : ""} onClick={clicksearch} ><i class="material-symbols-outlined">search</i>Tìm kiếm</a>
                        <a className="itemmenu" id={active == "explore" ? "active" : ""} href=""><i class="material-symbols-outlined">explore</i>Khám phá</a>
                        <a className="itemmenu" id={active == "reals" ? "active" : ""} href=""><i class="material-symbols-outlined">auto_read_play</i>Reels</a>
                        <a className="itemmenu" id={active === "message" ? "active" : ""} href="message"><i class="material-symbols-outlined">chat</i>Tin nhắn</a>
                        <a className="itemmenu" id={active == "notice" ? "active" : ""} onClick={clicknotice}><i class="material-symbols-outlined">favorite</i>Thông báo</a>
                        <a className="itemmenu" id={active == "createpost" ? "active" : ""} href="createpost"><i class="material-symbols-outlined">add_circle</i>Tạo</a>
                        <a className="itemmenu" id={active == "mypage" ? "active" : ""} href="mypage"><i class="material-symbols-outlined">home</i>Trang cá nhân</a>
                        <div className="more itemmenu"><i class="material-symbols-outlined">menu</i>Xem thêm</div>
                    </div>
                </div>
            }

            {header === "second" &&

                <div className="header1">
                    <div className="logo2">
                        <img src={logo}></img>
                        {/* <a href="/">Instagram</a> */}
                    </div>
                    <div className="menu1">
                        <a className="itemmenu" id={active === "frontpage" ? "active" : ""} href="/"><i class="material-symbols-outlined">home</i></a>
                        <a className="itemmenu" id={active == "search" ? "active" : ""} onClick={clicksearch} ><i class="material-symbols-outlined">search</i></a>
                        <a className="itemmenu" id={active == "explore" ? "active" : ""} href=""><i class="material-symbols-outlined">explore</i></a>
                        <a className="itemmenu" id={active == "reals" ? "active" : ""} href=""><i class="material-symbols-outlined">auto_read_play</i></a>
                        <a className="itemmenu" id={active === "message" ? "active" : ""} href="message"><i class="material-symbols-outlined">chat</i></a>
                        <a className="itemmenu" id={active == "notice" ? "active" : ""} onClick={clicknotice}><i class="material-symbols-outlined">favorite</i></a>
                        <a className="itemmenu" id={active == "createpost" ? "active" : ""} href="createpost"><i class="material-symbols-outlined">add_circle</i></a>
                        <a className="itemmenu" id={active == "mypage" ? "active" : ""} href="mypage"><i class="material-symbols-outlined">home</i></a>
                        <div className="more itemmenu"><i class="material-symbols-outlined">menu</i></div>
                    </div>
                    {active === "search" &&
                        <div className="boxmore">
                            <p>Tìm Kiếm</p>
                            <div className="boxsearch">

                                <input type="text" placeholder="Tìm kiếm"></input>
                            </div>
                            <div className="result">

                            </div>
                        </div>
                    }
                    {active === "notice" &&
                        <div className="boxmore">
                            <p>Thông báo</p>
                            <div className="result">

                            </div>
                        </div>
                    }
                </div>
            }
        </div>
    )


}

export default Header