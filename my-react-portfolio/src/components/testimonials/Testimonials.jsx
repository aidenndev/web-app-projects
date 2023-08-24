import React from 'react'
import './testimonials.css'
import CLIENTPIC1 from "../../assets/avatar1.jpeg"
import CLIENTPIC2 from "../../assets/avatar2.jpeg"
import CLIENTPIC3 from "../../assets/avatar3.jpeg"
import CLIENTPIC4 from "../../assets/avatar4.jpeg"

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    photo: CLIENTPIC1,
    name: 'Jayden Nguyen',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel id, animi iure porro aut, a et nisi commodi blanditiis excepturi fugiat, voluptas sequi sapiente temporibus eaque nostrum obcaecati corrupti maiores!'
  },
  {
    photo: CLIENTPIC2,
    name: 'Ben Dang',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel id, animi iure porro aut, a et nisi commodi blanditiis excepturi fugiat, voluptas sequi sapiente temporibus eaque nostrum obcaecati corrupti maiores!'
  },
  {
    photo: CLIENTPIC3,
    name: 'Jayden Nguyen',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel id, animi iure porro aut, a et nisi commodi blanditiis excepturi fugiat, voluptas sequi sapiente temporibus eaque nostrum obcaecati corrupti maiores!'
  },
  {
    photo: CLIENTPIC4,
    name: 'Jayden Nguyen',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel id, animi iure porro aut, a et nisi commodi blanditiis excepturi fugiat, voluptas sequi sapiente temporibus eaque nostrum obcaecati corrupti maiores!'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>What do my clients think?</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
      {
          data.map(({photo, name, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className="client_avatar">
                  <img src={photo} />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials