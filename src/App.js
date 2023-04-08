import logo from './logo.svg';
import './App.scss';
import * as components from './components'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  let [newTodo, setNewTodo] = useState('')
  let [todos, setTodos] = useState([
    { id: 1, title: 'Learn React Hook', type: 'hieu' },
    { id: 2, title: 'Learn React Class', type: 'gam' }
  ])
  useEffect(() => {
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
  let handleTimeup = () => {
    alert(`Time's up!`)
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <components.Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/timer">
              <components.Countdown handleTimeup={handleTimeup} />
              <components.CountdownHook handleTimeup={handleTimeup} />
            </Route>
            <Route path="/todo">
              <components.TodoApp
                todos={todos}
                title='All Todos'
                handleDeleteTodoFromParents={handleDeleteTodoFromParents}
              />
              <input className='input' value={newTodo} onChange={(e) => handleChangeInput(e)} />
              <button onClick={() => handleClick()}>Add</button>
            </Route>
            <Route exact path="/blog">
              <components.Blog />
            </Route>
            <Route path="/blog/:id">
              <components.BlogDetail />
            </Route>
            <Route path="/add-new">
              <components.AddNew />
            </Route>
            <Route path="/youtube">
              <components.Youtube />
            </Route>
            <Route exact path="/">
              <components.Covid />
            </Route>
            <Route path="*">
              <components.NotFound404 />
            </Route>
          </Switch>
          {/* 
        
        
        /> */}
          {/* 
          <components.CountdownHook handleTimeup={handleTimeup} />
          <components.Covid /> */}

        </header>
      </div>
    </Router>
  );
}

export default App;
