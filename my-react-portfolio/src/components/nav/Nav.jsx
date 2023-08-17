import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdWorkOutline} from 'react-icons/md'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageMinus} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><MdWorkOutline /></a>
      <a href="#services"><RiServiceLine /></a>
      <a href="#contact"><BiMessageMinus /></a>
    </nav>
  )
}

export default Nav