import React from "react";
import "../assets/style.css"

function Login() {
    return (
        <div className="login">
            <div className="loginform">
                <p>INSTAGRAM</p>
                <input className="username" type="text" placeholder="Số điện thoại"></input>
                <input className="password" type="text" placeholder="Mật khẩu"></input>
                <button className="loginbutton">Đăng nhập</button>
                <div className="line"></div>
                <a href="">Đăng nhập bằng Facebook</a>
                <a href="">Quên mật khẩu?</a>
            </div>
            <div className="resgister">
                <p>Bạn chưa có tài khoản?<a href="resgister">Đăng ký</a></p>
            </div>
        </div>
    )
}

export default Login