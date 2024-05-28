import React, { useState } from "react";
import TodoItem from "./TodoItem";
function App() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([])

  function handleChange(event) {
    let handleValue = event.target.value;
    setInputText(handleValue)
  }

  function addItem() {
    setItems((prevValue) => {
      return [
        ...prevValue,
        inputText
      ]
    })
    setInputText('')
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
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
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
