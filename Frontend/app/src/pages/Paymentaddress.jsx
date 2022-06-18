import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import styled from "../styles/payment.module.css";
import Paymentcartdetails from './Paymentcartdetails';

export const Paymentaddress = () => {
  // const  [showtoggle,setshowtoggle]=useState(false)
  // const  navigate = useNavigate()
  const [display,setdisplay]=useState("none")
  const [show,setshow]=useState(false)
  const [storage,setstorage]=useState({})
  const handleclick=()=>{

  }
  const handleclickdiv=()=>{
    console.log("hello")
    // navigate("/payment")
    window.location.reload()


  }
  const handlebutton=()=>{
    setdisplay("block")
    setshow(true)
  }
  useEffect(()=>{
    setstorage(JSON.parse(localStorage.getItem("fromdata")))
    console.log(storage.adress);
  },[])

  return (
    <div>
        <>
        <div className={styled.components1}>
          <div className={styled.innerdiv}>
            <div className={styled.kiayee}>
            <img
                  src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo.png?19362"
                  alt=""
                />
            </div>
            <div className={styled.latterdiv1}>
                <div onClick={handleclick}>Cart</div>
                <div onClick={handleclick}>Informatio</div>
                <div onClick={handleclick}>Shipping</div>
                <div onClick={handleclick}>Payment</div>
              </div>
              <div className={styled.emaildiv}>
                <div className={styled.adressdata}>
                  <div className={styled.contact1}>Contact</div>
                  <div className={styled.contact2}>kjdfkjksdjfg</div>
                  <button onClick={handleclickdiv} className={styled.btndiv}>Change</button>
                </div>
                {/* <div className={styled.grayline}></div> */}
                <div className={styled.adressdata}>
                <div className={styled.contact1}>Ship to</div>
                  <div className={styled.contact2}>{storage.adress}</div>
                  <button onClick={handleclickdiv} className={styled.btndiv}>Change</button>
                </div>
              </div>
              <div className={styled.shipingmethod}>
                <h3>Shipping method</h3>
              </div>
              <div className={styled.useaddress}>
                <div className={styled.circlepoint}>
                  <div className={styled.circleinner}></div>
                </div>
                <div className={styled.delivery}>	Delivery Charges</div>
                <div className={styled.deliverycharge}>
                  {"₹"} 50.00
                </div>
              </div>
              <Paymentcartdetails display={display}/>
              {!show &&  <div className={styled.button}>
                    <div>
                   <button onClick={handlebutton} className={styled.btn}>
                        Continue to Payment
                        </button>
                    </div>
                    <div>
                      <p className={styled.ptag1} onClick={handleclickdiv}>Return to information</p>
                    </div>
                  </div>}
                  <div className={styled.border1}></div>
                  <div className={styled.line1}>
                  {/* <div> */}
                  <a href="/" className={styled.ahref}>
                    Refund Policy
                  </a>
                  <a href="/" className={styled.ahref}>
                    Shipping policy
                  </a>
                  <a href="/" className={styled.ahref}>
                    Privacy policy
                  </a>
                  <a href="/  " className={styled.ahref}>
                    Terms of service
                  </a>
                </div>
          </div>
            
        </div>
        </>
    </div>

  )
}
