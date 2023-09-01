import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Welcome to Aiden Restaurant" />
      <h1 className="app__header-h1">Taste the Tradition</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>We carry the pride of the traditional flavour - bringing with it the quintessential recipes that has been perfected for more than 30 years.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;