import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <div className="container experience_container">
        <div className="experience_programming">
          <h3>Programming</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>Java</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>C#</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>Swift</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>TypeScript</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>Ruby</h4>
              <small className='text-light'>Experienced</small>
            </article>         
          </div>
        </div>

        <div className="experience_development">
        <h3>Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>Node JS</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>Ruby on Rails</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>ASP.NET</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>

        <div className="experience_database">
          <h3>Database</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>SQL</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>PostgreSQL</h4>
              <small className='text-light'>Experienced</small>
            </article>  
          </div>
        </div>

        <div className="experience_cloud">
        <h3>Cloud platforms</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>AWS</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>Heroku</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>Azure</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience