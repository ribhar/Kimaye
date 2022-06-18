import React from 'react'
import Authentication from "../pages/Authentication"
import Otp from "../pages/Otp"
import {Routes, Route} from 'react-router-dom'
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
import Payment from '../pages/Payment';
=======
>>>>>>> Stashed changes
import Home from '../pages/Home'
import { Products } from '../products/Products'
import Cart from '../products/Cart'
import Description from '../products/Description'
<<<<<<< Updated upstream
=======
>>>>>>> 3df423b242ea8ee06b9020e7cae508ac8420f126
>>>>>>> Stashed changes
function Main() {
  return (
    <>
      <Routes>
<<<<<<< HEAD
        <Route path='payment' element={<Payment/>}></Route>
        <Route></Route>
<<<<<<< Updated upstream
=======
        <Route></Route>
        <Route></Route>
        <Route></Route>
=======
        <Route></Route>
>>>>>>> Stashed changes
        <Route path="/auth" element={<Authentication />}></Route>
        <Route path="/otp" element={<Otp/>}></Route>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path={"/products"} element={<Products/>}/>
     <Route path={'/cart'} element={<Cart/>}/>
    <Route path={'/products/description/:id'}element={<Description/>}  />
        
<<<<<<< Updated upstream
=======
>>>>>>> 3df423b242ea8ee06b9020e7cae508ac8420f126
>>>>>>> Stashed changes
      </Routes>
    </>
  );
}

export default Main