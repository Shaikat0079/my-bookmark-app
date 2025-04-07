import React from 'react'
import { FaBookmark } from "react-icons/fa6";

const Blog = ({ blog }) => {
    console.log(blog)
    const {cover,title,author,author_img,hashtags} = blog
    return (
        <div className='m-2'>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={cover}
                        alt="Shoes" />
                </figure>
                <div className="card-body bg-teal-500 rounded-b-2xl">
                    <div className="author flex justify-around items-center">
                        <h3>{author}</h3>
                        <img className=' w-16' src={author_img} alt="" />
                        <FaBookmark size={30}/>
                    </div>
                    <div className='flex'>
                    {
                        hashtags.map((has,index)=><p key={index}>{has}</p>)
                    }
                    </div>
                    <h2 className="card-title">{author}</h2>
                    <p>{title}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Mark As Read</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;