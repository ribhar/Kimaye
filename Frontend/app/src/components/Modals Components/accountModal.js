import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {faFacebook,faGoogle } from '@fortawesome/free-brands-svg-icons'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
`;
function Modal({ setOpenModal }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [data, setData] = React.useState("");
  const [login, setLogin] = React.useState(false);
  const navigate=useNavigate()
  const nav = () => {
    setOpenModal(false);
    navigate("/auth")
  }
  const handleLogout = () => {
    setLogin(!login);
    localStorage.removeItem("Account")
    localStorage.removeItem("token");
    navigate("/")
  }
  React.useEffect(() => {
    var x = JSON.parse(localStorage.getItem("Account"))
    if (x) {
      setLogin(true)
      setData(x)
    } 
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      Email: email,
      Password: password
    }
    const URL = "https://kimayebackendclone.herokuapp.com/auth/login"
    axios.post(URL, user).then(print => {
      if (print.data.Message == "Invalid credentials")
        alert("Invalid Credentials");
      else {
        console.log(print.data)
        localStorage.setItem("Account", JSON.stringify(print.data.valid[0]))
        localStorage.setItem("token", JSON.stringify(print.data.token));
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
        {!login?<div className="inputBox">
          <form onSubmit={(e) => handleSubmit(e)}>
            <label>Email Address*</label>
            <br />
            <input onChange={(e) => setEmail(e.target.value)} type="text" />
            <br />
            <label>Password*</label>
            <br />
            <input onChange={(e) => setPassword(e.target.value)} type="text" />
            <p>Forget Your Password?</p>
            <input type="submit" className="loginButton" value="Login" />
          </form>
        </div> : <div style={{ textAlign: "center" }}><h2 style={{
          color: "#437110",marginTop:"20px"}}>{data.FirstName}</h2>
            <Button Button onClick={() => handleLogout()}>LOGOUT</Button></div>}
        <div style={{backgroundColor:'#3B5998',height:'35px',marginTop:'5%',color:'white',cursor:'pointer',display:'flex',gap:'30%'}}>
          <p style={{margin:'2%',fontSize:'18px'}}>Sign In With Facebook</p><FontAwesomeIcon icon={faFacebook} style={{height:"30px",borderRadius:'5px', cursor:"pointer",marginTop:'2px'}} />
        </div>
        <div style={{backgroundColor:'#DD4B39',height:'35px',marginTop:'5%',color:'white',cursor:'pointer',display:'flex',gap:'37%'}}>
          <p style={{margin:'2%',fontSize:'18px'}}>Sign In With Google</p><FontAwesomeIcon icon={faGoogle} style={{height:"30px",borderRadius:'5px', cursor:"pointer",marginTop:'2px'}} />
        </div>
        <Button style={{height:'70px'}} onClick={nav} className="createAccount">Create An Account</Button>
      </div>
     
  
      
    
     
    </div>
  );
}

export default Modal;
