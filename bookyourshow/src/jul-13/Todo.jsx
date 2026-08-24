import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTodo, toggleTodo, deleteTodo } from "./todoSlice";

function Todo() {
  const [inputValue, setInputValue] = useState("");

  const todos = useSelector((state) => state.todos.items);

  const dispatch = useDispatch();

  function handleAddTodo() {
    if (inputValue.trim() === "") {
      return;
    }

    dispatch(addTodo(inputValue));

    setInputValue("");
  }

  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />

      <button onClick={handleAddTodo}>Add Todo</button>

      {todos.map((todo) => (
        <div key={todo.id}>
          <span
            onClick={() => dispatch(toggleTodo(todo.id))}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
          </span>

          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
