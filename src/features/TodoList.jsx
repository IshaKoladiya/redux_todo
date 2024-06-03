import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  updateTask,
  updateTodoStatus,
} from "../redux-slice/todoSlice";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const [taskId, setTaskId] = useState("");
  const value = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  const [newTask, setnewTask] = useState([]);

  const AddTask = () => {
    if (newTask == "") {
      alert("please fill your task");
      return;
    }

    if (taskId) {
      dispatch(updateTask({ id: taskId, task: newTask }));
      setTaskId("");
    } 
      const obj = {
        taskShow: newTask,
        id: uuidv4(),
        status: false,
      };
      dispatch(addTodo(obj));
    

    setnewTask("");
  };

  return (
    <div>
      <h1 style={{ margin: "20px" }}>ToDoApp</h1>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setnewTask(e.target.value)}
      />
      <button type="button" onClick={AddTask}>
        {taskId ? "Update" : "Add"} AddTask
      </button>
      <div style={{ margin: "20px" }}>
        {value.map((tasks, index) => {
          return (
            <div key={tasks.id}>
              {index + 1} . {tasks.taskShow}
              {tasks.status ? " - Completed " : " - Pending "}
              <button
                onClick={() => {
                  setnewTask(tasks.taskShow);
                  setTaskId(tasks.id);
                }}
              >
                task
              </button>
              <button
                style={{ margin: "10px 5px" }}
                onClick={() => {
                  dispatch(updateTodoStatus(tasks.id));
                }}
                type="button"
              >
                Upadate
              </button>
              <button
                style={{ margin: "10px 5px" }}
                onClick={() => dispatch(deleteTodo(tasks.id))}
                type="button"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
