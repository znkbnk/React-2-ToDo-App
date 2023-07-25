// Todo.js

import React from 'react';

export default function Todo({ todo, onDelete, onToggle }) {
  return (
    <div style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>X</button> 
      <input 
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}  
      />
    </div>
  );
}
