import { useReducer, useState } from "react";
import { useSelector ,useDispatch } from "react-redux";
import "./App.css";
import Counter from "./features/Counter";
import TodoList from "./features/TodoList";

function App() {
  // normal counter
  // const [count, setCount] = useState(0)

  // useSeleector

  // const value = useSelector((state) => {
    // return state;
  // });

//  const dispatch = useDispatch()

  // useReducer

  // function reducer(state, action) {
  //   switch (action.type) {
  //     case "INCREMENT":
  //       return state + action.payload;
  //     case "DECREMENT":
  //       return state - action.payload;
  //     case "MULTIPLICATION":
  //       return state * action.payload;
  //     case "DEVIDE":
  //       return state / action.payload;
  //     default:
  //       return state;
  //   }
  // }

  // const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      {/*  normal counter */}
      {/* <h1>Count : {count}</h1>
      <button type="button" onClick={()=>setCount(count + 1)}>+</button> &nbsp;
      <button type="button" onClick={()=>setCount(count - 1)}>-</button> &nbsp;
      <button type="button" onClick={()=>setCount(count * 2)}>*</button> &nbsp;
      <button type="button" onClick={()=>setCount(count / 2)}>/</button> &nbsp; */}

      {/*  useReducer */}
      {/* 
      <h1>Count : {state}</h1>
      <button type="button" onClick={()=>dispatch({type:"INCREMENT" , payload : 5})}>+</button> &nbsp;
      <button type="button" onClick={()=>dispatch({type:'DECREMENT', payload : 5})}>-</button> &nbsp;
      <button type="button" onClick={()=>dispatch({type:'MULTIPLICATION', payload : 5})}>*</button> &nbsp;
      <button type="button" onClick={()=>dispatch({type:'DEVIDE', payload : 5})}>/</button> &nbsp; */}

      {/* useSelector hook  */}


      {/* <h1>Count : {value}</h1> */}
      {/* <button type="button" onClick={()=>dispatch({type:"INCREMENT" , payload : 5})}>+</button> &nbsp;
      <button type="button" onClick={()=>dispatch({type:'DECREMENT', payload : 5})}>-</button> &nbsp;
      <button type="button" onClick={()=>dispatch({type:'MULTIPLICATION', payload : 5})}>*</button> &nbsp;
      <button type="button" onClick={()=>dispatch({type:'DEVIDE', payload : 5})}>/</button> &nbsp; */}

      <hr />

      {/* <Counter/> */}
      <hr />
      <TodoList/>
    </>
  );
}

export default App;
