import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
const ProductCard = (props) => {

    const location = useLocation()
    

    return (
        <>
            
        
        <div className={`${location.pathname === "/product" ? `gr-${props.grid}` : "col-3"}`}>
            <Link to='/product/:id' className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link >
                        <img src="/images/wish.svg" alt="wishlist" />
                    </Link>
                </div>
                <div className="product-image d-flex align-items-center justify-content-center">
                    <img src="/images/watch.jpg" alt="product"/>
                    <img src="/images/speaker.jpg" alt="product" />
                </div>
                <div className="product-details">
                    <h6 className="brand">
                        Apple
                    </h6>
                    <h5 className="product-title">
                        Buy Apple Products From us
                    </h5>
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
                    <p className={` description ${props.grid === 12 ? "d-block" : "d-none"}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nisi soluta aperiam amet nesciunt quisquam, consectetur reprehenderit voluptatibus quam recusandae officia sapiente error! Amet cum eum excepturi aliquam accusamus deserunt!
                    </p>
                    <p className="price">
                        $9,999/-
                    </p>
                </div>

                <div className="action-bar position-absolute">
                        <div className='d-flex flex-column gap-15'>
                                <Link>
                                    <img src="/images/prodcompare.svg" alt="compare" />
                                </Link>
                                <Link>
                                    <img src="/images/view.svg" alt="view" />
                                </Link>
                                <Link>
                                    <img src="/images/add-cart.svg" alt="addcart" />
                                </Link>
                               
                        </div>
                </div>
            </Link>
        </div>

      
        </>
    )
}

export default ProductCard