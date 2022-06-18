import React from "react";
import { useSelector } from "react-redux";
import styled from "../styles/payment.module.css";

const Paymentproduct = (props) => {
 
  const { imageUrl, title, price, totalprice } = props;
  return (
    <div className={styled.maindiv}>
      <div className={styled.datadiv}>
        <div className={styled.leftimg} style={{marginBottom:'20px'}}>
          <img src={imageUrl} alt="pic" height="80px" width="80px"  />{" "}
        </div>
        <div className={styled.leftname}>
          {title} 
        </div>
        <div className={styled.leftprice}>
         <h2> {"₹"}
          {price}</h2>
        </div>
      </div>
      <div className={styled.bottomborder}></div>
      <div className={styled.inputdata}>
        <input
          type="text"
          name="giftcard"
          placeholder="Gift card discount code"
          className={styled.inputdiv}
        />
        <button className={styled.applydone}>Apply</button>
        <div className={styled.bottomborder1}></div>
        <div className={styled.subtotal}>
          <div className={styled.subtotal1}>Subtotal</div>
          <div className={styled.rupess}>
            {"₹"} {price}{" "}
          </div>
          <div className={styled.shipping}>Shipping</div>
          <div className={styled.free}>Free</div>
        </div>
        <div className={styled.bottomborder2}></div>
        <div className={styled.finalytotal}>
          <div className={styled.total}>Total</div>
          <div className={styled.inr}>
            {"INR"} {"₹"}
            {totalprice}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paymentproduct;
