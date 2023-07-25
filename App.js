// App.js

import { useState } from 'react';
import TodoList from './TodoList';

export default function App() {

  const [text, setText] = useState('');

  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const newTodo = {
      id: Math.random(), 
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  const toggleComplete = id => {
    setTodos(todos.map(t => {
      if (t.id === id) {
        return {...t, completed: !t.completed};
      }
      return t;
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>

      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggle={toggleComplete}  
      />
    </>
  );
}
