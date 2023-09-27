import { createSlice } from '@reduxjs/toolkit'

export const bratcrumbSlice = createSlice({
  name: 'counter',
  initialState: {
    currentName: "",
    previusName:""
  },
  reducers: {
    bradcrumb: (state,action) => {     
           state.previusName = state.currentName                   
           state.currentName = action.payload
    },
   
  },
})

export const { bradcrumb } = bratcrumbSlice.actions

export default bratcrumbSlice.reducer