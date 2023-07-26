This project will guide you through building a basic 
todo list application in React, allowing a user to add,
complete, and delete todo items and providing hands-on
practice with components, state, and hooks.

Todo.js

Step 1: Import React library.
Step 2: Define a Todo component as a function.
Step 3: Destructure the props - todo item, onDelete
 and onToggle functions.
Step 4: Return the JSX:
  1. Outer div to display the todo.
  2. Set text decoration style based on completed status.
  3. Display the todo text.
  4. Button to delete todo.
    1. Call onDelete handler and pass id when clicked.
  5. Checkbox input.
    1. Set checked based on completed status.
    2. Call onToggle handler on change and pass id.

TodoList.js

Step 1: Import Todo component.
Step 2: Define TodoList component as a function.
Step 3: Destructure the props - todos array and
 the handler functions.
Step 4: Return the JSX:
  1. Outer div to contain list
  2. Map over the todos array
  3. For each todo, return a Todo component
       1. Pass the individual todo item as a prop
       2. Pass onDelete and onToggle handlers as props

App.js

Step 1: Import the useState hook from React.
Step 2: Import the TodoList component we created.
Step 3: Create a piece of state called text using
 useState() to store the text value for our input.
Step 4: Create another state variable called todos
 to store an array of todo objects.
Step 5: Define a function addTodo() that will add
 a new todo to the array.
  1. It takes the text value as a parameter.
  2. It creates a new object with id, text, and
      completed properties.
  4. It updates the todos array by copying the
  existing array and appending the new todo object.
Step 6: Define a handleSubmit() function that will
 run when the form is submitted.
  1. Call e.preventDefault() to prevent default submit.
  2. Call the addTodo() function to add the new todo.
  3. Reset the text state to clear the input field.
Step 7: Pass the handleSubmit() function to the
 onSubmit handler of the form.
Step 8: Define a deleteTodo() function that filters.
 the todos array to remove the todo with the matching id.
Step 9: Define a toggleComplete() function that maps
 through the todos array and flips the completed
 property if the id matches.
Step 10: Render the input form, allowing us to type a todo title.
  1. Set value to the text state.
  2. Call setText on change to update state.
Step 11: Render the TodoList component, passing the
 todos state, and the handler functions as props.
     







