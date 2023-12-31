import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaSuitcaseRolling } from 'react-icons/fa'
import { BiSolidPlaneAlt } from 'react-icons/bi'
import { IoLibrary } from 'react-icons/io5'
import { BsPencilSquare } from 'react-icons/bs'
import { TbZodiacCapricorn } from 'react-icons/tb'
import { GiGraduateCap } from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <h5>Giới thiệu</h5>
      <h2>Về Bản Thân</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-img'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
          <article className='about_card'>
              <BsPencilSquare className='about_icon' />
              <h5>Tên đầy đủ</h5>
              <small>Nguyễn Ngọc Mạnh Cường</small>
            </article>
            <article className='about_card'>
              <TbZodiacCapricorn className='about_icon' />
              <h5>Cung Hoàng Đạo</h5>
              <small>Ma Kết</small>
            </article>
            <article className='about_card'>
              <GiGraduateCap className='about_icon' />
              <h5>Đã tốt nghiệp</h5>
              <small>Trường Cao Đẳng Du Lịch Sài Gòn</small>
            </article>
            <article className='about_card'>
              <FaSuitcaseRolling className='about_icon' />
              <h5>Kinh nghiệm</h5>
              <small>Từ năm 2014</small>
            </article>
            <article className='about_card'>
              <BiSolidPlaneAlt className='about_icon' />
              <h5>Trải nghiệm</h5>
              <small>20 Quốc gia - Châu Á, Châu Âu, Châu Úc và Châu Mỹ</small>
            </article>
            <article className='about_card'>
              <IoLibrary className='about_icon' />
              <h5>Sở thích</h5>
              <small>Du lịch, âm nhạc, thời trang, bóng đá</small>
            </article>
          </div>

          <p>
            Xin chào mọi người, tôi là hướng dẫn viên du lịch cùng niềm đam mê và kiến thức sâu sắc với nhiều năm kinh nghiệm trong ngành du lịch.
          </p>
          <p>
            Với tôi, du lịch không chỉ là việc khám phá vẻ đẹp tự nhiên và văn hóa đa dạng của một đất nước, mà còn là cơ hội để kể và chia sẻ những câu chuyện thú vị. Tôi luôn nỗ lực để tạo ra trải nghiệm du lịch đáng nhớ cho khách hàng của mình bằng cách kết hợp kiến thức chuyên sâu, sự nhiệt tình và chân thành.
          </p>
          <p>
            Hãy để tôi chia sẻ những hành trình thú vị và đồng hành cùng các bạn khám phá thế giới!
          </p>

          <a href="#contact" className='btn btn-primary'>Kết Nối</a>


        </div>

      </div>
    </section>
  )
}

export default About