import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Cart from '../pages/Cart';
function Main() {
  return (
    <>
      <Routes>
        <Route path='cart' element={Cart}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </>
  );
}

export default Main