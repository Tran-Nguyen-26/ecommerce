import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import {Navigation} from 'swiper/modules'
import ProductItem from "../../../Components/ProductItem";

const RelatedProducts = (props) => {
  return (
    <>
      <div className="d-flex align-items-center mt-4">
        <div className="info w-75">
          <h5 className="mb-0 hd">{props.title}</h5>
        </div>
      </div>

      <div className="product-row w-100 mt-2">
        <Swiper slidesPerView={8} spaceBetween={0} pagination={{clickable:true}} modules={[Navigation]} className="mySwiper">
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
    </>
  )
}

export default RelatedProducts