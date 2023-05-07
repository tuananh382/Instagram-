import axios from 'axios';
import React, { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../assets/style.css";
import { environment } from '../environments/environment';
import { AuthContext } from "../providers/context-provider";

const API_URL = environment.backEnd

async function handleLogin(username, password, setLoggedIn) {
    const response = await axios.post(`${API_URL}/auth/login`, {
        username,
        password
    });

    if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
        setLoggedIn(true); // Cập nhật giá trị isLoggedIn
    }

    return response.data;
}

function Login() {
    const navigate = useNavigate()
    const { setLoggedIn, isLoggedIn } = useContext(AuthContext);

    const handleSubmit = async (event) => {
        debugger
      event.preventDefault();
      const { username, password } = event.target.elements;
      try {
        await handleLogin(username.value, password.value, setLoggedIn);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
        if (isLoggedIn) {
        //   const user = JSON.parse(localStorage.getItem('user'));
          navigate('/');
        }
    }, [isLoggedIn, navigate])

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <div className="loginform">
                    <p>INSTAGRAM</p>
                    <input className="username" type="text" placeholder="Tên đăng nhập" name='username'></input>
                    <input className="password" type="text" placeholder="Mật khẩu" name='password'></input>
                    <button className="loginbutton" type="submit">Đăng nhập</button>
                    <div className="line"></div>
                    <a href="">Đăng nhập bằng Facebook</a>
                    <a href="">Quên mật khẩu?</a>
                </div>
                <div className="resgister">
                    <p>Bạn chưa có tài khoản?<a href="resgister">Đăng ký</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login