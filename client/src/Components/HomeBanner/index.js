import React from "react"
import Slider from "react-slick"


const HomeBanner = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true
  }

  return (
    <div className="container mt-3">
      <div className="homeBannerSection">
        <Slider {...settings}>
          <div className="item">
            <img className="w-100" src="https://www.234mart.com/wp-content/uploads/2021/11/BLUE-MOUNTAIN-CARDS-website-banner-1920x549.jpg"></img>
          </div>
          <div className="item">
            <img className="w-100" src="https://www.schulich.uwo.ca/edid/img/IWD-2024-1920x549.png"></img>
          </div>
          <div className="item">
            <img className="w-100" src="https://static.vecteezy.com/system/resources/previews/006/633/040/non_2x/online-shopping-spring-on-phone-flower-pink-big-sale-banner-marketing-poster-fashion-vector.jpg"></img>
          </div>
          
        </Slider>
      </div>
    </div>
  )
}

export default HomeBanner