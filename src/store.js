import { configureStore } from '@reduxjs/toolkit'
import bratcrumbSlice from './slices/bratcrumbSlice'

export default configureStore({
  reducer: {
    bractcumb : bratcrumbSlice
  },
})