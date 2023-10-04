import { configureStore } from '@reduxjs/toolkit'
import bratcrumbSlice from './slices/bratcrumbSlice'
import cardSlice from './slices/cardSlice'
import openDownSlice from './slices/openDownSlice'




export default configureStore({
  reducer: {
    bractcumb : bratcrumbSlice,
    cart : cardSlice,
    trueFalse : openDownSlice,
  },
})