import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import Login from "../components/Login"
import Register from "../components/Register"
const Green = styled.div`
  background-color: #437110;
  height: 100px
`;
const Title = styled.p`
color:white;
text-align: center;
font-size: 35px;
margin-bottom: 0px;`
const Container = styled.div`
display: flex;
justify-content: space-around;
width: 80%;
margin: auto;
height: 1000px`
const Line = styled.div`
  border: 1px solid #e2e2de;
  width: 0px;
  height: 90%;
  margin-top: 40px;
`;
const Child = styled.div`
width: 50%;
height: 600px;
margin-top: 40px;
text-align: center;
`
const Button = styled.button`
background-color: black;
color:white;
padding: 10px 20px;
cursor: pointer;
`
function Authentication() {
  const [auth, setAuth] = React.useState(true)
  const handleAuth = () => {
    setAuth(!auth)
  }
  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <Green>
        <Title>MY ACCOUNT</Title>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            style={{
              backgroundColor: "white",
              borderRadius: "30px",
              marginRight: "5px",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-house-door"
            viewBox="0 0 16 16"
          >
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
          </svg>
          <Link
            to="/home"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "16px",
              marginRight: "5px",
            }}
          >
            Home
          </Link>
          <p style={{ color: "white", fontSize: "16px" }}>/ My Account</p>
        </div>
      </Green>
      <Container>
        <Child>{auth ? <Login /> : <Register />}</Child>
        <Line></Line>
        <Child style={{ width: "42%" }}>
          <p style={{ fontSize: "36px" }}>Register</p>
          <p style={{ color: "gray", fontSize: "16px" }}>
            Welcome to Kimaye! Help us with a few details before you begin
            enjoying our safe and tasty fruits.
          </p>
          <Button onClick={handleAuth}>{auth ? "REGISTER" : "LOGIN"}</Button>
        </Child>
      </Container>
    </div>
  );
}

export default Authentication