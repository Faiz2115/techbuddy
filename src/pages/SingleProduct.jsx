import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
const SingleProduct = () => {

    const [orderedProduct, setOrderedProduct] = useState(true)


    return (
        <>
            <Meta title='Tech Buddy - Product' />
            <BreadCrumb title='Product' />
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">

                        </div>
                        <div className="col-6">

                        </div>
                    </div>
                </div>
            </div>

            <section className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <div className='bg-white p-3'>
                                <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, unde veniam. Consequatur, repudiandae similique maiores eius aspernatur pariatur suscipit quaerat. Eum harum provident molestias earum, ullam et nihil. Omnis, facilis.
                                <br/>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptates velit asperiores reiciendis perferendis dolorum nihil fugiat, tempora labore, fugit error, recusandae beatae eius officiis commodi adipisci sint dicta enim.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="reviews-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                        <h4>Reviews</h4>
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className='mb-0'>Customer Reviews</h4>
                                        <div className='d-flex gap-10 align-items-center'>
                                            <ReactStars
                                                count={5}
                                                size={18}
                                                value={4.5}
                                                isHalf={true}
                                                edit={false}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                activeColor="#ffd700"
                                            />
                                            <p className='mb-0'>Based on 2 Reviews</p>
                                        </div>

                                    </div>
                                    <div>
                                        {orderedProduct && <div>
                                            <a href="" className='text-dark text-decoration-underline'>Write a Review</a>

                                        </div>}
                                    </div>
                                </div>
                                <div className="review-form">
                                    <h4 className='mb-0'>Write a Review</h4>
                                    <form action="" className='d-flex flex-column gap-15'>
                                        <div>
                                            <input type="text"
                                                className="form-control"
                                                placeholder='Name'
                                            />
                                        </div>

                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={18}
                                                value={0}
                                                isHalf={true}
                                                edit={true}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                activeColor="#ffd700"
                                            />
                                        </div>

                                        <div>
                                            <textarea name=""
                                                id=""
                                                cols="80"
                                                rows="4"
                                                className='w-100 form-control'
                                                placeholder='Review'
                                            ></textarea>
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button className='button border-0 '>Submit Review</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="reviews">
                                    <div className="review">
                                        <div className="d-flex gap-10 align-items-center">
                                            <h6 className='mb-0'>Faiz</h6>
                                            <ReactStars
                                                count={5}
                                                size={18}
                                                value={3.5}
                                                isHalf={true}
                                                edit={false}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                activeColor="#ffd700"
                                            />
                                        </div>

                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo incidunt veniam adipisci vero! Repellat deleniti excepturi saepe, illo iusto molestiae quaerat! Harum molestias nam ducimus quibusdam debitis veritatis, reiciendis ullam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam cum perferendis rerum quos et magnam distinctio dicta maiores incidunt molestias, fugit consequatur voluptate consectetur blanditiis. Reprehenderit saepe aperiam enim architecto.</p>
                                    </div>
                                    <div className="review">
                                        <div className="d-flex gap-10 align-items-center">
                                            <h6 className='mb-0'>Faiz</h6>
                                            <ReactStars
                                                count={5}
                                                size={18}
                                                value={3.5}
                                                isHalf={true}
                                                edit={false}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                activeColor="#ffd700"
                                            />
                                        </div>

                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo incidunt veniam adipisci vero! Repellat deleniti excepturi saepe, illo iusto molestiae quaerat! Harum molestias nam ducimus quibusdam debitis veritatis, reiciendis ullam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam cum perferendis rerum quos et magnam distinctio dicta maiores incidunt molestias, fugit consequatur voluptate consectetur blanditiis. Reprehenderit saepe aperiam enim architecto.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="popular-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Our Popular Products
                            </h3>
                        </div>
                    </div>
                    <div className="row gap-3">
                        <ProductCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct