import React, { useState } from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom';

const l = [{email:"loki",password:"123456789"}]

   
const Login =()=> {
    const[user,setUser]=useState({
        email:"",
        password:"",
        u:'',
        count:0
    })
const handleLogin=(event)=>{
        const {name,value}  =event.target;
        setUser((val)=>{
            return{
                ...val,
                [name]:value
            }
        })
        return null;
    }
    const handleLoginValues = () =>{
        console.log(user.email);
        console.log(user.password);
        if(l[0].email == user.email)
        {
            history.push("/dashboard");
            alert("dfgdsfgdfgdsfgdsfg");
        }
        else{
            alert("Enter The Valid User Name And Password")
            
        }
        
    }
    const history = useHistory();
    return (     
    <div className="container" id="container">
        {/* <div className="form-container sign-up-container">
                <h1>Create Account</h1>
                <div className="social-container">
                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
        </div> */}
       
        <div className="form-container sign-in-container">
        
            <div className="form">
                <h1>Sign in</h1>
                <div className="social-container">
                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" name="email" value={user.email} onChange={handleLogin}/>
                <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleLogin}/>
                <a href="#">Forgot your password?</a>
                <button onClick={handleLoginValues}>Sign In</button>
            </div>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button className="ghost" id="signIn">Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                <div className="alert alert-primary " role="alert" > 
                    Username ='loki'<br/>
                    password =123456789<br/>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Login;