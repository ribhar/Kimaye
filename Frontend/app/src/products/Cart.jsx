import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartqty, deletecart, fetchcart,setPrice } from "../redux/action";
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
  height: 100%;
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

const Cart = () => {
  // const [voucher, setVoucher] = React.useState("")
  const [eye,setEye]=useState(0)
  const [cross, setcross] = useState(false)
  const [view, setView] = useState(false)
  const [cartdata, setCartdata] = useState([])
  const allCartdata = useSelector((state) => state.cartdata);
  const totalprice = useSelector((state) => state.totalprice);
  console.log(cartdata, totalprice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        setView(true)
      }
    }
    else {
      alert("Login to Continue")
      navigate("/auth")
    }
  },[allCartdata])

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <Div>
        <h1 style={{ fontWeight: "600", padding: "0 0 10px 0", margin: "0" }}>
          CART
        </h1>
        <div
          style={{
            fontSize: "16px",
            alignContent: "center",
            padding: "10px 0",
            margin: "0",
          }}
        >
          <Link
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            to="/"
            style={{
              textDecoration: isHovering ? "underline" : "none",
              color: "white",
              padding: "auto",
            }}
          >
            <IoIosHome style={{ margin: "-2px 2px" }} />
            Home{" "}
          </Link>
          <span>/ Cart</span>
        </div>
      </Div>
      {view ? (
        <div>
          <Table>
            <thead>
              <tr>
                <ProductName style={{ textAlign: "center" }}>
                  PRODUCT
                </ProductName>
                <Th>PRICE</Th>
                <Th>QUANTITY</Th>
                <Th>TOTAL</Th>
              </tr>
            </thead>
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
                      </Td1>
                      <Td>₹{item.price}</Td>
                      <Td>
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
                      </Td>
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
                padding: "30px",
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
                    style={{ display: "flex", justifyContent: "space-between", margin: "10px 0px" }}
                  >
                    <h3 >TOTAL</h3>
                    <h3>₹{totalprice}</h3>
                  </div>
                  <button
                    onClick={() => navigate("/payment")}
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
        </div>
      ) : (
        <div>
          <h1
            style={{ textAlign: "center", marginTop: "30px", color: "#437110" }}
          >
            No Item Added To Your Cart
          </h1>
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
      )}
    </>
  );
};

export default Cart;

// onClick={() => handlePayment(totalprice)}
