import React from 'react'
import './footer.css'
import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {FaViber} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>JAYDEN NGUYEN</a>

      <ul className='permalinks'>
        <li><a href="#">Trang chủ</a></li>
        <li><a href="#about">Giới thiệu</a></li>
        <li><a href="#portfolio">Hành trình </a></li>
        <li><a href="#contact">Liên hệ</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.instagram.com/iamc92/" target='_blank'><AiFillInstagram /></a>
        <a href="viber://chat?number=+84909081701" target='_blank'><FaViber /></a>
        <a href="http://api.whatsapp.com/send?phone=+840909081701" target='_blank'><AiOutlineWhatsApp /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Jayden Nguyen. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer