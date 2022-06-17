import React from 'react'
import { useEffect } from 'react'
import {Routes,Route, useNavigate} from "react-router-dom"
import Cart from '../products/Cart'
import Description from '../products/Description'
import { Products } from '../products/Products'

const Mainroutes = () => {

  return (
    <div>
        <Routes>
<Route path={"/"} element={<Products/>}/>
<Route path={'/cart'} element={<Cart/>}/>
<Route path={'/products/description/:id'}element={<Description/>}  />



        </Routes>
    </div>
  )
}

export default Mainroutes