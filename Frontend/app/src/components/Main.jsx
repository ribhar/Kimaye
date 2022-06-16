import React from 'react'
import Authentication from "../pages/Authentication"
import {Routes, Route} from 'react-router-dom'
function Main() {
  return (
    <>
      <Routes>
        <Route></Route>
        <Route path="/auth" element={<Authentication/>}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </>
  );
}

export default Main