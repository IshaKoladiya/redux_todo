import { createSlice } from '@reduxjs/toolkit'
const counterSlice = createSlice({
    name:"counter",
    initialState:0,
    reducers:{
        increment:((state)=>{return state+1}),
        decrement:(state)=>{return state-1}
    }
})

export default counterSlice.reducer;
export const {increment,decrement} = counterSlice.actions