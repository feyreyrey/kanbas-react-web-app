import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

function TodoForm() {
    const { todo } = useSelector((state) => state.todosReducer);
    const dispatch = useDispatch();
  
    return (
      <li className="list-group-item">
        <button onClick={() => dispatch(addTodo(todo))} className = "btn btn-success"> Add </button>
        <button onClick={() => dispatch(updateTodo(todo))} className = "btn btn-warning"> Update </button>
        <input
          value={todo.title}
          onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value })) }
        />
      </li>
    );
  }
  export default TodoForm;
  
  