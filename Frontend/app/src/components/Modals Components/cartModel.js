import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartqty, deletecart, fetchcart, setPrice } from "../../redux/action";

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
  height: 80px;
  width: 70%;
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Img = styled.img`
  height: 80px;
  object-fit: fill;
`;
const Cross = styled.div`
  cursor: pointer;
`;
const Button = styled.button`
  width: 25px;
  height: 100%;
  font-size: 10px;
  text-align: center;
  cursor: pointer;
  background: white;
  border: 0.5px solid gray;
`;
const Quantity = styled.div`
  border: 1px solid gray;
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`;
const Qtydiv = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  width: 50px;
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
  font-size: 12px;
  line-height: 1.42857143;
  color: #333;
`;
const Wt = styled.p`
  font-family: PT Sans, Arial, Helvetica, sans-serif;
  color: #b2b2b2;
  font-size: 10px;
`;
const tr = {
  display: "flex",

  justifyContent: "space-evenly",
  marginLeft:'-30px',
  gap: "10px",
  marginBottom: "8px",
};
const quants = {
  display: "flex",
  alignItems: "center",
  gap: "5px",
};
function CartModal({ setCartModal }) {

  const [cartdata, setCartdata] = useState([])

  const allCartdata = useSelector((state) => state.cartdata);
  const totalprice = useSelector((state) => state.totalprice);
  console.log(cartdata, totalprice);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartdata);
  const [cross, setcross] = useState(false);
  console.log(cartData);


// cart work
useEffect(() => {
  dispatch(fetchcart());
}, [dispatch]);
useEffect(() => {
  const account = JSON.parse(localStorage.getItem("Account"))
  if (account) {
    const Email = account.Email
    const generatedData = allCartdata.filter(i => i.Email == Email)
    setCartdata(generatedData)
    if (generatedData.length > 0) {
      dispatch(setPrice(generatedData))
      // setView(true)
    }
  }
  else {
    alert("Login to Continue")
    navigate("/auth")
  }
},[allCartdata])


















  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <p
            style={{
              color: "white",
              marginLeft: "8%",
              fontSize: "19px",
              marginTop: "18%",
              fontWeight: "bold",
            }}
          >
            SHOPPING CART
          </p>
          <button
            onClick={() => {
              setCartModal(false);
            }}
          >
            Close X
          </button>
        </div>
        {cartdata.length > 0 ? (
          <div>
            <Table>
              <tbody>
                {cartdata.map((item, index) => {
                  return (
                    <>
                      <tr style={tr}>
                        <Img src={item.imageUrl} alt={item.imageUrl} />
                        <Td1>
                          <div>
                            <div style={titlediv}>
                              <Title>{item.title}</Title>
                              <Wt>1kg</Wt>
                            </div>
                            <div style={quants}>
                              <Qtydiv
                                className="qtybtns"
                                style={{ display: "flex", textAlign: "center" }}
                              >
                                <Button
                                  onClick={() =>
                                    item.qty > 1 &&
                                    dispatch(cartqty(item._id, -1))
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
                              <div>x</div>
                              <Td>₹{item.price}</Td>
                            </div>
                          </div>
                        </Td1>

                        <Cross onClick={() => dispatch(deletecart(item._id))}>
                          <p>x</p>
                        </Cross>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </Table>

            <div style={{
                  width:"100",}}>
              <DIV1
                style={{
            
                  backgroundColor: "#f8f8f8",
                  display: "flex",
                  gap: "20px",
                  // padding: " 0 20px",
                }}
              >
                <div style={{ width: "100%" }}>
                  <div style={{ backgroundColor: "white", padding: "20px" }}>
                    <div
                     style={{
                      width : "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom:"10px"
                    }}
                    ><h1 >Subtotal:</h1><h1>₹{totalprice}</h1>
                    </div>

                    <button className="modalButton"
                   onClick={() =>{navigate("/cart")
                  
                   setCartModal(false);
                  }
                  
                  }
                    >
                     CHECKOUT
                    </button>
                    <button
                    className="modalButton"
                      onClick={() => {navigate("/products")
                    
                      setCartModal(false);
                    }}
                      
                    >
                      CONTINUE SHOPPING
                    </button>
                  </div>
                </div>
              </DIV1>
            </div>
          </div>
        ) : (
          <div style={{ marginTop: "10%", display: "flex" }}>
            <FontAwesomeIcon
              icon={faCartPlus}
              style={{ height: "30px", marginLeft: "10%" }}
            />
            <p style={{ marginLeft: "5%", fontSize: "14px", marginTop: "5px" }}>
              No Products In The Cart
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartModal;
