import React from "react";
import { useState } from "react";
import styled from "../styles/payment.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Paymentproduct from "./Paymentproduct";
import { Paymentaddress } from "./Paymentaddress";
import { useDispatch, useSelector } from "react-redux";
import {fetchcart, setPrice} from "../redux/action";

function Payment() {

  const [account,setAccount]=useState({})
  const dispatch = useDispatch();
  const [fromdata, setfromdata] = useState({});
  const [data,setData]=useState([])
  const [togle, setTogle] = useState(false);
  const [allData, setallData] = useState([]);
  const allCartdata = useSelector((state) => state.cartdata);
  const navigate = useNavigate();
  const totalprice=useSelector(state=>state.totalprice)
  useEffect(() => {
    dispatch(fetchcart());
    
  }, [dispatch]);
  useEffect(() => {
    const dummyAccount = JSON.parse(localStorage.getItem("Account"))||{}
    console.log(dummyAccount,"dummy")
    setAccount(dummyAccount);
    if (account) {
      const Email = account.Email
      const generatedData = allCartdata.filter(i => i.Email == Email)
      
      if (generatedData.length > 0) {
        setData(generatedData)
        dispatch(setPrice(generatedData))
      }
    }
    else {
      alert("Login to Continue")
      navigate("/auth")
    }
  },[allCartdata])
  const handleclick = () => {
    // console.log("hello click");
  };
  const handlepclick = () => {
    navigate("/cart")
  };

  const getdata = () => {
    axios
      .get("http://localhost:8000/firutdata")
      .then(({ data }) => setallData(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getdata();
    console.log(fromdata);
  }, []);

  const handlechange = (e) => {
    const Inputname = e.target.name;
    setfromdata({
      ...fromdata,
      [Inputname]: e.target.value,
    });
  };
  // !First_name||!State||!adress||!apartment||!city||!last_name||!mobile_name||!pincode
  const handlesubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("fromdata", JSON.stringify(fromdata));
    // const {First_name,State,adress,apartment,city,last_name,mobile_name,pincode}=fromdata
    // if (!fromdata===undefined) {
    //   alert("Fill The All Details");
    // } else {
     setTogle(!togle);
    //   console.log(fromdata);
    //   navigate("");
    // }
  };
  return (
    <div>
      {/* <h1>Payment</h1> */}
      <>
        <div
          style={{ justifyContent: "space-around" }}
          className={styled.components}
        >
          {!togle ? (
            <div className={styled.rightdiv}>
              <div className={styled.rightinnerdiv}>
                <div className={styled.kimayelogo}>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo.png?19362"
                    alt=""
                  />
                </div>
                <div className={styled.latterdiv}>
                  <div onClick={handleclick}>Cart</div>
                  <div onClick={handleclick}>Informatio</div>
                  <div onClick={handleclick}>Shipping</div>
                  <div onClick={handleclick}>Payment</div>
                </div>
                <div className={styled.contact}>
                  <h3>Contact information</h3>
                </div>
                <div className={styled.profilediv}>
                  <div className={styled.profile}>
                    <img
                      src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                      alt=""
                    />
                  </div>
                  <div className={styled.loginprofiledata}>
                    <h2>{account.FirstName}</h2>
                  </div>
                </div>
                <div className={styled.Input}>
                  <input
                    type="checkbox"
                    name="checkbox"
                    className={styled.check}
                  />
                  <label htmlFor="">
                    Get order notification and delivery updates
                  </label>
                </div>
                <div className={styled.shopping}>
                  <h3>Shipping address</h3>
                </div>
                <div className={styled.fromdata}>
                  <form onSubmit={handlesubmit} className={styled.form}>
                    <select
                      // required
                      name="new address"
                      className={styled.select}
                      onChange={handlechange}
                    >
                      <option className={styled.option} value="">
                        Use a new address
                      </option>
                    </select>
                    <select
                      // required
                      name="india"
                      className={styled.select}
                      onChange={handlechange}
                    >
                      <option className={styled.option} value="">
                        India
                      </option>
                    </select>
                    <div className={styled.username}>
                      <div className={styled.inputdata}>
                        <input
                          required
                          type="text"
                          name=" First_name"
                          className={styled.name}
                          placeholder="First Name"
                          onChange={handlechange}
                        />
                      </div>
                      <div className={styled.inputdata1}>
                        <input
                          required
                          type="text"
                          name="last_name"
                          className={styled.lastname}
                          placeholder="Last Name"
                          onChange={handlechange}
                        />
                      </div>
                    </div>
                    <input
                      required
                      type="text"
                      name="adress"
                      className={styled.adress}
                      placeholder="Address"
                      onChange={handlechange}
                    />
                    <br />
                    <input
                      type="text"
                      className={styled.apartment}
                      name="apartment"
                      placeholder="Apartment,suite,etc, (optional)"
                      onChange={handlechange}
                    />
                    <br />
                    <div className={styled.city}>
                      <div className={styled.citys}>
                        <input
                          required
                          type="text"
                          name="city"
                          placeholder="City"
                          className={styled.dis}
                          onChange={handlechange}
                        />
                      </div>
                      <div className={styled.state}>
                        <select
                          name="State"
                          onChange={handlechange}
                          className={styled.state}
                        >
                          <option name="cityname">State</option>
                          <option name="Andaman and Nicobar and island">
                            Andaman and Nicobar and island
                          </option>
                          <option name="Andhra Pardesh">Andhra Pardesh</option>
                          <option name="Arunachal Pardesh">
                            Arunachal Pardesh
                          </option>
                          <option name="Assam">Assam</option>
                          <option name="Bihar">Bihar</option>
                          <option name="Chandigarh">Chandigarh</option>
                          <option name="Chhatisgarh">Chhatisgarh</option>
                          <option name="Dadra and Nagar Haveli">
                            Dadra and Nagar Haveli
                          </option>
                          <option name="Daman and Diu">Daman and Diu</option>
                          <option name="Delhi">Delhi</option>
                          <option name="Goa">Goa</option>
                          <option name="Gujrat">Gujrat</option>
                          <option name="Haryana">Haryana</option>
                          <option name="Himachal Pardesh">
                            Himachal Pardesh
                          </option>
                          <option name="Jammu and Kashmir">
                            Jammu and Kashmir
                          </option>
                          <option name="Jharkhand">Jharkhand</option>
                          <option name="Karnataka">Karnataka</option>
                          <option name="Kerala">Kerala</option>
                          <option name="Ladakh">Ladakh</option>
                          <option name="Lakshadweep">Lakshadweep</option>
                          <option name="Madhay Pardesh">Madhay Pardesh</option>
                          <option name="Maharashtra">Maharashtra</option>
                          <option name="Manipur">Manipur</option>
                          <option name="Meghalaye">Meghalaye</option>
                          <option name="Mizoram">Mizoram</option>
                          <option name="Nagaland">Nagaland</option>
                          <option name="Odisha">Odisha</option>
                          <option name="Puducharry">Puducharry</option>
                          <option name="Panjab">Punjab</option>
                          <option name="Rajasthan">Rajasthan</option>
                          <option name="Sikkim">Sikkim</option>
                          <option name="Tamil Nadu">Tamil Nadu</option>
                          <option name="Telangana">Telangana</option>
                          <option name="Tripura">Tripura</option>
                          <option name="Utter Pardesh">Utter Pardesh</option>
                          <option name="UttraKhand">UttraKhand</option>
                          <option name="West Bengal">West Bengal</option>
                        </select>
                      </div>
                      <div>
                        <input
                          required
                          type="number"
                          className={styled.pin}
                          name="pincode"
                          placeholder="Pin code"
                          onChange={handlechange}
                        />
                      </div>
                    </div>
                    <input
                      required
                      type="number"
                      className={styled.number}
                      name="mobile_name"
                      placeholder="Mobile number for order and delivery updates"
                      onChange={handlechange}
                    />
                    <div className={styled.button}>
                      <div>
                        <input
                          style={{ fontSize: "14px", padding: "10px" }}
                          type="submit"
                          value="Continue to shipping"
                          className={styled.btn}
                        />
                      </div>
                      <div style={{ marginTop: "30px" }}>
                        <p className={styled.ptag} onClick={handlepclick}>
                          Return to cart
                        </p>
                      </div>
                    </div>
                  </form>
                  <div className={styled.border}></div>
                  <div className={styled.line}>
                    {/* <div> */}
                    <a href="/" className={styled.ahref}>
                      Refund Policy
                    </a>
                    <a href="/" className={styled.ahref}>
                      Shipping policy
                    </a>
                    <a href="/" className={styled.ahref}>
                      Privacy policy
                    </a>
                    <a href="/  " className={styled.ahref}>
                      Terms of service
                    </a>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Paymentaddress />
          )}
          <div>
            <div className={styled.leftdiv}>
              {data.map((elem) => (
                <Paymentproduct key={elem.id} {...elem} />
              ))}
            </div>
            <div className={styled.inputdata}>
              <input
                style={{ width: "100%", margin: "10px 0px" }}
                type="text"
                name="giftcard"
                placeholder="Gift card"
                className={styled.inputdiv}
              />
              <button
                style={{ width: "100%", margin: "10px 0px" }}
                className={styled.applydone}
              >
                Apply
              </button>
              <div className={styled.bottomborder1}></div>
              <div className={styled.subtotal}>
                <div className={styled.subtotal1}>Subtotal</div>
                <div className={styled.rupess}>
                  {"₹"} {totalprice}{" "}
                </div>
                <div className={styled.shipping}>Shipping</div>
                <div className={styled.free}>Free</div>
              </div>
              <div className={styled.bottomborder2}></div>
              <div className={styled.finalytotal}>
                <div className={styled.total}>Total</div>
                <div className={styled.inr}>{`₹${totalprice}`}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Payment;
