import React,{useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {IoIosHome} from "react-icons/io";
import {
  cart_data,
  increase_qty,
  decrease_qty,
  delete_cart_data,
} from "../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const Div = styled.div`
  text-align: center;
  color: white;
  background-color: #437111;
  font-size: 22px;
  
`;
const Table = styled.table`
  margin:20px auto;
  width: 80%;
  text-align: left;

`;
const DIV1 = styled.div`
  margin:20px auto;
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
  vertical-align: top;
  padding: 7px;
`;
const TD = styled.td`
  display: flex;
  justify-content: space-between;
`;
const Td1 = styled.td`
  vertical-align: top;
  display: flex;
  padding: 7px;
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
  padding: 7px;
  margin-right: 7px;
`;
const Cross = styled.img`
  width: 30px;
  height: 30px;
  padding: 7px;
  cursor: pointer;
  border: 3px solid red;
`;
const Button = styled.button`
  width: 30px;
  height: 30px;
  font-size: 25px;
`;
const Quantity = styled.div`
  border: 1px solid gray;
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const Cart = () => {
  const [voucher, setVoucher] = React.useState("")
  const store = useSelector((state) => state);
  const data = store.cartdata;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(delete_cart_data(id));
    const data1 = data.filter((elem) => id !== elem.id);
    localStorage.setItem("cartdata", JSON.stringify(data1));
    if (data.length == 1) {
      localStorage.removeItem("cartdata");
    }
    call(data1);
  };
  React.useEffect(() => {
    let data = JSON.parse(localStorage.getItem("cartdata")) || [];
    dispatch(cart_data(data));
    call(data);
  }, []);
  const handleDecrease = (item) => {
    if (item.qty == 1) {
      dispatch(delete_cart_data(item.id));
      const data1 = data.filter((elem) => item.id !== elem.id);
      localStorage.setItem("cartdata", JSON.stringify(data1));
      if (data.length == 1) {
        localStorage.removeItem("cartdata");
      }
      call(data1);
    } else {
      dispatch(decrease_qty(item.id));
      localStorage.setItem("cartdata", JSON.stringify(data));
      call(data);
    }
  };
  const handleIncrease = (item) => {
    dispatch(increase_qty(item.id));
    localStorage.setItem("cartdata", JSON.stringify(data));
    call(data);
  };
  const [value, setValue] = React.useState(100);
  const call = (data) => {
    var subTotal = data.reduce(function (acc, elem) {
      return acc + elem.mrp * elem.qty;
    }, 0);
    setValue(subTotal);
  };
  const handleChangeVoucher = (e) => {
    setVoucher(e.target.value);
  }
  const handleVoucher = (e) => {
    e.preventDefault();
    if (voucher == "masai30") {
      const discount= Math.floor(value*0.7)
      setValue(discount)
    }
    else {
      alert("APPLY: masai30")
    }
    setVoucher("")
  }


  const handlePayment = (value) => {
    const paymentdata = {
      subtotal: value,
      shipping: 0.01*value,
      gst: 18,
    }
    localStorage.setItem("paymentdata", JSON.stringify(paymentdata))
    navigate("/payment")
  }
  
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    < >
      <Div >
        <h1 style={{fontWeight:"600",padding:'0 0 10px 0',margin:'0'}}>CART</h1>
        <div style={{fontSize: "16px", alignContent: 'center',padding:'10px 0',margin:'0'}}>
          <Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to='/' style={{ textDecoration: isHovering? "underline" : "none",color:"white", padding:"auto"}}><IoIosHome  style={{margin: "-2px 2px"}}/>Home </Link><span>/ Cart</span>
        </div>
        

      </Div>
      <Table>
        <thead>
          <tr>
            <ProductName style={{textAlign:"center"}}>PRODUCT</ProductName>
            <Th>PRICE</Th>
            <Th>QUANTITY</Th>
            <Th>TOTAL</Th>
            <Th>REMOVE</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <>
                <tr>
                  <Td1>
                    <Img src={item.img} alt={item.img} />
                    <div>
                      <p>{item.desc}</p>
                      <br />
                      <p>{item.wt}</p>
                    </div>
                  </Td1>
                  <Td>₹{item.mrp}</Td>
                  <Td>
                    <div style={{ display: "flex", textAlign: "center" }}>
                      <Button onClick={() => handleDecrease(item)}>-</Button>
                      <Quantity>{item.qty}</Quantity>
                      <Button onClick={() => handleIncrease(item)}>+</Button>
                    </div>
                  </Td>
                  <Td>₹{item.mrp * item.qty}</Td>
                  <Td>
                    <Cross
                      onClick={() => handleDelete(item.id)}
                      src="https://thumbs.dreamstime.com/z/red-cross-symbol-icon-as-delete-remove-fail-failure-incorr-incorrect-answer-89999776.jpg"
                      alt="remove"
                    />
                  </Td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
      <div style={{width: "300px",margin:"auto",padding:"10px 0"}}>
        <p style={{textAlign:"center"}}>Pick a Delivery date:</p>
        <input type="date" style={{width: "100%",height: "40px", border: "1px solid rgba(129,129,129,.25)",fontSize: "14p",lineHeight: "18px",transition: "border-color .5s",boxShadow: "none",borderRadius: "0"}}/>
        <p style={{textAlign:"center"}}>Choose a time:</p>
        <select  style={{width: "100%",height: "40px", border: "1px solid rgba(129,129,129,.25)",fontSize: "14p",lineHeight: "18px",transition: "border-color .5s",boxShadow: "none",borderRadius: "0"}}>
          <option value="">Select a time</option>
          <option value="07:00AM-11:00AM">07:00AM-11:00AM</option>
          <option value="11:00AM-02:00PM">11:00AM-02:00PM</option>
          <option value="02:00PM-04:00PM">02:00PM-04:00PM</option>
          <option value="04:00PM-08:00PM">04:00PM-08:00PM</option>
        </select>
      </div>
      

      <div>
        <DIV1 style={{backgroundColor:"#f8f8f8", display:"flex",gap:"20px",padding:" 0 20px"}}>
          <div style={{width: "50%", textAlign:"center"}}>
            <h2 style={{textAlign:"center",}}>SPECIAL INSTRUCTIONS</h2>
            <textarea colspan="6" style={{minHeight: "130px",width:"94%",height: "auto", lineHeight:"1.5", padding: "10px 15px"}}></textarea>
          </div>
          <div style={{width: "50%"}}>
            <h2 style={{textAlign:"center",}}>CART TOTALS</h2>
            <div style={{backgroundColor:"white",padding:"20px"}}>
              <div style={{display:"flex",justifyContent:"space-between"}}>
                <h4>Subtotal:</h4>
                <h4>₹{value}</h4>
              </div>
              <div style={{display:"flex",justifyContent:"space-between"}}>
                <h4>GST 12%</h4>
                <h4>₹{Math.floor(value * 0.12)}</h4>
              </div>
              <div style={{display:"flex",justifyContent:"space-between"}}>
                <h3>TOTAL</h3>
                <h3>₹{value + Math.floor(value * 0.12)}</h3>
              </div>
              <button onClick={() => handlePayment(value)} style={{backgroundColor: "#98cb4c",color:"white",height:"50px",marginBottom:"10px", textAlign:"center",cursor:"pointer",fontSize:"18px",width:"100%",border:"none"}} >PROCEED TO CHECKOUT</button>
              <button onClick={() => navigate("/products")} style={{backgroundColor: "#98cb4c",color:"white",height:"50px",marginBottom:"10px", textAlign:"center",cursor:"pointer",fontSize:"18px",width:"100%",border:"none"}} >CONTINUE SHOPPING</button>
            </div>
          </div>
        </DIV1>
      </div>
     
    </>
  );
};

export default Cart;
