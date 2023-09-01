import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">I took the risk of quitting my stable job in 2011 to found Aiden Restaurant.</p>
        </div>
        <p className="p__opensans">For more than ten years since then, we have continuously strived to bring delicious, healthy and authentic dishes, along with a cozy space suitable for all customers. We always want to create a unique experience for our customers and constantly strive to do so every day.</p>
      </div>

      <div className="app__chef-sign">
        <p>Luke Nguyen</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;