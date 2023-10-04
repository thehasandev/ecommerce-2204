import { createSlice } from '@reduxjs/toolkit'

export const openDownSlice = createSlice({
  name: 'open',
  initialState: {
    openitem: false,
  },
  reducers: {
    upDown: (state,action) => {  
         state.openitem = action.payload
    },
   
  },
})

export const { upDown } = openDownSlice.actions

export default openDownSlice.reducer