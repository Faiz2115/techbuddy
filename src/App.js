import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Blog from './pages/Blog'
import CompareProduct from './pages/CompareProduct'
import Contact from './pages/Contact'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/Home'
import Login from './pages/Login'
import OurStore from './pages/OurStore'
import Wishlist from './pages/Wishlist'
import Signup from './pages/Signup'
import ResetPassword from './pages/ResetPassword'
import SingleBlog from './pages/SingleBlog'
const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/store' element={<OurStore/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/blog/:id' element={<SingleBlog/>}/>
            <Route path='/compare-product' element={<CompareProduct/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
            <Route path='/sign-up' element={<Signup/>}/>
            <Route path='/reset-password' element={<ResetPassword/>}/>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App