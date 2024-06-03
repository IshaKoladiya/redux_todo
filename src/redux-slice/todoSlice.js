import { createSlice } from '@reduxjs/toolkit'
const todoSlice = createSlice({
    name:"todoList",
    initialState:[],
    reducers:{
        addTodo: (state, action) => {
            state.push(action.payload);
          },
          deleteTodo:(state,action)=>{
            return state.filter((item)=> item.id !== action.payload)
          },
          updateTodoStatus: (state, action) => {
            return state.map((todo) => {
              return todo.id === action.payload
                ? { ...todo, status: !todo.status }
                : todo;
            });
          },
          updateTask: (state, action) => {
            return state.map((todo) => {
              return todo.id === action.payload.id
                ? { ...todo, task: action.payload.task }
                : todo;
            });
          }
    }
})

export default todoSlice.reducer;
export const {addTodo,deleteTodo,updateTask,updateTodoStatus} = todoSlice.actions;  //Action creators