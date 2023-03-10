import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
const Wishlist = () => {
    return (
        <>
            <Meta title='Tech Buddy - Wishlist' />
            <BreadCrumb title='Wishlist' />
            <div className="wishlist-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row justify-content-center">
                        <div className="col-3">
                            <div className="wishlist-card position-relative">

                                <img src="images/cross.svg" alt="cross" className='position-absolute cross' />

                                <div className="wishlist-card-image">
                                    <img src="images/watch.jpg" alt="watch" className='img-fluid' />
                                </div>
                                <div className='py-3 bg-secondary text-white text-center'>
                                    <h5 className="title">Apple Air Pods V2</h5>
                                    <h6 className="price">$100</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="wishlist-card position-relative">

                                <img src="images/cross.svg" alt="cross" className='position-absolute cross' />

                                <div className="wishlist-card-image">
                                    <img src="images/watch.jpg" alt="watch" className='img-fluid' />
                                </div>
                                <div className='py-3 bg-secondary text-white text-center'>
                                    <h5 className="title">Apple Air Pods V2</h5>
                                    <h6 className="price">$100</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="wishlist-card position-relative">

                                <img src="images/cross.svg" alt="cross" className='position-absolute cross' />

                                <div className="wishlist-card-image">
                                    <img src="images/watch.jpg" alt="watch" className='img-fluid' />
                                </div>
                                <div className='py-3 bg-secondary text-white text-center'>
                                    <h5 className="title">Apple Air Pods V2</h5>
                                    <h6 className="price">$100</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist