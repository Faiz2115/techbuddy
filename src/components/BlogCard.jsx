import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className="col-5">
        <div className="blog-card">
            <div className="card-image">
                <img src="images/blog-1.jpg" alt="blog" className='img-fluid w-100' />
            </div>
            <div className="blog-content">
                <p className='date'>
                    21 June 2023
                </p>
                <h5 className="title">
                        Tech Buddy
                </h5>
                <p className="desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius voluptatum repudiandae voluptates pariatur ...
                </p>
                <Link to='/blog/:id' className="button">Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default BlogCard