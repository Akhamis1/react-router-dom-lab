import { useParams } from "react-router"
import { useState, useEffect } from "react"
import axios from 'axios'
function ProductsDetails() {
    const [ product, setProduct ] = useState(null)
    const [ error, setError ] = useState('')
    const {productId} = useParams()

    useEffect(()=>{
        async function getProduct(){
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`)
                setProduct(response.data)
            } catch {
                setError('Could not load this product.')
            }
        }

        getProduct()
    },[productId])
  return (
    <div>
        <h1>Product Details</h1>

        {error ? <p role="alert">{error}</p> : product ? (<>
            <h2>Name: {product.title}</h2>
            <p>Description: {product.description}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
        </>) : <h2>Loading...</h2>}

    </div>
  )
}

export default ProductsDetails
