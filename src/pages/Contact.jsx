import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {AiOutlineHome,AiOutlineMail} from "react-icons/ai"
import {BiPhoneCall , BiInfoCircle} from "react-icons/bi"
const Contact = () => {
  return (
    <>
      <Meta title='Tech Buddy - Contact' />
      <BreadCrumb title='Contact Us' />

      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6424.0575330776555!2d74.81903357972367!3d34.040064960322326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1678424190420!5m2!1sen!2sin"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-100'></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div className='r1'>
                     <h3 className="contact-title">
                          Contact Us
                      </h3>
                  <form action="" className='d-flex flex-column gap-15'>
                      <div>
                        <input type="text" 
                        className="form-control" 
                        placeholder='Name'
                         />
                      </div>
                      <div>
                        <input type="text" 
                        className="form-control" 
                        placeholder='Email'

                        />
                      </div>
                      <div>
                        <input type="tel" 
                        className="form-control" 
                        placeholder='Number'
                        />
                      </div>
                      <div>
                       <textarea name="" 
                       id="" 
                       cols="80" 
                       rows="4" 
                       className='w-100 form-control'
                       placeholder='Comments'
                       ></textarea>
                      </div>
                      <div>
                        <button className='button border-0'>Submit</button>
                      </div>
                  </form>

                </div>

                <div className='r1'>
                    <h3 className="contact-title">
                        Get in Touch With Us
                    </h3>
                    <div>
                      <ul className='ps-0'>
                        <li className='mb-3 d-flex gap-15 align-items-center'>
                           <AiOutlineHome className='fs-5'/>
                           <address className='mb-0'>
                           Natipora, Srinagar J&K</address>
                        </li>

                        <li className='mb-3 d-flex gap-15 align-items-center'>
                          <BiPhoneCall className='fs-5'/>
                          <a href="tel:+91-123456789" >+91-123456789</a>
                        </li>

                        <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineMail className='fs-5'/>
                        <a href="mailto:abc@gmail.com" >techbuddy@gmail.com</a>
                        </li>

                        <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiInfoCircle className='fs-5'/>
                        <p className='mb-0'>
                            Monday - Saturday
                        </p>
                        </li>
                      </ul>
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

export default Contact