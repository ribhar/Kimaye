import React from "react";
import { useSelector } from "react-redux";
import styled from "../styles/payment.module.css";

const Paymentproduct = (props) => {
 
  const { imageUrl, title, price} = props;
  return (
      <div style={{ marginTop: "-70px"}}className={styled.maindiv}>
        <div className={styled.datadiv}>
          <div className={styled.leftimg} style={{ marginBottom: "20px" }}>
            <img src={imageUrl} alt="pic" height="80px" width="80px" />{" "}
          </div>
          <div className={styled.leftname}>{title}</div>
          <div className={styled.leftprice}>
            <h2>
              {" "}
              {"₹"}
              {price}
            </h2>
          </div>
        </div>
        <div className={styled.bottomborder}></div>
        
      </div>
  );
};

export default Paymentproduct;
