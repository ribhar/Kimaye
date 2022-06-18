import React from 'react'
import styled from "styled-components"
import axios from "axios"
import "animate.css";
const Input = styled.input`
  width: 100%;
  height: 45px;
  margin-bottom: 20px;
  margin-top: 10px;
  border: 1px solid #e2e2de;
`;
const Label = styled.label`
  font-size: 16px;
`;
const Image = styled.img`
  width: 100%;
  height: 45px;
  margin-bottom: 10px;
  cursor: pointer;
`;
function Login({login,setLogin}) {
  const [color1, setColor] = React.useState("gray")
  const [fb, setFb] = React.useState(1)
  const [google, setGoogle] = React.useState(1)
  const [data, setData] = React.useState({})
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      Email: email,
      Password: password
    }
    setData(user)
    const URL = "https://kimayebackendclone.herokuapp.com/auth/login";
    axios.post(URL, user).then(print => {
      if (print.data.Message == "Invalid credentials")
        alert("Invalid Credentials");
      else {
        console.log(print.data)
        localStorage.setItem("Account", JSON.stringify(print.data.valid[0]))
        localStorage.setItem("token", JSON.stringify(print.data.token));
        setLogin(!login)
      }
    })
  }
  return (
    <div
      style={{
        textAlign: "left",
        width: "80%",
        margin: "auto",
        animation: "fadeInLeft",
        animationDuration: "0.3s",
      }}
    >
      <div>
        <Image
          style={{ opacity: fb }}
          onMouseEnter={() => setFb(0.6)}
          onMouseLeave={() => setFb(1)}
          src={process.env.PUBLIC_URL + "fb.png"}
          alt="fb"
        />
        <br />
        <Image
          style={{ opacity: google }}
          onMouseEnter={() => setGoogle(0.6)}
          onMouseLeave={() => setGoogle(1)}
          src={process.env.PUBLIC_URL + "google.png"}
          alt="google"
        />
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg
            style={{ width: "30px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32zM342.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L242.8 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C355.1 266.1 355.1 245.9 342.6 233.4z" />
          </svg>
          <p style={{ fontSize: "36px", marginLeft: "8px" }}>Login</p>
        </div>
        <form onSubmit={handleSubmit}>
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg
              style={{ width: "20px" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M282.3 343.7L248.1 376.1C244.5 381.5 238.4 384 232 384H192V424C192 437.3 181.3 448 168 448H128V488C128 501.3 117.3 512 104 512H24C10.75 512 0 501.3 0 488V408C0 401.6 2.529 395.5 7.029 391L168.3 229.7C162.9 212.8 160 194.7 160 176C160 78.8 238.8 0 336 0C433.2 0 512 78.8 512 176C512 273.2 433.2 352 336 352C317.3 352 299.2 349.1 282.3 343.7zM376 176C398.1 176 416 158.1 416 136C416 113.9 398.1 96 376 96C353.9 96 336 113.9 336 136C336 158.1 353.9 176 376 176z" />
            </svg>
            <p
              onMouseEnter={() => setColor("green")}
              onMouseLeave={() => setColor("gray")}
              style={{
                fontSize: "16px",
                marginLeft: "10px",
                cursor: "pointer",
                color: color1,
              }}
            >
              Lost your password?
            </p>
          </div>

          <Input
            style={{
              backgroundColor: "white",
              cursor: "pointer",
              border: "1px solid black",
            }}
            type="submit"
            value="LOGIN"
          />
        </form>
      </div>
      <div style={{ width: "100%", height: "200px" }}></div>
      <div>
        <Image
          style={{ opacity: fb }}
          onMouseEnter={() => setFb(0.6)}
          onMouseLeave={() => setFb(1)}
          src={process.env.PUBLIC_URL + "fb.png"}
          alt="fb"
        />
        <br />
        <Image
          style={{ opacity: google }}
          onMouseEnter={() => setGoogle(0.6)}
          onMouseLeave={() => setGoogle(1)}
          src={process.env.PUBLIC_URL + "google.png"}
          alt="google"
        />
      </div>
    </div>
  );
}

export default Login