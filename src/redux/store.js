import { legacy_createStore,combineReducers } from 'redux';
// import {reducer} from './reducer';
import counterSlice from '../redux-slice/counterSlice';
import todoSlice from '../redux-slice/todoSlice';

const rootReducer = combineReducers({
    counter: counterSlice,
    todoList: todoSlice,
  });
export const store = legacy_createStore(rootReducer);