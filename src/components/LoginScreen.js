import React, { useState } from 'react';
import '../Resources/login.css';
import {toast} from 'react-toastify';

const LoginScreen = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
   
        const onSubmit = (e) => {
            e.preventDefault();
            if(email === "" || password === ""){
                alert("Please fill the required details!");
            }
            else{
            window.location.href="http://localhost:3000/home";
            }
            setEmail("");
            setPassword("");
        }
 

    return(
        <>
         <form onSubmit={onSubmit} >
              <div className="container">
                <div className="row">
                    <div className="">
                        <div className="login-card">
                            <h1>Login!</h1>                           
                            <div className="login-card-body">
                                  <div className="input">
                                      <label>Email</label>
                                      <input type="email" value={email} className="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} id="email" name="email"/>
                                  </div>
                                  <div className="input">
                                      <label>Password</label>
                                      <input type="password" className="password" value={password} minLength="10" maxLength="10"  placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} id="password" name="password"/>
                                  </div>
                               <button type="submit" className="submit">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </>
    )
};
export default LoginScreen;

