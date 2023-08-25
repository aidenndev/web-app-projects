import React, { useRef } from 'react';
import './contact.css'
import {AiOutlineMail} from "react-icons/ai"
import {AiOutlineWhatsApp} from "react-icons/ai"
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vc29fys', 'template_5fit9l9', form.current, 'gh-WUNlvROtT_y_f3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className="contact_options">
          <article className='contact_option'>
            <AiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>aiden.nguyen.dev@gmail.com</h5>
            <a href="mailto:aiden.nguyen.dev@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact_option'>
            <AiOutlineWhatsApp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+61 414 003 720</h5>
            <a href="http://api.whatsapp.com/send?phone=+61414003720" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact