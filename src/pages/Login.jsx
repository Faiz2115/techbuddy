import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <>
            <Meta title='Tech Buddy - Login' />
            <BreadCrumb title='Login' />

            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center text-secondary fs-5 mb-4'>Login</h3>
                            <form action="" className='d-flex flex-column gap-15'>
                                <div>
                                    <input type="email"
                                     className="form-control" 
                                     placeholder='Email' 
                                     />
                                </div>
                                <div>
                                    <input type="password"
                                     className="form-control"
                                     placeholder='Password'  />
                                </div>
                                <div>
                                    <Link className='forgot' to="/forgot-password">
                                        Forgot Password?
                                    </Link>
                                    <div className="mt-3 d-flex justify-content-center align-items-center-gap-15">
                                        <button className='button border-0' >Login</button>
                                        <Link to='/sign-up' className='ms-3 button border-0'>Sign-Up</Link>
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

export default Login