import React from "react";
import HeadPhone from '../assets/img/headphones.svg';
import './css/Register.scss';
import {Link} from "react-router-dom";

class Register extends React.Component{
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
                            <h1>Register</h1>
                            <div class="form__group field">
                                <input type="input" class="form__field"  name="login" id='login' required />
                                <label for="login" class="form__label">UserName</label>
                            </div>
                            <div class="form__group field">
                                <input type="input" class="form__field"  name="password" id='password' required />
                                <label for="password" class="form__label">Password</label>
                            </div>
                            <div class="form__group field">
                                <input type="input" class="form__field"  name="rppassword" id='rppassword' required />
                                <label for="rppassword" class="form__label">Confirm a password</label>
                            </div>
                            <div class="form__group field">
                                <input type="input" class="form__field"  name="email" id='email' required />
                                <label for="email" class="form__label">Email</label>
                            </div>
                            <div class="form__group field">
                                <input type="date" class="form__field" name="birthday" required="" />
                                <label for="birthday" class="form__label">Birthday</label>
                            </div>
                            
                            <Link to={"/login"} className="btn btn-submit">
                                Create and launch to login
                            </Link>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Register;