import * as customize from '../../customize'
import './Blog.scss'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import { useState, useEffect } from 'react'
import { AddNew } from './AddNew'
import axios from 'axios'
export const Blog = () => {
    let [show, setShow] = useState(false)
    let [blog, setBlog] = useState([])
    let handleClose = () => setShow(false)
    let handleShow = () => {
        setShow(true)
    }
    let { data, loading, err } = customize.useFetch(`https://jsonplaceholder.typicode.com/posts`, false)
    useEffect(() => {
        if (data?.length > 0) {
            setBlog(data.slice(0, 8))
        }
    }, [data])

    let handleAddNew = (newBLog) => {
        let prevBlog = blog
        prevBlog.unshift(newBLog)
        setShow(false)
        setBlog(prevBlog)
    }
    let handleDeletePost = async (id) => {
        let prevBlog = blog
        prevBlog = prevBlog.filter(x => x.id !== id)
        setBlog(prevBlog)

    }
    return (<>
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton style={{ height: '45px' }}>
                <Modal.Title>Add new blog</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddNew handleAddNew={handleAddNew} />
            </Modal.Body>
        </Modal>
        <button onClick={handleShow}>+ Add new</button>
        <p><strong>Blog</strong></p>
        {loading ? <p>Loading..</p> : <></>}
        {err ? <p>Something went wrong..</p> : <></>}
        {!loading && !err ? <div className='blogs'>
            {blog?.length > 0 ? blog.map(item => (
                <div key={item.id} className='blog'>
                    <div className='blog-title'>
                        <span>{item.title}</span>
                        <span onClick={() => handleDeletePost(item.id)} className='handle-hover'>X</span></div>
                    <div className='blog-body'>{item.body}</div>
                    <div><button><Link className='btn' to={`blog/${item.id}`}>Detail</Link></button></div>
                </div>
            )) : <p></p>}
        </div> : <p></p>}
    </>)
}