// TodoList.js

import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos, onDelete, onToggle }) {
  return (
    <div>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle} 
        />
      ))}
    </div>
  );
}
