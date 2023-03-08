import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from "react-icons/bs"


const Header = () => {
  return (
    <>

      <header className="header-top-strip py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className='text-white mb-0'>Free Shipping</p>
            </div>
            <div className="col-6">
              <p className='text-end text-white mb-0'>
                Call: <a className='text-white' href="tel:+91-123466789">+91-123456</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className='text-white'>TechBuddy</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input type="text"
                  className="form-control"
                  placeholder="Search Product Here ..."
                  aria-label="Search Product Here" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch className='fs-6' />
                </span>
              </div>

            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="/images/compare.svg" alt="compare" />
                    <p className='mb-0'>Compare <br /> Products</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="/images/wishlist.svg" alt="wishlist" />
                    <p className='mb-0'>Favorite <br /> Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center  gap-10 text-white'>
                    <img src="/images/user.svg" alt="user" />
                    <p className='mb-0 text-center'> Log in <br /> My Account  </p>
                  </Link>
                </div>

                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                    <img src="/images/cart.svg " alt="cart" />
                    <div className='d-flex flex-column gap-10'>
                      <span className="badge bg-white text-dark">0</span>
                      <p className='mb-0'>$ 500</p>
                    </div>
                  </Link>
                </div>


              </div>
            </div>
          </div>

        </div>
      </header>

      <div className="header-bottom py-2">
        <div className="container-xxl">
          <div className="row justify-content-center ">
            <div className="col-10">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div className="dropdown">

                  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center me-5" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="images/menu.svg" alt="menu" style={{width:'1rem'}} />
                    <span className='me-5 d-inline-block'>
                      Categories
                    </span>
                  </button>

                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                    </li>
                  
                  </ul>

                </div>


                <div className="menu-links">
                  <div className="d-flex align-items-center gap-30">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/'>Our Store</NavLink>
                    <NavLink to='/'>Blogs</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
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

export default Header