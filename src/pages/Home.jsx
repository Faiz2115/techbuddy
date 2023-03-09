import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
const Home = () => {
  document.title = "Tech Buddy"
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img src="images/main-banner.jpg" alt="main-banner" className='img-fluid rounded-3' />
                <div className="main-banner-content position-absolute">
                  <h4>SuperCharged For Pros</h4>
                  <h5>Air Buds Pro</h5>
                  <p>$9,999/-</p>
                  <Link className='button'>Buy Now</Link>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">

                <div className="small-banner position-relative">
                  <img src="images/catbanner-01.jpg" alt="main-banner" className='img-fluid rounded-3' />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sales</h4>
                    <h5>Air Buds Pro</h5>
                    <p>$9,999/-</p>

                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img src="images/catbanner-02.jpg" alt="main-banner" className='img-fluid rounded-3' />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>Air Buds Pro</h5>
                    <p>$9,999/-</p>

                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img src="images/catbanner-03.jpg" alt="main-banner" className='img-fluid rounded-3' />
                  <div className="small-banner-content position-absolute">
                    <h4>Buy Laptop</h4>
                    <h5>Air Buds Pro</h5>
                    <p>$9,999/-</p>

                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img src="images/catbanner-04.jpg" alt="main-banner" className='img-fluid rounded-3' />
                  <div className="small-banner-content position-absolute">
                    <h4>SuperCharged For Pros</h4>
                    <h5>Air Buds Pro</h5>
                    <p>$9,999/-</p>

                  </div>
                </div>
              </div>
            </div>


          </div>

        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service.png" alt="" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0 text-muted'>From all orders above $500</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-02.png" alt="" />
                  <div>
                    <h6> Daily Suprise Offers</h6>
                    <p className='mb-0 text-muted'>Save upto 25% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-03.png" alt="" />
                  <div>
                    <h6> Support 24/7</h6>
                    <p className='mb-0 text-muted'>Shop With an Expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-04.png" alt="" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0 text-muted'> Get Factory Direct Prices</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-05.png" alt="" />
                  <div>
                    <h6> Secure Payments</h6>
                    <p className='mb-0 text-muted'>100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-3 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">

                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Camera</h6>
                    <p className='mb-0'>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" className='img-fluid' />
                </div>

                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <p className='mb-0'>5 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="tv" />
                </div>

                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart Watch</h6>
                    <p className='mb-0'>10 Items</p>
                  </div>
                  <img src="images/speaker.jpg" alt="watch" />
                </div>

                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Music</h6>
                    <p className='mb-0'>21 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="headphone" />
                </div>

                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Camera</h6>
                    <p className='mb-0'>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <p className='mb-0'>5 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="tv" />
                </div>

                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart Watch</h6>
                    <p className='mb-0'>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="watch" />
                </div>

                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Music</h6>
                    <p className='mb-0'>21 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="headphone" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Featured Collection
              </h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="famous-wrapper py-2 home-wrapper-2">
        <div className="container-xxl">
          <div className="row justify-content-between">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/watch.jpg" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $390/mo for 24 months</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/watch.jpg" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $390/mo for 24 months</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/watch.jpg" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $390/mo for 24 months</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Special Products
              </h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>

      <section className="popular-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Our Popular Products
              </h3>
            </div>
          </div>
          <div className="row gap-3">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>


      <section className="marque-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper">
                <Marquee
                  className='d-flex'
                  speed={100}
                >
                  <div className='mx-4 w-25'>
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-06.png" alt="brand" />
                  </div>

                </Marquee>
              </div>
            </div>
          </div>
        </div>

      </section>



      <section className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row justify-content-evenly align-items-center">
            <div className="col-12">
              <h3 className="section-heading">
                Our Latest Blogs
              </h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>

    </>
  )
}

export default Home