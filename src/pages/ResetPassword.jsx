import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
const ResetPassword = () => {
  return (
    <>
        <Meta title='Tech Buddy - Reset Password' />
        <BreadCrumb title='Reset Password' />
        <div className="login-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
            <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center text-secondary fs-5 mb-4'>Reset Password</h3>
              <form action="" className='d-flex flex-column gap-15'>
                <div>
                  <input type="password"
                    name='password'
                    className="form-control"
                    placeholder='Password'
                  />
                </div>
                <div>
                  <input type="password"
                    name='confpassword'
                    className="form-control"
                    placeholder='Confirm Password'
                  />
                </div>

               
                <div>
                  
                  <div className="mt-3 d-flex justify-content-center align-items-center-gap-15">
                    <button className='button border-0' >OK</button>
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

export default ResetPassword