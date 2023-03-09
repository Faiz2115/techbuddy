import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
const SpecialProduct = () => {
    return (
        <div className='col-4'>
            <div className="special-product-card">
                <div className="d-flex justify-content-evenly">
                    <div>

                        <Swiper
                            slidesPerView={"auto"}
                            centeredSlides={true}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="images/headphone.jpg" alt="watch" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src="images/watch.jpg" alt="watch"  />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src="images/speaker.jpg" alt="watch"  />
                            </SwiperSlide>
                            
                        </Swiper>
                    </div>

                    <div className='special-product-content'>
                        <h5 className="brand" >
                            Apple
                        </h5>
                        <h6 className="title">
                            Iphone 14 Pro
                        </h6>
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
                        <p className="price">
                            <span className="red-price">
                                $42,999/-
                            </span> &nbsp;
                            <strike>$49,999/-</strike>
                        </p>

                        <div className="discount-till d-flex align-items-center gap-10">
                            <p className='mb-0'>
                                <b>5 Days</b>
                            </p>
                            <div className="d-flex gap-10 align-items-center">
                                <span className='badge rounded-circle bg-danger p-2'>1</span>:
                                <span className='badge rounded-circle bg-danger p-2'>1</span>:
                                <span className='badge rounded-circle bg-danger p-2'>1</span>
                            </div>

                        </div>
                        <div className="prod-count my-3">
                            <p>Products : 5</p>
                            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                            >
                                <div class="progress-bar" style={{ width: '50%' }}></div>
                            </div>
                        </div>

                        <Link className='button'>Add To Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialProduct