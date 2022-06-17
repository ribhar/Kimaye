import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {faFacebook,faGoogle } from '@fortawesome/free-brands-svg-icons'
import axios from "axios"

function Modal({ setOpenModal }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      Email: email,
      Password: password
    }
    const URL = "http://localhost:8080/auth/login"
    axios.post(URL, user).then(print => {
      if (print.data.Message == "Invalid credentials")
        alert("Invalid Credentials");
      else {
        console.log(print.data)
        localStorage.setItem("Account", JSON.stringify(print.data.valid[0]))
        setOpenModal(false);
        alert("Login successful")
      }
    })
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
      <div className="titleCloseBtn">
      <p style={{color:"white",marginLeft:'8%',fontSize:"24px",marginTop:'15%'}}>SIgn IN</p>   
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
           Close X
          </button>
        </div>
        <div className="inputBox">
          <form onSubmit={(e) =>handleSubmit(e)}>
          <label>Email Address*</label>
          <br/>
         <input onChange={(e)=>setEmail(e.target.value)} type="text"/>
         <br/>
         <label>Password*</label>
          <br/>
         <input onChange={(e)=>setPassword(e.target.value)} type="text"/>
         <p>Forget Your Password?</p>
        <input type="submit" className="loginButton" value="Login" />
          </form>
        </div>
        <div style={{backgroundColor:'#3B5998',height:'35px',marginTop:'5%',color:'white',cursor:'pointer',display:'flex',gap:'30%'}}>
          <p style={{margin:'2%',fontSize:'18px'}}>Sign In With Facebook</p><FontAwesomeIcon icon={faFacebook} style={{height:"30px",borderRadius:'5px', cursor:"pointer",marginTop:'2px'}} />
        </div>
        <div style={{backgroundColor:'#DD4B39',height:'35px',marginTop:'5%',color:'white',cursor:'pointer',display:'flex',gap:'37%'}}>
          <p style={{margin:'2%',fontSize:'18px'}}>Sign In With Google</p><FontAwesomeIcon icon={faGoogle} style={{height:"30px",borderRadius:'5px', cursor:"pointer",marginTop:'2px'}} />
        </div>
        <button className="createAccount">Create An Account</button>
      </div>
     
  
      
    
     
    </div>
  );
}

export default Modal;
