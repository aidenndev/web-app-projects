import React from 'react'
import './testimonials.css'
import CLIENTPIC1 from "../../assets/avatar1.jpeg"
import CLIENTPIC2 from "../../assets/avatar2.jpeg"
import CLIENTPIC3 from "../../assets/avatar3.jpeg"
import CLIENTPIC4 from "../../assets/avatar4.jpeg"

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>What do my clients think?</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        <article className='testimonial'>
          <div className="client_avatar">
            <img src={CLIENTPIC1} alt="Avatar 1" />
          </div>
          <h5 className='client_name'>Ryan Bui</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel id, animi iure porro aut, a et nisi commodi blanditiis excepturi fugiat, voluptas sequi sapiente temporibus eaque nostrum obcaecati corrupti maiores!
          </small>
        </article>

        <article className='testimonial'>
          <div className="client_avatar">
            <img src={CLIENTPIC2} alt="Avatar 2" />
          </div>
          <h5 className='client_name'>Ryan Bui</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel id, animi iure porro aut, a et nisi commodi blanditiis excepturi fugiat, voluptas sequi sapiente temporibus eaque nostrum obcaecati corrupti maiores!
          </small>
        </article>

        <article className='testimonial'>
          <div className="client_avatar">
            <img src={CLIENTPIC3} alt="Avatar 3" />
          </div>
          <h5 className='client_name'>Ryan Bui</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel id, animi iure porro aut, a et nisi commodi blanditiis excepturi fugiat, voluptas sequi sapiente temporibus eaque nostrum obcaecati corrupti maiores!
          </small>
        </article>

        <article className='testimonial'>
          <div className="client_avatar">
            <img src={CLIENTPIC4} alt="Avatar 4" />
          </div>
          <h5 className='client_name'>Ryan Bui</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel id, animi iure porro aut, a et nisi commodi blanditiis excepturi fugiat, voluptas sequi sapiente temporibus eaque nostrum obcaecati corrupti maiores!
          </small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials