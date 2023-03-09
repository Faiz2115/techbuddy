import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component"
import ProductCard from "../components/ProductCard"
const OurStore = () => {

    const [grid, setGrid] = useState(4)
    
    return (
        <>
            <Meta
                title='Tech Buddy - Our Store' />
            <BreadCrumb
                title='Our Store' />

            <div className="store-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className='filter-card mb-3 ' >
                                <h3 className="filter-title">
                                    Shop By Categories
                                </h3>

                                <div>
                                    <ul className='ps-0'>
                                        <li>Watch</li>
                                        <li>TV</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>

                            <div className='filter-card mb-3' >
                                <h3 className="filter-title">
                                    Filter By
                                </h3>
                                <div>
                                    <h5 className="sub-title">
                                        Availability
                                    </h5>

                                    <div className="form-check">
                                        <input className="form-check-input" type='checkbox'

                                        />
                                        <label className='form-check-label'>
                                            In Stock(1)
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type='checkbox' />
                                        <label className='form-check-label'>
                                            Out of Stock(0)
                                        </label>
                                    </div>
                                    <h5 className="sub-title">
                                        Price
                                    </h5>
                                    <div className='d-flex align-items-center gap-10'>
                                        <div className="form-floating">
                                            <input type="email"
                                                className="form-control"
                                                id="floatingInput" placeholder="From"
                                            />
                                            <label htmlFor="floatingInput">From</label>
                                        </div>
                                        <div className="form-floating">
                                            <input type="email"
                                                className="form-control"
                                                id="floatingInput1" placeholder="To"
                                            />
                                            <label htmlFor="floatingInput1">To</label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Color</h5>
                                    <div>
                                        <ul className='colors ps-0'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                    <h5 className="sub-title">Size</h5>
                                    <div>
                                        <div className="form-check">
                                            <input className="form-check-input" type='checkbox'
                                            />
                                            <label className='form-check-label'>
                                                S(1)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type='checkbox'
                                            />
                                            <label className='form-check-label'>
                                                M(2)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type='checkbox'
                                            />
                                            <label className='form-check-label'>
                                                L(3)
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Product Tags
                                </h3>
                                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphones</span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Apple</span>

                                </div>
                            </div>

                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Random Products
                                </h3>
                                <div>
                                    <div className="random-products mb-3 d-flex align-items-center">
                                        <div className="w-50">
                                            <img src="images/watch.jpg" alt="watch" className='img-fluid' />
                                        </div>
                                        <div className="w-50">
                                            <h5>Apple Watch Pro Series</h5>
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
                                            <b>$ 300/-</b>
                                        </div>
                                    </div>
                                    <div className="random-products d-flex align-items-center">
                                        <div className="w-50">
                                            <img src="images/headphone.jpg" alt="watch" className='img-fluid' />
                                        </div>
                                        <div className="w-50">
                                            <h5>Apple Headphones Pro </h5>
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
                                            <b>$ 800/-</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="mb-0" style={{ "width": "100px" }}>Sort By:</p>
                                        <select name="" id="" className='form-control form-select'>
                                            <option value="">Best Selling</option>
                                            <option value="">A-Z</option>
                                            <option value="">Low to High</option>
                                            <option value="">High to Low</option>
                                            <option value="">Old to New</option>
                                            <option value="">New to Old</option>
                                        </select>
                                    </div>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className="total-products mb-0">
                                            21 Products
                                        </p>
                                        <div className="d-flex gap-10 align-items-center grid">
                                            <img onClick={()=>{setGrid(3)}} src="images/gr4.svg" alt="grid" className='img-fluid d-block' />

                                            <img onClick={()=>{setGrid(4)}} src="images/gr3.svg" alt="grid" className='img-fluid d-block' />

                                            <img onClick={()=>{setGrid(6)}} src="images/gr2.svg" alt="grid" className='img-fluid d-block' />

                                            <img onClick={()=>{setGrid(12)}} src="images/gr.svg" alt="grid" className='img-fluid d-block' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="products-list pb-5">
                            <div className="d-flex gap-10 flex-wrap">
                                    <ProductCard 
                                        grid={grid}
                                    />
                                    <ProductCard 
                                        grid={grid}
                                    /> 
                                    <ProductCard  
                                        grid={grid}
                                    />
                                     <ProductCard 
                                        grid={grid}
                                    /> <ProductCard 
                                        grid={grid}
                                    />
                            </div>
                                   
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OurStore