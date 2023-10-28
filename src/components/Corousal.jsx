import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import C1 from "../assets/images/carousel_1.jpg"

function Corousal() {
  return (
    <div className='h-[600px] bg-white'>
        <Swiper loop={true} spaceBetween={0} className='h-[50%]'>
          <SwiperSlide>
           <img src={C1} alt="" />
          </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Corousal