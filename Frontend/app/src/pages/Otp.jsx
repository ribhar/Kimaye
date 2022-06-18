import React, { useRef, useState } from "react";
import {useNavigate} from "react-router-dom"
function Otp(){
    const [otp, setOtp] = useState([])
    const [RealOtp, setRealOtp] = useState("")
    const [count,setCount] = useState(30)
    const inputRef = useRef([])
    const navigate = useNavigate()
    const Div = {
        width: "500px",
        height: "300px",
        backgroundColor: "whitesmoke",
        margin: "auto",
        padding: "50px",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
    }
    useState(() => {
        const id = setInterval(() => {
            setCount((prev) => {
                if (prev == 1) {
                    clearInterval(id)
                    navigate("/")
                }
                return prev-1
          })  
        },1000)
    },[])
    React.useEffect(() => {
        var sum = []
        sum.push(Math.floor(Math.random() * 10))
        sum.push(Math.floor(Math.random() * 10));
        sum.push(Math.floor(Math.random() * 10));
        sum.push(Math.floor(Math.random() * 10));
        setRealOtp(sum.join(""))
        alert(`Your One Time PassWord Is : ${sum.join("")}`);
    },[])
    const style = {
      textAlign: "center",
    width: "40px",
    height: "40px",
    marginRight: "10px",
    fontSize: "14px",
        padding: "10px",
    cursor: "pointer",
  };
    const button = {
        marginTop: "30px",
        width: "80px",
        height: "30px",
        backgroundColor: "royalBlue",
        color: "white",
        cursor: "pointer",
        borderRadius: "10px"
    }
    const handleClick = (RealOtp) => {
        var x = otp.join("")
        console.log(x)
        if ( x == RealOtp) {
            alert("Payment Successfull");
            navigate("/")
        }
        else {
            alert("Otp is not supported");
           setOtp([]) 
        } 
    }
    const handleChange = (event) => {
        setOtp([...otp,event.target.value])
    }
  return (
    <div
      style={{
        textAlign: "center",
        height: "300px",
        padding: "100px",
      }}
    >
      <div style={Div}>
        <h1 style={{ color: "royalBlue" }}>GIVE OTP</h1>
        <h2 style={{ color: count > 10 ? "green" : "red" }}>
          {count} Seconds Remaing
        </h2>
        {new Array(4).fill(0).map((i, index) => (
          <input 
            style={style}
            required
            onChange={(event) => handleChange(event)}
            onKeyUp={(e) => {
              if (e.code === "Backspace" && index > 0) {
                inputRef.current[index - 1].focus();
                  inputRef.current[index - 1].select();
                  var p = [...otp]
                  p.pop()
                  setOtp([...p])
              } else if (index < 3) {
                inputRef.current[index + 1].focus();
              }
            }}
            ref={(el) => {
              if (el && inputRef.current) {
                inputRef.current[index] = el;
              }
            }}
            maxLength={1}
            type="text"
            key={index}
          />
        ))}
        <br />
        <button onClick={() => handleClick(RealOtp)} style={button}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Otp;
