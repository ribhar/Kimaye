import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddToCart } from "../redux/action";
import "./product.css";

export const Productcard = (items) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let [btn, setbtn] = useState(false);

  return (
    
    <div className="productdiv">
      <div
        className="productimage"
        onMouseEnter={() => setbtn(true)}
        onMouseLeave={() => setbtn(false)}
      >
        <img
          className="fruitimg"
          src={items.imageUrl}
          alt="fruit"
          onClick={() => {
            navigate(`/products/description/${items._id}`);
          }}
        />
        {btn && (
          <button className="addbtn" onClick={() => dispatch(AddToCart(items))}>
            CHOOSE YOUR PACK
          </button>
        )}
      </div>
      <p className="title">{items.title}</p>
      <p className="price">₹{items.price}</p>
    </div>
   
  );
};

export default Productcard;
