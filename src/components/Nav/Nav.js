import './Nav.scss'
import { NavLink } from "react-router-dom"
export const Nav = () => {
    return (
        <div className="topnav">
            <NavLink activeClassName="active" exact to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/timer">Timer</NavLink>
            <NavLink activeClassName="active" to="/todo">Todo</NavLink>
            <NavLink activeClassName="active" to="/blog">Blog</NavLink>
            <NavLink activeClassName="active" to="/youtube">Youtube</NavLink>
        </div>
    )
}