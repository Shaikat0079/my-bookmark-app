import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog'

const Blogs = () => {
    const [blogs,setBlogs] = useState([])

    useEffect(()=>{
        fetch("blogs.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return ( 
        <div>
            <h1 className='text-4xl'>Available Blogs: {blogs.length}</h1>
            <div className='all-blogs grid grid-cols-2 gap-5 justify-items-center mt-10'>
                {
                    blogs.map((blog)=><Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
     );
}
 
export default Blogs;