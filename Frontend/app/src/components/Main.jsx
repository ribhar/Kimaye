import React from 'react'
import Authentication from "../pages/Authentication"
import Otp from "../pages/Otp"
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
function Main() {
  return (
    <>
      <Routes>
        <Route></Route>
        <Route path="/auth" element={<Authentication />}></Route>
        <Route path="/otp" element={<Otp/>}></Route>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route></Route>
      </Routes>
    </>
  );
}

export default Main