import React from 'react';
import { useSelector ,useDispatch } from "react-redux";
import { decrement, increment } from '../redux-slice/counterSlice';

const Counter = () => {
 const state = useSelector(state =>{
    return state.counter 
})
 const dispatch = useDispatch()

  return (
    <div>
      counter : {state}
      <button type="button" onClick={()=>dispatch(increment())}>+</button>
      <button type="button" onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter
