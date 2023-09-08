import { createSlice } from '@reduxjs/toolkit'

export const bratcrumbSlice = createSlice({
  name: 'counter',
  initialState: {
    currnetPage: "",
  },
  reducers: {
    bradcrumb: (state) => {

    },
   
  },
})

export const { currnetPage } = bratcrumbSlice.actions

export default bratcrumbSlice.reducer