import React from 'react'
import { Routes, Route } from 'react-router'
import NavBar from './components/NavBar'
import ProductsList from './pages/ProductsList'
import ProductsDetails from './pages/ProductsDetails'
import CreateProduct from './pages/CreateProduct'
import Homepage from './pages/HomePage'
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<ProductsList />} />
      <Route path="/new-product" element={<CreateProduct />} />
      <Route path="/products/:productId" element={<ProductsDetails />} />
      </Routes>
    </div>
  )
}

export default App
