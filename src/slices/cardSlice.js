import { createSlice } from '@reduxjs/toolkit'

export const cardSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItem: localStorage.getItem("cart_data") ? JSON.parse(localStorage.getItem("cart_data")) : [],
  },
  reducers: {
    addtocart: (state, action) => {
      if (state.cartItem.length > 0) {
        const newArry = []
        state.cartItem.map((item) => {
          if (item.productName == action.payload.productName) {
            item.quantity++
            newArry.push(item.productName)
          }
        })

        if (newArry.indexOf(action.payload.productName) == -1) {
          state.cartItem.push(action.payload)
          localStorage.setItem("cart_data", JSON.stringify(state.cartItem))
        }

      } else {
        state.cartItem.push(action.payload)
        localStorage.setItem("cart_data", JSON.stringify(state.cartItem))
      }
    },

    increment: (state, action) => {
      state.cartItem.map((item) => {
        if (item.productName == action.payload.productName) {
          item.quantity++
        }
      })
    },

    decrement: (state, action) => {
      state.cartItem.map((item, index) => {
        if (item.productName == action.payload.productName) {
          if (item.quantity > 1) {
            item.quantity--
          } else {
            state.cartItem.splice(index, 1)
          }
        }
      })
    },

    removeCart: (state, action) => {
      state.cartItem.map((item, index) => {
        if (item.productName == action.payload.productName) {
          state.cartItem.splice(index, 1)
        }
      })
    },



  },
})

export const { addtocart, increment, decrement, removeCart, open } = cardSlice.actions

export default cardSlice.reducer