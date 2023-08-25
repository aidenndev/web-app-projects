import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BiSolidAward} from 'react-icons/bi'
import {HiUsers} from 'react-icons/hi'
import {IoLibrary} from 'react-icons/io5'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-img'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <BiSolidAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ years experience</small>
            </article>
            <article className='about_card'>
              <HiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>5+ in Australia & Vietnam</small>
            </article>
            <article className='about_card'>
              <IoLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>

          <p>
          I am an enthusiastic and innovative team player seeking a position in software and web development. I have front-end development experience and have demonstrated my proficiency in programming languages such as HTML5, CSS, and JavaScript. My passion for creativity and design drives me, and I am excited for the opportunity to begin my career in a professional working environment.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Connect</a>


        </div>

      </div>
    </section>
  )
}

export default About