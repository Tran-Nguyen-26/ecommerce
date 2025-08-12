import HomeBanner from "../../Components/HomeBanner"
import Button from '@mui/material/Button'
import { FaAnglesRight } from "react-icons/fa6";
import React from "react"
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import {Navigation} from 'swiper/modules'
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";
import newsLetterImg from '../../assets/images/coupon.png'
import { CiMail } from "react-icons/ci";


const Home = () => {

  var productSliderOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true
  }

  return (
    <>
      <HomeBanner/>
      <HomeCat/>
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner">
                  <img src="https://img.freepik.com/premium-psd/background-pattern-design-best-quality-hyper-realistic-wallpaper-image-banner-template_643360-388458.jpg" className="cursor"></img>
                </div>
                <div className="banner mt-5">
                  <img src="https://img.freepik.com/premium-psd/background-pattern-design-best-quality-hyper-realistic-wallpaper-image-banner-template_643360-388458.jpg" className="cursor"></img>
                </div>
              </div>
            </div>
            
            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text-light text-sml mb-0">Do not miss the current offers until the end of March</p>
                </div>
                <Button className="viewAllBtn ms-auto">View All<FaAnglesRight/></Button>
              </div>

              <div className="product-row w-100 mt-2">
                <Swiper slidesPerView={4} spaceBetween={0} pagination={{clickable:true}} modules={[Navigation]} className="mySwiper">
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                </Swiper>
              </div>


              <div className="d-flex align-items-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                  <p className="text-light text-sml mb-0">New products with updated stocks</p>
                </div>
                <Button className="viewAllBtn ms-auto">View All<FaAnglesRight/></Button>
              </div>

              {/* <div className="product-row w-100 mt-2">
                <Swiper slidesPerView={4} spaceBetween={0} pagination={{clickable:true}} modules={[Navigation]} className="mySwiper">
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem/>
                  </SwiperSlide>
                </Swiper>
              </div> */}

              <div className="product-row productRow2 w-100 mt-4 d-flex">
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
              </div>


              <div className="d-flex mt-4 mb-5 bannerSec">
                <div className="banner">
                  <img src="https://innovarksolutions.com/wp-content/uploads/2025/01/cach-ban-hang-tren-amazon.png" className="cursor w-100"></img>
                </div>
                <div className="banner">
                  <img src="https://innovarksolutions.com/wp-content/uploads/2025/01/cach-ban-hang-tren-amazon.png" className="cursor w-100"></img>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">$20 discount for your first order</p>
              <h3 className="text-white">Join our newsletter and get...</h3>
              <p className="text-light">Join our email subscription now to get updates on<br/> promotions and coupons.</p>
              <form>
                <CiMail/>
                <input type="text" placeholder="Your email address"></input>
                <Button>Subscribe</Button>
              </form>
            </div>
            <div className="col-md-6">
              <img src={newsLetterImg}></img>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home