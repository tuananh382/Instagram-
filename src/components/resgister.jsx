import React from "react";
import "../assets/style.css"

function Resgister () {
    return (
        <div className="login">
            <div className="resgisterform">
                <p>INSTAGRAM</p>
                <input className="username" type="text" placeholder="Số điện thoại"></input>
                <input className="yourname" type="text" placeholder="Họ và tên"></input>
                <input className="password" type="text" placeholder="Mật khẩu"></input>
                <input className="passwordagain" type="text" placeholder="Nhập lại mật khẩu"></input>
                <button className="resgisterbutton">Đăng ký</button>
                <div className="line"></div>
                <a href="">Đăng nhập bằng Facebook</a>
            </div>
            <div className="resgister">
                <p>Bạn đã có tài khoản?<a href="/login">Đăng nhập</a></p>
            </div>
        </div>
    )
}

export default Resgister