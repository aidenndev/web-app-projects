import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio-1.png'
import IMG2 from '../../assets/portfolio-2.png'
import IMG3 from '../../assets/portfolio-3.png'
import IMG4 from '../../assets/portfolio-4.png'
import IMG5 from '../../assets/portfolio-5.png'
import IMG6 from '../../assets/portfolio-6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'My personal react portfolio web app',
    github: 'https://github.com/aidenndev/web-app-projects.git',
    demo: 'https://aidenndev.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Transformation Engine - Ruby on Rails',
    demo: 'https://aidenndev.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Transformation Engine - Ruby on Rails',
    demo: 'https://aidenndev.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Transformation Engine - Ruby on Rails',
    demo: 'https://aidenndev.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Transformation Engine - Ruby on Rails',
    demo: 'https://aidenndev.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Transformation Engine - Ruby on Rails',
    demo: 'https://aidenndev.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article className='portfolio_item'>
                <div className='portfolio_item-img'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio