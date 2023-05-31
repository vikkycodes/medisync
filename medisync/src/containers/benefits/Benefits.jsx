import React from 'react';
import './benefits.css';
import Laptop from '../../assets/laptop.png'
import Analyict from '../../assets/analyict.png'
import Call from '../../assets/call.png'
import Privacy from '../../assets/privacy.png'

const Benefits = () => {
  return (
    <div className='medisync__benefits'>
      <div className="medisync__benefits-text">
        <h1>
          Improving Lives With Our Secure Data Regarding Your Health.
        </h1>
        <p>
          With Medisync you can safe your medical records, track your health issues. Share your health record with others in case of any emergency. 
        </p>
      </div>
      
      <div className="medisync__benefits-tabs">
        <div className="medisync__benefits-tabs_tab">
          <div className="medisync__benefits-tabs_tab-icon">
            <img src={Laptop} alt="Laptop" />
          </div>
          <p>Get Your Health Records Done Electronically</p>
          <button type='button'>Explore</button>
        </div>

        <div className="medisync__benefits-tabs_tab">
          <div className="medisync__benefits-tabs_tab-icon">
            <img src={Analyict} alt="Analyist" />
          </div>
          <p>Health Care analytics Checker</p>
          <button type='button'>Explore</button>
        </div>

        <div className="medisync__benefits-tabs_tab">
          <div className="medisync__benefits-tabs_tab-icon">
            <img src={Call} alt="Call" />
          </div>
          <p>Get In Touch With Our Health Care Professional</p>
          <button type='button'>Explore</button>
        </div>

        <div className="medisync__benefits-tabs_tab">
          <div className="medisync__benefits-tabs_tab-icon">
            <img src={Privacy} alt="Privacy" />
          </div>
          <p>Your Health Record only known to you</p>
          <button type='button'>Explore</button>
        </div>
      </div>
    </div>
  )
}

export default Benefits