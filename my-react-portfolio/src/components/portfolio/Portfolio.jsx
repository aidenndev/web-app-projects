import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

// import required modules
import { EffectCreative } from 'swiper/modules';

import './portfolio.css'
import data from './portfolioData'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Nơi tôi đã đặt chân đến</h5>
      <h2>Những hành trình</h2>

      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="container portfolio_container"
      >
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <SwiperSlide className='portfolio_item'>
                <div className='portfolio_item-img'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
              </SwiperSlide>
            )
          })
        }
      </ Swiper>
    </section>
  )
}

export default Portfolio