import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/aidendeveloper/" target='_blank'><AiFillLinkedin /></a>
        <a href="https://github.com/aidenndev" target='_blank'>
            <AiFillGithub />
        </a>
    </div>
  )
}

export default HeaderSocials