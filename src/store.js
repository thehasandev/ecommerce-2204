import { configureStore } from '@reduxjs/toolkit'
import bratcrumbSlice from './slices/bratcrumbSlice'
import cardSlice from './slices/cardSlice'



export default configureStore({
  reducer: {
    bractcumb: bratcrumbSlice,
    cart: cardSlice,
  },
})