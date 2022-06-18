import React from "react";
import styled from "../styles/payment.module.css";

const Paymentproduct = (props) => {
  const { imgurl, name, price, weight } = props;
  return (
    <div className={styled.maindiv}>
      <div className={styled.datadiv}>
        <div className={styled.leftimg}>
          <img src={imgurl} alt="pic" />{" "}
        </div>
        <div className={styled.leftname}>
          {name} {weight} 
        </div>
        <div className={styled.leftprice}>
          {"₹"}
          {price}
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
            {price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paymentproduct;
