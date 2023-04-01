export const TodoApp = (props) => {
    let { todos, title, handleDeleteTodoFromParents } = props
    let handleClickDeleteTodo = (id) => {
        handleDeleteTodoFromParents(id)
    }
    let handleList = (todos) => {
        return todos.map(todo => (
            <li onClick={() => handleClickDeleteTodo(todo.id)} className="handle-hover" key={todo.id}>{todo.title} <span>X</span></li>))
    }
    return (
        <div>
            <p><strong>{title}</strong></p>
            <ul>{handleList(todos)}</ul>
            <hr />
        </div>
    )
}