import React from 'react';
import './header.css';
import Image1 from '../../assets/image1.png'

const Header = () => {
  return (
    <div className="medisync__header" >
        <div className="medisync__header-content">
          <h1>Take your practice to the next level.</h1>
          <p>Medisync simplifies healthcare by combining data collection, processing, and reporting to enhance healthcare delivery at all levels.</p>
          <div className="medisync__header-content__demo">
            <button type='button'>Request for Demo</button>
          </div>
        </div>

        <div className="medisync__header-image">
          <img src={Image1} alt="Doctor and Patient" />
        </div>
    </div>
  )
}

export default Header