<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Main from "./components/Main"
import "./App.css"
function App() {
  return (
    <div className="App">
     <div style={{backgroundColor:'#437111',height:'38px',width:'100%',paddingTop:'9px',color:'white',fontSize:'14px',textAlign: "center"}}>Delivering in Mumbai and Delhi | Same day delivery!
    </div>
    <div style={{position:'relative',zIndex:'2',backgroundColor:'white'}}><Navbar/></div>
       <Main />
      <Footer/>

    </div>
  );
}

export default App;
