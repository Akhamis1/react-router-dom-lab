import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'
function ProductsList() {
    const [ products, setProducts ] = useState([])


    async function getAllProducts(){
        const response = await axios.get(import.meta.env.VITE_API_URL + '/products')
        setProducts(response.data)
        console.log(response.data)

    }

    // useEffect takes 2 arguments:
    // 1. a function
    // 2. dependancy Array
    useEffect(()=>{
        getAllProducts()
    },[])

    
  return (
    <div>
        <h1>Products List</h1>
        
        {products.map((oneProduct)=>(
        <div key={oneProduct._id}>
            <p>Name:{oneProduct.title}</p>
            <p>Description:{oneProduct.description}</p>
            <p>Category:{oneProduct.category}</p>
            <p>Price:${oneProduct.price}</p>
            <p>Quantity:{oneProduct.quantity}</p>
            <Link to={`/products/${oneProduct._id}`}>Go to products detail</Link>

           
        </div>
        ))}
    </div>
  )
}

export default ProductsList
