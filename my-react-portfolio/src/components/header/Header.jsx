import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Xin chào, mình là</h5>
        <h1>Jayden Nguyen</h1>
        <h5 className='text-light'>Hướng Dẫn Viên Du Lịch - MC Sự Kiện</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={Me} alt="" />
        </div>

        <a href="#contact" className='scroll_down'>Kéo xuống</a>
      </div>

    </header>
  )
}

export default Header