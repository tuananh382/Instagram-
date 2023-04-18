import React from "react";
import Header from "./header";
import avatar from "../assets/img/logo2.png"
function Mypage () {
    return (
        <div className="mypage">
            <Header active="mypage"/>
            <div className="container">
                <div className="infor">
                    <div className="avatar">
                        <img src={avatar}></img>
                    </div>
                    <div className="inforitem">
                        <div className="name">
                            <p>Huynh Tuan Anh</p>
                            <button className="change">Chinh sua</button>
                        </div>
                        <div className="post_fler_fl">
                            <p>0 bai viet</p>
                            <p>10k fllower</p>
                            <p>1 fllow</p>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <p>Bài viết</p>
                    <div className="status">

                    </div>
                </div>
            </div>
        </div>
    )  
}

export default Mypage