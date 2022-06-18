import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata, fetchfilter } from "../redux/action";
import Productcard from "./Productcard";
import "./product.css";
import { Link } from "react-router-dom";

export const Products = () => {
  let productsData = useSelector((state) => state.productsData);
  let [name, setname] = useState("All fruits");
  console.log(productsData);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);

 
  return (
    <div className="productbody">
      <Link to="/cart">cart</Link>
      <div className="category">
        <p onClick={() =>{
          dispatch(fetchdata())
          setname("All fruits")}}>ALL FRUITS</p>
        <p onClick={() => {
          dispatch(fetchfilter("FRESH CUTS"))
          setname("Fresh fruits")}}>FRESH CUTS</p>
        <p onClick={() => {
          dispatch(fetchfilter("FRUIT COMBOS"))
          setname("fruit combos")}}>FRUIT COMBOS</p>
        <p onClick={() =>{
          dispatch(fetchfilter("GIFTS BY KIMAYE"))
          setname("Gifts by kimaye")}}>GIFTS BY KIMAYE</p>
      </div>
      <div className="home">
        <div>
          <img
            className="homelogo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmAthy1j-eIciOQ5cITmu-XFyKNQJqe_UgNg&usqp=CAU"
            alt="logo"
          />
          <p>
            <span className="homebtn">Home/</span>
            {name}
          </p>
        </div>
        <p>Showing {productsData.length} results</p>
      </div>
      <div className="productcontainer">
        {productsData.map((el) => {
          return <Productcard key={el._id}  {...el} />;
        })}
      </div>
    </div>
  );
};
