import React from 'react'
import Authentication from "../pages/Authentication"
import Otp from "../pages/Otp"
import {Routes, Route} from 'react-router-dom'

import Payment from '../pages/Payment';

import Home from '../pages/Home'
import { Products } from '../products/Products'
import Cart from '../products/Cart'
import Description from '../products/Description'

function Main() {
  return (
    <>
      <Routes>
        <Route path='/payment' element={<Payment/>}></Route>
        <Route path="/auth" element={<Authentication />}></Route>
        <Route path="/otp" element={<Otp/>}></Route>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path={"/products"} element={<Products/>}/>
    <Route path={'/cart'} element={<Cart/>}/>
    <Route path={'/products/description/:id'}element={<Description/>}  />
        
      </Routes>
    </>
  );
}

export default Main