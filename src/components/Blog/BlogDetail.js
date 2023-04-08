import { useParams, useHistory } from "react-router-dom"
import * as customize from '../../customize'
export const BlogDetail = () => {
    let { id } = useParams()
    let history = useHistory()
    let handleBack = () => {
        history.push('/blog')
    }
    let { data: blog, loading, err } = customize.
        useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false)
    console.log(blog.length)
    return (<div>
        <button onClick={() => handleBack()}>Back</button>
        {loading ? <p>Loading..</p> : <></>}
        {err ? <p>Something went wrong..</p> : <></>}
        {!loading && !err ? <>
            <p><strong>Detail blog with id: {id}</strong></p>
        </> : <></>}
        {blog && <>
            <p>{blog.title}</p>
            <p>{blog.body}</p></>}
    </div>)
}