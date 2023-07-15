import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import DoencaCard from '../cards/DoencaCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



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
      <SwiperSlide><DoencaCard imagem={'https://bkt-sa-east-1-cms-drupal.s3.sa-east-1.amazonaws.com/delboniauriemo.com.br/2023-03/Nova%20Gripe.png?XR7WnsH.Meq6eB_EhXj177VauJcr__vq'} nome={'Gripe'} descricao={'A gripe é uma infecção aguda do sistema respiratório,provocado pelo vírus da influenza, com grande potencial de transmissão'}/></SwiperSlide>
      <SwiperSlide><DoencaCard imagem={'https://bkt-sa-east-1-cms-drupal.s3.sa-east-1.amazonaws.com/delboniauriemo.com.br/2023-03/Nova%20Gripe.png?XR7WnsH.Meq6eB_EhXj177VauJcr__vq'} nome={'Gripe'} descricao={'A gripe é uma infecção aguda do sistema respiratório,provocado pelo vírus da influenza, com grande potencial de transmissão'}/></SwiperSlide>
      <SwiperSlide><DoencaCard imagem={'https://bkt-sa-east-1-cms-drupal.s3.sa-east-1.amazonaws.com/delboniauriemo.com.br/2023-03/Nova%20Gripe.png?XR7WnsH.Meq6eB_EhXj177VauJcr__vq'} nome={'Gripe'} descricao={'A gripe é uma infecção aguda do sistema respiratório,provocado pelo vírus da influenza, com grande potencial de transmissão'}/></SwiperSlide>
      <SwiperSlide><DoencaCard imagem={'https://bkt-sa-east-1-cms-drupal.s3.sa-east-1.amazonaws.com/delboniauriemo.com.br/2023-03/Nova%20Gripe.png?XR7WnsH.Meq6eB_EhXj177VauJcr__vq'} nome={'Gripe'} descricao={'A gripe é uma infecção aguda do sistema respiratório,provocado pelo vírus da influenza, com grande potencial de transmissão'}/></SwiperSlide>

    </Swiper>
  )
}

export default Carousel