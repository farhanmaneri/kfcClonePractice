import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    cart:[]
  },
  reducers: {
    addtoCart :(state, action)=>{
state.cart.push(action.payload)
    }
}})

// Action creators are generated for each case reducer function

export default cartSlice.reducer;
export const {addtoCart } = cartSlice.actions;