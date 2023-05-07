import React, { useState} from "react";
import {useNavigate} from "react-router-dom"
import "../assets/style.css"
import SyntheticEvent from "react"
import { environment } from '../environments/environment';
const API_URL = environment.backEnd
function Login() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();
    const [annound, setAnnound] = useState()
    const login = async(e: SyntheticEvent) => {
        e.preventDefault()
        const reponse = await fetch(`${API_URL}/auth/login`, {
         method: "POST",
         body: JSON.stringify({
             username,
             password
         })
        }) 
        const content = await reponse.json()
        navigate("/frontpage")
     }
    return (
        <div className="login">
            <div className="loginform">
                <p>INSTAGRAM</p>
                <input className="username" type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Số điện thoại"></input>
                <input className="password" type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Mật khẩu"></input>
                <button className="loginbutton" onClick={login}>Đăng nhập</button>
                <p>{annound}</p>
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