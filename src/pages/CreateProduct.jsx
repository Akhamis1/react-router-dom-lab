import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router'
function CreateProduct() {
    const [ formData, setFormData ] = useState({
        title:'',
        description:'',
        category:'',
        item:"",
        price:"",
        quantity:"",

    })
    const navigate = useNavigate()

    function handleChange(event){
        setFormData({...formData,[event.target.name]:event.target.value})
    }

    async function handleSubmit(event){
        event.preventDefault()

        const response = await axios.post(`${import.meta.env.VITE_API_URL}/products`,formData)
        navigate("/products")
    }
  return (
    <div>
        <h1>Create Product</h1>

        <form onSubmit={handleSubmit}>

            <label htmlFor="title">Title:</label>
            <input 
            type="text" 
            value={formData.title}
            onChange={handleChange}
            name='title'
            id='title'
            />
            
            <label htmlFor="description">Description:</label>
            <input 
            type="text"
            value={formData.description}
            onChange={handleChange}
            name='description'
            id='description'
             />

            <label htmlFor="category">Category:</label>
            <input 
            type="text" 
            name='category'
            id='category'
            value={formData.category}
            onChange={handleChange}
            />
            <label htmlFor="item">Item:</label>
            <input 
            type="text"
            value={formData.item}
            onChange={handleChange}
            name='item'
            id='item'
             />
             <label htmlFor="price">Price:</label>
            <input 
            type="text"
            value={formData.price}
            onChange={handleChange}
            name='price'
            id='price'
             />
             <label htmlFor="quantity">Quantity:</label>
            <input 
            type="text"
            value={formData.quantity}
            onChange={handleChange}
            name='quantity'
            id='quantity'
             />

            <button>Create Product</button>
        </form>
    </div>
  )
}

export default CreateProduct    
