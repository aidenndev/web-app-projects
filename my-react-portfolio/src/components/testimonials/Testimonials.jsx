import React from 'react'
import './testimonials.css'
import CLIENTPIC1 from "../../assets/avatar1.JPG"
import CLIENTPIC2 from "../../assets/avatar2.jpg"
import CLIENTPIC3 from "../../assets/avatar3.jpg"
import CLIENTPIC4 from "../../assets/avatar4.jpg"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

const data = [
  {
    photo: CLIENTPIC1,
    name: 'Maya Angelou',
    review: '"Chúng ta có thể gặp nhiều thất bại nhưng chúng ta không được bị đánh bại."'
  },
  {
    photo: CLIENTPIC2,
    name: 'Benjamin Franklin',
    review: '"Thất bại trong chuẩn bị cũng có nghĩa là chuẩn bị thất bại."'
  },
  {
    photo: CLIENTPIC3,
    name: 'Cristiano Ronaldo',
    review: '"Nếu bạn nghĩ rằng bạn đã hoàn hảo rồi, thì bạn sẽ không bao giờ là như vậy."'
  },
  {
    photo: CLIENTPIC4,
    name: 'Mỹ Tâm',
    review: '""Hãy cứ đi dù nhanh hay chậm nhưng đừng bao giờ dừng lại.""'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Những câu nói tâm đắc</h5>
      <h2>Châm Ngôn Sống</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}>
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