import { useHistory } from "react-router-dom"
export const NotFound404 = () => {
    let history = useHistory()
    let handleClick = () => {
        history.push('/')
    }
    return (<>
        This page is not available
        <button onClick={handleClick}>Go home</button></>)
}