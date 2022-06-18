import React from "react";
import { useState } from "react";
import styled from "../styles/payment.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Paymentproduct from "./Paymentproduct";
import { Paymentaddress } from "./Paymentaddress";

function Payment() {
  const [fromdata, setfromdata] = useState({});
  const [togle, setTogle] = useState(false);
  const [allData, setallData] = useState([]);
  const navigate = useNavigate();

  const handleclick = () => {
    // console.log("hello click");
  };
  const handlepclick = () => {};

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
        <div className={styled.components}>
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
                  <div className={styled.loginprofiledata}>Md shahbaj alam</div>
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
                    required
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
                          <option name="Panjab">Panjab</option>
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
                          type="submit"
                          value="Continue to shipping"
                          className={styled.btn}
                        />
                      </div>
                      <div>
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

          <div className={styled.leftdiv}>
            {allData.map((elem) => (
              <Paymentproduct key={elem.id} {...elem} />
            ))}
          </div>
        </div>
      </>
    </div>
  );
}

export default Payment;
