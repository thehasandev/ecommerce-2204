import { createSlice } from '@reduxjs/toolkit'

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    card: [],
   
  },
  reducers: {
    addTocard: (state,action) => {  
      if(state.card.length>0){
        
        let arr=[]
        state.card.map((item)=>{
           if(item.title == action.payload.title){
            item.quantity = item.quantity + 1
            arr.push(item.title)
           }
        })
       
       if(arr.indexOf(action.payload.title)==-1){
        state.card.push(action.payload)
       }
       
      
      }else{
        state.card.push(action.payload)
       }
    },
   
  },
})

export const { addTocard } = cardSlice.actions

export default cardSlice.reducer