import {useEffect, useState} from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Main from "./components/Main"
import {useLocation} from "react-router-dom"
import "./App.css"
function App() {
  const [show, setShow] = useState(true)
  const location = useLocation()
  useEffect(() => {
    if (location.pathname == "/payment" || location.pathname == "/otp") setShow(false)
    else setShow(true)
  },[location])
  return (
    <div className="App">
      {show &&  <div>
     <div style={{backgroundColor:'#437111',height:'38px',width:'100%',paddingTop:'9px',color:'white',fontSize:'14px',textAlign: "center"}}>Delivering in Mumbai and Delhi | Same day delivery!
    </div>
        <div style={{ position: 'relative', zIndex: '2', backgroundColor: 'white' }}><Navbar /></div></div>}
       <Main />
      {show && <Footer />}

    </div>
  );
}

export default App;
