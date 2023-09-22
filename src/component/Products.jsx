import React from 'react'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../redux/cartSlice'


export default function Products({title,image}) {
 const dispatch = useDispatch()
    return (
    <div>
      <h3>{title}</h3>
      <img src={image} width={'200px'} alt=''/>
      <br/>
      <button onClick={()=>dispatch(addtoCart({title,image}))}>Add to Cart</button>
    </div>
  )
}
