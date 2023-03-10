import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Color from '../components/Color'
import Meta from '../components/Meta'
const CompareProduct = () => {
    return (
        <>
            <Meta title='Tech Buddy - Compare Products' />
            <BreadCrumb title='Compare Products' />
            <div className="compare-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row justify-content-center">
                        <div className="col-3">
                            <div className="compare-product-card position-relative">

                                <img src="images/cross.svg" alt="cross" className='position-absolute cross' />

                                <div className="product-card-image">
                                    <img src="images/watch.jpg" alt="watch" />
                                </div>

                                <div className="compare-product-details">
                                    <h5 className="title">Apple AirPod 2</h5>
                                    <h6 className="price">$100</h6>
                                </div>

                                <div>
                                        <div className="product-detail">
                                            <h5>Brand:</h5>
                                            <p>Apple</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Availability:</h5>
                                            <p>In Store</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Color:</h5>
                                            <Color/>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                                <p>S</p>
                                                <p>M</p>
                                                <p>L</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">

                                <img src="images/cross.svg" alt="cross" className='position-absolute cross' />

                                <div className="product-card-image">
                                    <img src="images/watch.jpg" alt="watch" />
                                </div>

                                <div className="compare-product-details">
                                    <h5 className="title">Apple AirPod 2</h5>
                                    <h6 className="price">$100</h6>
                                </div>

                                <div>
                                        <div className="product-detail">
                                            <h5>Brand:</h5>
                                            <p>Apple</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Availability:</h5>
                                            <p>In Store</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Color:</h5>
                                            <Color/>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                                <p>S</p>
                                                <p>M</p>
                                                <p>L</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">

                                <img src="images/cross.svg" alt="cross" className='position-absolute cross' />

                                <div className="product-card-image">
                                    <img src="images/watch.jpg" alt="watch" />
                                </div>

                                <div className="compare-product-details">
                                    <h5 className="title">Apple AirPod 2</h5>
                                    <h6 className="price">$100</h6>
                                </div>

                                <div>
                                        <div className="product-detail">
                                            <h5>Brand:</h5>
                                            <p>Apple</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Availability:</h5>
                                            <p>In Store</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Color:</h5>
                                            <Color/>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                                <p>S</p>
                                                <p>M</p>
                                                <p>L</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompareProduct