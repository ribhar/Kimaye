import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import NavigationBar from "./Navbar Components/NavigationBar";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Modal from "./Modals Components/accountModal";
import CartModal from "./Modals Components/cartModel";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchcart } from "../redux/action";
const Navbar = () => {
  const navigate=useNavigate()
  const [cartmodal, setcartModalopen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const cartData=useSelector(state =>state.cartdata)
  console.log(cartData.length)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchcart());
  }, [dispatch]);
  return (
    <header>
      <div className="nav-area">
        <div>
          <NavigationBar />
        </div>
        <div>
          <a href="/#" className="logo">
            <img
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x@2x.png?v=1596288204"
              height="40px"
              width="160px"
              alt="logo"
            />
          </a>
        </div>
        <div className="nav-icons">
          <div style={{ display: "flex" }}>
            <img
              src="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_map_location_logo_icon_159350.png"
              alt="location"
              width="35px"
              height="30x"
            />
            <p style={{ marginTop: "5px" }}>Delhi</p>
          </div>
{/*Navigation Search box Starts Here...............................*/}
          <div>
            <FontAwesomeIcon
              icon={faSearch}
              style={{ height: "23px", cursor: "pointer" }}
            />
          </div>
{/*Navigation Search box Ends Here...............................*/}

{/*Navigation Account Starts Here...............................*/}
          <FontAwesomeIcon
            onClick={() => {
              setModalOpen(true);
            }}
            icon={faUser}
            style={{ height: "23px", cursor: "pointer" }}
          />
{/*Navigation Account Ends Here...............................*/}

{/*Navigation Cart Starts Here...............................*/}
          <FontAwesomeIcon
            icon={faCartShopping}
            onClick={() =>{
              navigate("/cart")
              //setcartModalopen(true);
            }}
            style={{ height: "23px", cursor: "pointer" }}
          /><span>{cartData.length}</span>
{/*Navigation Cart ends Here...............................*/}
        </div>
{/*Navigation Cart Starts Here...............................*/}

{/*Account modal Starts Here...............................*/}
{modalOpen && <Modal setOpenModal={setModalOpen} />}
{/*Account modal ends Here...............................*/}

{/*Cart modal Starts Here...............................*/}
        {cartmodal && <CartModal setCartModal={setcartModalopen} />}
        
{/*Cart modal Ends Here...............................*/}
      </div>
    </header>
  );
};

export default Navbar;