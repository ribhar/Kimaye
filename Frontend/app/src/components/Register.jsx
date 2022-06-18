import React from 'react'
import styled from "styled-components"
import axios from "axios"
import "animate.css";
const Container = styled.div`
width: 100%;
height: 100%;
background-color: white;
text-align: left;
`
const Input = styled.input `
  width: 100%;
  height: 45px;
  margin-bottom: 20px;
  margin-top: 10px;
  border: 1px solid #e2e2de;
`;
const Label = styled.label`
font-size: 16px;
`
function Register({auth,setAuth}) {
    const [data, setData] = React.useState({})
    const [first, setFirst] = React.useState("")
    const [last, setLast] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            FirstName: first,
            LastName:last,
            Email:email,
           Password:password
        }
        const URL = "http://localhost:8080/auth/signup";
      axios.post(URL, user)
        .then(print => {
        if (print.data.Message == "Something went wrong") alert("Something Went wrong, Try again");
        else if (print.data.Message == "Account Exist")
          alert("This Account already exists, please Login to continue");
        else alert("Registration Successfull");
        setAuth(!auth)
      })
      
    }
  return (
    <Container
      style={{
        animation: "fadeInLeft",
        animationDuration: "0.3s",
      }}
    >
      <div style={{ width: "85%", height: "100%", margin: "auto" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg
            style={{ width: "35px", height: "35px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
          <p style={{ fontSize: "36px", marginLeft: "8px" }}>Register</p>
        </div>
        <form onSubmit={handleSubmit}>
          <Label>First Name</Label>
          <br />
          <Input
            onChange={(e) => {
              setFirst(e.target.value);
            }}
            name="first"
            required
            type="text"
          />
          <br />
          <Label>Last Name</Label>
          <br />
          <Input
            onChange={(e) => {
              setLast(e.target.value);
            }}
            name="last"
            required
            type="text"
          />
          <br />
          <Label>Email Address</Label>
          <br />
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            required
            type="email"
          />
          <br />
          <Label>Password</Label>
          <br />
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            required
            type="password"
          />
          <br />
          <Input
            style={{
              backgroundColor: "white",
              cursor: "pointer",
              border: "1px solid black",
            }}
            type="submit"
            value="REGISTER"
          />
        </form>
      </div>
    </Container>
  );
}

export default Register