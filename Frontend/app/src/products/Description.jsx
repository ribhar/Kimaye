import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AddToCart, fetchdes, incordec } from "../redux/action";
import "./description.css";
import {useNavigate} from "react-router-dom"
import { IoIosHome } from "react-icons/io";
const Description = () => {
  const [Email, setEmail] = React.useState(false)
  const navigate= useNavigate();
  const { id } = useParams();
  const desData = useSelector((state) => state.desData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchdes(id));
  }, [id, dispatch]);
  const handleAddCart = () => {
    var t = JSON.parse(localStorage.getItem("Account"));
    if (t)
    {
      setEmail(t.Email);
      const generated = desData
    generated.Email = t.Email
    dispatch(AddToCart(generated));
    alert("Item Added to cart successfully")
    navigate("/products")
    }  
    else {
      alert("Login To Continue");
      navigate("/auth");
    } 
    
  }

  return (
    <div className="desbody">
     
      <div className="upperlink">
      <IoIosHome style={{marginRight:"2px"}}/>
        <p>
          Home / All fruits /{" "}
          <span className="uppertitle">{desData.title}</span>
        </p>
      </div>
      <div className="descontainer">
        <div className="poster">
          <img src={desData.desimage} alt="logo" />
        </div>
        <div className="descleft">
          <h1 className="destitle">{desData.title}</h1>
          <p className="des">{desData.description}</p>
          <p className="origin">Origin : India</p>
          <p className="desprice1">₹{desData.price}</p>
          <div className="despack">
            <h3>Pack:</h3>
            <img className="packlogo" src={desData.imageUrl} alt="logo" />
            <img className="packlogo" src={desData.imageUrl} alt="logo" />
          </div>
          <p className="desprice2">₹ {desData.price}</p>
          <div className="btns">
            <div className="qtybtn">
              <button onClick={()=>{
                (desData.qty>1)&&dispatch(incordec(desData._id,-1))
              }}>-</button>
              <p>{desData.qty}</p>
              <button onClick={()=>{
                dispatch(incordec(desData._id,1))
              }}>+</button>
            </div>
            <button className="addcartbtn" onClick={() => handleAddCart()}>Add to cart</button>
          </div>
        </div>
      </div>
      <div className="texturediv">
        <h1 style={{textAlign : "center"}}>RELATED PRODUCTS</h1>
        <div className="relateddiv">
          <div className="related">
            <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Langra--cover_540x.jpg?v=1624445187"/>
            <p className="relatetitle">Kimaye Langra Mangoes (Pack of 1,2 and 4 kg)</p>
            <p className="relateprice">₹205 - ₹810</p>
            <button className="relatebtn">SELECT OPTIONS</button>
          </div>
          <div className="related">
          <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/products/litchi--_-keasr_540x.jpg?v=1654850892"/>
            <p className="relatetitle">Kimaye Litchi-Kesar Combo</p>
            <p className="relateprice">₹275 - ₹354</p>
            <button className="relatebtn">SELECT OPTIONS</button>
          </div>
          <div className="related">
          <img src=" https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Lychee_540x.jpg?v=1622208039"/>
            <p className="relatetitle">Kimaye Litchi (500g)</p>
            <p className="relateprice">₹149 - ₹220</p>
            <button className="relatebtn">SELECT OPTIONS</button>
          </div>
        </div>
      </div>
      </div>
  
  );
};

export default Description;
