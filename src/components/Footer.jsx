import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin,BsGithub,BsYoutube,BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="/images/newsletter.png" alt="newsletter" />
                <h2 className='text-white mb-0'>Sign Up For Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
            <div className="input-group d-flex align-items-center">
                <input type="text"
                  className="form-control"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-4'>
          <div className="container-xxl">
            <div className="row">
              <div className="col-4">
                <h4 className='text-white'>Contact Us</h4>
                <div>
                  <address className='text-white fs-6'>Natipora <br/>Srinagar (J&K) <br/> Pin-code: 190015</address>
                  <a href="tel:+91-123456" className="mt-2 d-block text-white">+91-123456789</a>

                  <a href="mailto:techbuddy@gmail.com" className="mt-2 d-block text-white">techbuddy@gmail.com</a>

                  <div className="social-icons d-flex align-items-center gap-30 mt-4 ">
                    <Link to="#" className='text-white'>
                      <BsLinkedin />
                    </Link>
                    <Link to="#" className='text-white'>
                      <BsGithub />
                    </Link>
                    <Link to="#" className='text-white'>
                      <BsYoutube />
                    </Link>
                    <Link to="#" className='text-white'>
                      <BsInstagram />
                    </Link>
                   
                    
                  </div>
                </div>
              </div>
              <div className="col-3">
                <h4 className='text-white'>Information</h4>
                <div className='footer-links d-flex flex-column '>
                  <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                  <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                  <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                  <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>
                </div>
              </div>
              <div className="col-3">
                <h4 className='text-white'>Account</h4>
                <div className='footer-links d-flex flex-column '>
                  <Link className='text-white py-2 mb-1'>About Us</Link>
                  <Link className='text-white py-2 mb-1'>FAQ</Link>
                  <Link className='text-white py-2 mb-1'>Contact</Link>
                  <Link className='text-white py-2 mb-1'>Team</Link>
                </div>
              </div>
              <div className="col-2">
                <h4 className='text-white'>Quick Links</h4>
                <div className='footer-links d-flex flex-column '>
                  <Link className='text-white py-2 mb-1'>Laptops</Link>
                  <Link className='text-white py-2 mb-1'>Headphones</Link>
                  <Link className='text-white py-2 mb-1'>Tablets</Link>
                  <Link className='text-white py-2 mb-1'>Watch</Link>
                </div>
              </div>
            </div>
          </div>
      </footer>

      <footer className='py-3'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">&copy; {new Date().getFullYear()} Designed & Developed By: 
              <span className='text-danger'> Faizan Farooq</span>
               </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer