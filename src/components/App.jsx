import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";
function App() {
  const [items, setItems] = useState([])

  function addItem(inputText) {
    if (inputText.trim() == '') {
      alert('enter something')
    } else {
      setItems((prevValue) => {
        return [
          ...prevValue,
          inputText
        ]
      })
    }
  }

  function deleteItem(id) {
    setItems(prevItem => {
      return prevItem.filter((item, index) => {
        return id !== index
      });
    })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        addBtn={addItem}
      />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <TodoItem
              key={index}
              id={index}
              deleteItem={deleteItem}
              item={todoItem} 
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
