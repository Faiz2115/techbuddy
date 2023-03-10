import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'
const SingleBlog = () => {
    return (
        <>
            <Meta title='Tech Buddy - Blog' />
            <BreadCrumb title='Blog' />

            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <h3 className="title">Apple - Iphone 15 Pro </h3>
                                <img src="/images/blog-1.jpg" alt="blog" className='img-fluid w-50 py-5' />
                                <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus voluptates voluptas similique rem sit distinctio alias, atque laboriosam culpa labore. Ullam asperiores esse nemo libero atque tempore blanditiis sit at?Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi soluta magnam blanditiis porro itaque. Mollitia cumque delectus architecto eligendi cupiditate a, vero veniam deserunt explicabo dolore error earum consectetur.</p>
                                <Link to='/blog' className='d-flex align-items-center'>
                                    <HiOutlineArrowLeft />
                                    <span className='ms-1'>
                                        Back to blog
                                    </span>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleBlog