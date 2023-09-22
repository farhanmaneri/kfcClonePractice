import React from 'react'
import Products from './component/Products'
import logo from './logo.svg'
import { useSelector } from 'react-redux'
function Home() {
    const cartItem = useSelector(state => state.cart.cart)
  return (
    <div>
      <h4>Cart- {cartItem.length}</h4>
      <div>
        <Products
        title = 'this electronic mouse'
        image = {logo}
        />
        <Products
        title = 'this mobile'
        image = {logo}
        />

      </div>
    </div>
  )
}

export default Home
