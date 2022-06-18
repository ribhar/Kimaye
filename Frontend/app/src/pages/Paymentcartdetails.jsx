import React from "react";
import styled from "../styles/payment.module.css";
import images from "./images/logo.png";
import image from "./images/images.png";

const Paymentcartdetails = ({ display }) => {
  const handleclick=()=>{

  }
  const handlebutton=()=>{

  }
  const handleclickdiv=()=>{

  }
  return (
    <div style={{ display: display }}>
      <div className={styled.paymentcart}>
        <div className={styled.payment_cart}>
          <div className={styled.text}>
            <h3>Payment</h3>
            <p className={styled.text1}>
              All transactions are secure and encrypted.
            </p>
          </div>
          <div className={styled.main_div}>
            <div className={styled.display_flex_data}>
              <div className={styled.net_text}>
                Razorpay Secure (UPI, Cards, Wallets, NetBanking)
              </div>
              <div className={styled.card_logo}>
                <img src={images} alt="" />
              </div>
            </div>
            <div className={styled.gray_line}></div>
            <div className={styled.payment_logo}>
                <img src={image} alt="" />
            </div>
            <div className={styled.payment_latter}>
                After clicking “Complete order”, 
                you will be redirected to Razorpay Secure 
                (UPI, Cards, Wallets, NetBanking) to
                 complete your purchase securely.
            </div>
          </div>
          <div className={styled.billing}>
            <div className={styled.billing_latter}>
              <p>Billing address</p>
              <p className={styled.p1tag}>Select the address that matches your card or payment method.</p>
            </div>
          </div>
          <div className={styled.circlediv}>
            <div className={styled.inputcircle}>
              <input type="radio" name="" id="" />
              <label htmlFor="Same as shipping address"  className={styled.label}>Same as shipping address</label>
            </div>
            <div className={styled.gray_line }></div>
            <div className={styled.inputcircle}>
            <input type="radio" className={styled.click} name="click" onClick={handleclick}  />
            <label htmlFor="Use a different billing address" className={styled.label}>Use a different billing address</label>
            </div>
          </div>
          <div className={styled.button}>
                    <div>
                      <button onClick={handlebutton} className={styled.btn}>
                        Complete order
                        </button>
                    </div>
                    <div>
                      <p className={styled.ptag1} onClick={handleclickdiv}>Return to shipping</p>
                    </div>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default Paymentcartdetails;
