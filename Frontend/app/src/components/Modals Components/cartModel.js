import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartqty, deletecart, fetchcart,setPrice } from "../../redux/action";

const Div = styled.div`
  text-align: center;
  color: white;
  background-color: #437111;
  font-size: 22px;
`;
const Table = styled.table`
  margin: 20px auto;
  width: 80%;
  text-align: left;
`;
const DIV1 = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: left;
`;
const ProductName = styled.th`
  width: 60%;
  padding: 5px;
`;
const Th = styled.th`
  padding: 5px;
`;
const Td = styled.td`
  display: "flex";
  align-items: "center";
`;
const TD = styled.td`
  display: flex;
  justify-content: space-between;
`;
const Td1 = styled.td`
  padding-left: 20px;
  height: 80px;
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Img = styled.img`
  width: 80px;
  height: 100%;
  object-fit: fill;
`;
const Cross = styled.img`
  width: 30px;
  height: 30px;
  padding: 7px;
  cursor: pointer;
  border: 3px solid red;
`;
const Button = styled.button`
  width: 25px;
  height: 100%;
  font-size: 25px;
  text-align: center;
  cursor: pointer;
  background: white;
  border: 0.5px solid gray;
`;
const Quantity = styled.div`
  border: 1px solid gray;
  width: 40px;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
const Qtydiv = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`;
const Crossimg = styled.img`
  cursor: pointer;
  height: 25px;
`;
const titlediv = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const Title = styled.p`
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
`;
const Wt = styled.p`
  font-family: PT Sans, Arial, Helvetica, sans-serif;
  color: #b2b2b2;
  font-size: 14px;
`;

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
       {cartData.length>0 ? (<div>
          <Table>
            <tbody>
              {cartdata.map((item, index) => {
                return (
                  <>
                    <tr>
                      <Td1>
                        {!cross ? (
                          <Crossimg
                            onClick={() => dispatch(deletecart(item._id))}
                            onMouseEnter={() => {
                              setEye(index);
                              if (eye === index) {
                                setcross(true);
                              }
                            }}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLkeKEGRX1P-5sRDVwiEdpRd-C6SJsfn_ng&usqp=CAU"
                          />
                        ) : (
                          <Crossimg
                            onClick={() => dispatch(deletecart(item._id))}
                            onMouseLeave={() => {
                              setEye(index);
                              if (eye === index) {
                                setcross(false);
                              }
                            }}
                            src="https://icons-for-free.com/iconfiles/png/512/minus+remove+icon-1320168706650327911.png"
                          />
                        )}

                        <Img src={item.imageUrl} alt={item.imageUrl} />
                        <div style={titlediv}>
                          <Title>{item.title}</Title>
                          <Wt>1kg</Wt>
                        </div>
                        <Qtydiv
                          className="qtybtns"
                          style={{ display: "flex", textAlign: "center" }}
                        >
                          <Button
                            onClick={() =>
                              item.qty > 1 && dispatch(cartqty(item._id, -1))
                            }
                          >
                            -
                          </Button>
                          <Quantity>{item.qty}</Quantity>
                          <Button
                            onClick={() => dispatch(cartqty(item._id, 1))}
                          >
                            +
                          </Button>
                        </Qtydiv>
                      </Td1>
                      <Td>₹{item.price}</Td>
                      {/* <Td>
                        <Qtydiv
                          className="qtybtns"
                          style={{ display: "flex", textAlign: "center" }}
                        >
                          <Button
                            onClick={() =>
                              item.qty > 1 && dispatch(cartqty(item._id, -1))
                            }
                          >
                            -
                          </Button>
                          <Quantity>{item.qty}</Quantity>
                          <Button
                            onClick={() => dispatch(cartqty(item._id, 1))}
                          >
                            +
                          </Button>
                        </Qtydiv>
                      </Td> */}
                      <Td>
                        <h3>₹{item.price * item.qty}</h3>
                      </Td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
          <div style={{ width: "300px", margin: "auto", padding: "10px 0" }}>
            <p style={{ textAlign: "center" }}>Pick a Delivery date:</p>
            <input
              type="date"
              style={{
                width: "100%",
                height: "40px",
                border: "1px solid rgba(129,129,129,.25)",
                fontSize: "14p",
                lineHeight: "18px",
                transition: "border-color .5s",
                boxShadow: "none",
                borderRadius: "0",
                cursor: "pointer",
              }}
            />
            <p style={{ textAlign: "center" }}>Choose a time:</p>
            <select
              style={{
                width: "100%",
                height: "40px",
                border: "1px solid rgba(129,129,129,.25)",
                fontSize: "14p",
                lineHeight: "18px",
                transition: "border-color .5s",
                boxShadow: "none",
                borderRadius: "0",
                cursor: "pointer",
              }}
            >
              <option value="">Select a time</option>
              <option value="07:00AM-11:00AM">07:00AM-11:00AM</option>
              <option value="11:00AM-02:00PM">11:00AM-02:00PM</option>
              <option value="02:00PM-04:00PM">02:00PM-04:00PM</option>
              <option value="04:00PM-08:00PM">04:00PM-08:00PM</option>
            </select>
          </div>

          <div>
            <DIV1
              style={{
                backgroundColor: "#f8f8f8",
                display: "flex",
                gap: "20px",
                padding: " 0 20px",
              }}
            >
              <div style={{ width: "50%", textAlign: "center" }}>
                <h2 style={{ textAlign: "center" }}>SPECIAL INSTRUCTIONS</h2>
                <textarea
                  colspan="6"
                  style={{
                    minHeight: "130px",
                    width: "94%",
                    height: "auto",
                    lineHeight: "1.5",
                    padding: "10px 15px",
                  }}
                ></textarea>
              </div>
              <div style={{ width: "50%" }}>
                <h2 style={{ textAlign: "center" }}>CART TOTALS</h2>
                <div style={{ backgroundColor: "white", padding: "20px" }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h4>Subtotal:</h4>
                    <h4>₹{totalprice}</h4>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h4>GST 12%</h4>
                    <h4>₹{Math.floor(totalprice * 0.12)}</h4>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h3>TOTAL</h3>
                    <h3>₹{totalprice + Math.floor(totalprice * 0.12)}</h3>
                  </div>
                  <button
                    style={{
                      backgroundColor: "#98cb4c",
                      color: "white",
                      height: "50px",
                      marginBottom: "10px",
                      textAlign: "center",
                      cursor: "pointer",
                      fontSize: "18px",
                      width: "100%",
                      border: "none",
                    }}
                  >
                    PROCEED TO CHECKOUT
                  </button>
                  <button
                    onClick={() => navigate("/products")}
                    style={{
                      backgroundColor: "#98cb4c",
                      color: "white",
                      height: "50px",
                      marginBottom: "10px",
                      textAlign: "center",
                      cursor: "pointer",
                      fontSize: "18px",
                      width: "100%",
                      border: "none",
                    }}
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              </div>
            </DIV1>
          </div>
        </div>): (<div style={{marginTop:'10%',display:'flex'}}>
        <FontAwesomeIcon icon={faCartPlus} style={{height:'30px',marginLeft:'10%',}}/><p style={{marginLeft:'5%',fontSize:'14px',marginTop:'5px'}}>No Products In The Cart</p>
       </div>)}
      
       
      </div>
     
  
      
    
     
    </div>
  );
}

export default CartModal;
