import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmit = () => {
    if (!input) {
      handleSubmit(null)
    }
    const inputnewitem = todos.push(input)
    setInput(inputnewitem)
    console.log(inputnewitem)
    setInput('')
    setTodos([...todos])
  }
  const clearBtn = () => {
    setTodos([null])
  }
  console.log(todos)
  return (
    <div className="App">
      <div className="Todolist container mt-5">
        <ul class="list-group">
          <h1>To do App</h1>
          <button type='submit' onClick={handleSubmit}>Add</button>
          <button type='submit' onClick={clearBtn}>clear</button>
          <input type="text" className="mt-5" value={input} onChange={(e) => { setInput(e.target.value) }} />
          {todos.map((item, index) => {
            return <>
              <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />

              <li style={{ listStyle: "none" }}>{item}</li></>
          })}

        </ul>

      </div>

    </div>
  );
}

export default App;
