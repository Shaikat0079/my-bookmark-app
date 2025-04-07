import React from 'react'

const Blog = ({ blog }) => {
    console.log(blog)
    const {cover,title,author} = blog
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={cover}
                        alt="Shoes" />
                </figure>
                <div className="card-body bg-teal-500 rounded-b-2xl">
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