import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <>
      <Meta title='Tech Buddy - Forgot Password' />
      <BreadCrumb title='Forgot Password' />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center text-secondary fs-5'>Reset Your Password</h3>
              <p className="text-center text-secondary mb-4 fs-6">We will send you an email to reset your password!</p>
              <form action="" className='d-flex flex-column gap-15'>
                <div>
                  <input type="email"
                    className="form-control"
                    placeholder='Email'
                  />
                </div>

                <div>

                  <div className="mt-3 d-flex flex-column justify-content-center align-items-center gap-15">
                    <button className='button border-0' type='submit'>Submit</button>
                    <Link className='forgot' to="/login">
                      Cancel
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword