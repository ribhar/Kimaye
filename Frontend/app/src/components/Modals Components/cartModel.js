import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";


function CartModal({ setCartModal }) {
  const cartData=useSelector(state=> state.cartdata)
  console.log(cartData)
  return (
    <div className="modalBackground">
      <div className="modalContainer">
      <div className="titleCloseBtn">
      <p style={{color:"white",marginLeft:'8%',fontSize:"19px",marginTop:'18%',fontWeight:'bold'}}>SHOPPING CART</p>   
          <button
            onClick={() => {
              setCartModal(false);
            }}
          >
           Close X
          </button>
        </div>
       {cartData.length>0 ? (<div>done</div>): (<div style={{marginTop:'10%',display:'flex'}}>
        <FontAwesomeIcon icon={faCartPlus} style={{height:'30px',marginLeft:'10%',}}/><p style={{marginLeft:'5%',fontSize:'14px',marginTop:'5px'}}>No Products In The Cart</p>
       </div>)}
      
       
      </div>
     
  
      
    
     
    </div>
  );
}

export default CartModal;
