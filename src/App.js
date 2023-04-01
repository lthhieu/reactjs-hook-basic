import logo from './logo.svg';
import './App.scss';
import * as components from './components'
import { useState, useEffect } from 'react';
function App() {
  let name = "Hieu"
  let [newTodo, setNewTodo] = useState('')
  let [todos, setTodos] = useState([
    { id: 1, title: 'Learn React Hook', type: 'hieu' },
    { id: 2, title: 'Learn React Class', type: 'gam' }
  ])
  useEffect(() => {
    console.log('run!')
  }, [todos])
  let handleClick = () => {
    if (!newTodo) return
    let newId = todos.length + 1
    let newTodoItem = { id: newId, title: newTodo, type: 'hieu' }
    setTodos([...todos, newTodoItem])
    setNewTodo('')
  }
  let handleChangeInput = (e) => {
    setNewTodo(e.target.value)
  }

  let handleDeleteTodoFromParents = (id) => {
    todos = todos.filter(todo => todo.id !== id)
    setTodos(todos)
  }

  return (
    <div className="App">
      <header className="App-header">
        <components.Nav />
        <img src={logo} className="App-logo" alt="logo" />
        {/* <input value={newTodo} onChange={(e) => handleChangeInput(e)} />
        <button onClick={() => handleClick()}>Add</button>
        <components.TodoApp
          todos={todos}
          title='All Todos'
          handleDeleteTodoFromParents={handleDeleteTodoFromParents}
        />
        <components.TodoApp
          todos={todos.filter(todo => todo.type === 'hieu')}
          title={`Hieu's Todos`}
          handleDeleteTodoFromParents={handleDeleteTodoFromParents}
        /> */}
        <components.Covid />

      </header>
    </div>
  );
}

export default App;
