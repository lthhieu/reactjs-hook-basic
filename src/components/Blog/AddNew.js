import { useState } from "react"
import axios from "axios"
export const AddNew = (props) => {
    let [title, setTitle] = useState('')
    let [body, setBody] = useState('')
    let handleSubmit = async () => {
        if (!title) {
            alert('miss title')
            return
        }
        if (!body) {
            alert('miss body')
            return
        }
        let data = {
            title, body, userId: 1
        }
        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data)
        if (res?.data) {
            let newBlog = res.data
            props.handleAddNew(newBlog)
        }
        console.log(res)
    }
    return (<>
        <input onChange={(e) => { setTitle(e.target.value) }} value={title} className='form-control mb-3' placeholder="Title" />
        <input onChange={(e) => { setBody(e.target.value) }} value={body} className="form-control mb-3" placeholder="Body" />
        <button onClick={handleSubmit}>Add new</button>
    </>)
}