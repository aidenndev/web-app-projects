import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>AIDEN NGUYEN</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
      <a href="https://www.linkedin.com/in/aidendeveloper/" target='_blank'><AiFillLinkedin /></a>
        <a href="https://github.com/aidenndev" target='_blank'>
            <AiFillGithub />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Aiden Nguyen. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer