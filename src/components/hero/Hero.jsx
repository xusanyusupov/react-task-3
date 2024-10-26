import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import swiper2 from "../../assets/slider1.jpg";
import swiper3 from "../../assets/Zfold.jpg";
import swiper4 from '../../assets/slider001.jpg';
import chaticon from '../../assets/chaticon160.jpg';

import "../hero/hero.css"; 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { IoIosCloseCircle } from "react-icons/io";

import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Hero() {
  
  return (
    <main>
      <div className="container">
      <div className="fixed">
      <span>Sayt haqida fikirlaringgiz !</span>
      </div>

      <div className='chatIcon'>
        <span>Hush kelibsiz !</span>
        <img src={chaticon} alt="" />
      </div>
        <section className='swiper'>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              delay: 3000, 
              disableOnInteraction: false,
            }}
            modules={[Keyboard, Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={swiper2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiper3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiper4} alt="" />
            </SwiperSlide>
          </Swiper>
        </section>

      </div>
        
    </main>
  );
}
