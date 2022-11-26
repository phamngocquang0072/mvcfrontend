import React from "react";
import HeadPhone from '../assets/img/headphones.svg';
import './css/Login.scss';
import {Link} from "react-router-dom";

class Login extends React.Component{
    render() {
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
                            <div class="form__group field">
                                <input type="input" class="form__field" placeholder="Name" name="login" id='name' required />
                                <label for="login" class="form__label">UserName</label>
                            </div>
                            <div class="form__group field">
                                <input type="input" class="form__field" placeholder="Name" name="password" id='name' required />
                                <label for="password" class="form__label">Password</label>
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
}

export default Login;