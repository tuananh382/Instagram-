import React from "react";
// import SyntheticEvent from "react"
import "../assets/style.css";
// import ApiService from "../services/api.service"
// import axios from 'axios';
// import { environment } from '../environments/environment';
// const API_URL = environment.backEnd
function Resgister () {
    // const [username, setUsername] = useState()
    // const [password, setPassword] =useState()
    // const [fullName, setFullname] = useState()
    // const resgisteruser = async(e: SyntheticEvent) => {
    //    e.preventDefault()
    //    await fetch(`${API_URL}/auth/register`, {
    //     method: "POST",
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify({
    //         username,
    //         password,
    //         fullName
    //     })
    //    }) 
    // }
    return (
        <div className="login">
            <div className="resgisterform">
                <p>INSTAGRAM</p>
                {/* <input className="username" type="text" onChange={(e)=> setUsername(e.target.value)} placeholder="Số điện thoại"></input>
                <input className="yourname" type="text"onChange={(e) => setFullname(e.target.value)} placeholder="Họ và tên"></input>
                <input className="password" type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Mật khẩu"></input>
                <input className="passwordagain" type="text" placeholder="Nhập lại mật khẩu"></input>
                <button className="resgisterbutton" onClick={resgisteruser}>Đăng ký</button> */}
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