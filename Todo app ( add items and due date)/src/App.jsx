// Importing necessary components and styles
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  
  // State to manage todo items
  const [todoItems, setTodoItems] = useState([]);

  // Function to handle adding a new todo item
  const handleNewItem = (itemName, itemDueDate) => {
    // Creating a new array with the existing todo items and the new one
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    // Updating the todo items state
    setTodoItems(newTodoItems);
  };



  // Function to handle deleting a todo item
  const handleDeleteItem = (todoItemName) => {
    // Filtering out the todo item to be deleted
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    // Updating the todo items state
    setTodoItems(newTodoItems);
  };

  

  return (
  
    <center className="todo-container">
     
      <AppName />

      {/* Component to add new todo items */}
      <AddTodo onNewItem={handleNewItem} />

  
      {/* Displaying welcome message if there are no todo items */}
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}


      {/* Component to display todo items */}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>


    </center>
  );
}

// Exporting the App component
export default App;
