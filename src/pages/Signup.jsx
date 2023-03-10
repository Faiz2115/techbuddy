import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Signup = () => {
  return (
    <>
      <Meta title='Tech Buddy - Sign-Up' />
      <BreadCrumb title='Sign-Up' />
      <div className="login-wrapper home-wrapper-2 py-5">
       <div className="container-xxl">
       <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center text-secondary fs-5 mb-4'>Create Account</h3>
              <form action="" className='d-flex flex-column gap-15'>
              <div>
                  <input type="text"
                    className="form-control"
                    placeholder='Name'
                  />
                </div>

                <div>
                  <input type="email"
                    className="form-control"
                    placeholder='Email'
                  />
                </div>

                <div>
                  <input type="tel"
                    className="form-control"
                    placeholder='Mobile Number'
                  />
                </div>

                <div>
                  <input type="password"
                    className="form-control"
                    placeholder='Password' />
                </div>
                <div>
                  
                  <div className="mt-3 d-flex justify-content-center align-items-center-gap-15">
                    <button className='button border-0' >Create</button>
                    {/* <Link to='/login' className='ms-3 button border-0'>Login</Link> */}
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

export default Signup