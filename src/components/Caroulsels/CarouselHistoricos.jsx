import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import HistoricoCard from '../cards/HistoricoCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import DoencaCard from '../cards/DoencaCard';



const Carousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    
    >
      <SwiperSlide> <DoencaCard numero={'20202020'} nomeMedico={'testeNome'} hora={'20/20/20'} /> </SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>

    </Swiper>
  )
}

export default Carousel