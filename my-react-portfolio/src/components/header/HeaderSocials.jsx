import React from 'react'
import {AiFillInstagram} from 'react-icons/ai'
import {FaViber} from 'react-icons/fa'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.instagram.com/iamc92/" target='_blank'><AiFillInstagram /></a>
        <a href="viber://chat?number=+84909081701" target='_blank'><FaViber /></a>
        <a href="http://api.whatsapp.com/send?phone=+840909081701" target='_blank'><AiOutlineWhatsApp /></a>
    </div>
  )
}

export default HeaderSocials