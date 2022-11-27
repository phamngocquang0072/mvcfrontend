import React from "react";
import HeadPhone from '../assets/img/headphones.svg';
import '../Pages/css/Login.scss';
import {Link} from "react-router-dom";
// import Axios from "axios"
import { useState } from 'react'

const LoginComponent = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    // const token = ''
    // const config = {
    //     headers: { Authorization: `Bearer ${token}` }
    // };
    
    // const bodyParameters = {
    //    username: "value",
    // };
    
    // Axios.post( 
    //   'http://localhost:7100/api/v1/autho/login',
    //   bodyParameters,
    //   config
    // ).then(console.log).catch(console.log);

    return(
        <section id="main">
                <div className="nav-item">
                    <a className="navbar-brand" href="/">Vusic</a>
                </div>
                <div className="main-row">
                    <div className="main-row-img">
                        <img className="head-phone-img" src={HeadPhone} alt=""/>
                    </div>
                    <div className="main-row-text">
                        <h1>Login</h1>
                        <div className="form__group field">
                            <input type="input" value={userName} onChange={e => setUserName(e.target.value)} class="form__field" placeholder="Name" name="login" id='name' required />
                            <label htmlFor="login" className="form__label">UserName</label>
                        </div>
                        <div className="form__group field">
                            <input type="input" value={password} onChange={e => setPassword(e.target.value)} class="form__field" placeholder="Name" name="password" id='name' required />
                            <label htmlFor="password" className="form__label">Password</label>
                        </div>
                        <Link to={"/home"} className="btn btn-submit">
                            Start Listening
                        </Link>
                        <Link to={"/register"} className="btn">
                            Register
                        </Link>
                    </div>
                </div>
        </section>
    );
}

export default LoginComponent