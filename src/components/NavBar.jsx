import React from 'react'
import { Link } from 'react-router'

function NavBar() {
  return (
    <div>
   <Link to="/">Home</Link>
   <Link to="/products">Products</Link>
   <Link to="/new-product">Create Product</Link>
   
    </div>
  )
}

export default NavBar
