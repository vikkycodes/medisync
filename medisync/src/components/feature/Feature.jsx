import React from 'react';
import './feature.css';
import Privacy from '../../assets/privacy.png';

const Feature = () => {
  return (
    <div className="medisync__feature">
      <div className="medisync__feature-privacy">
        <div className="medisync__feature-image">
          <img src={Privacy} alt="Privacy" />
        </div>
          <div className="medisync__feature-text">
            <h1>Privacy</h1>
            <p>Your data is private to you</p>
          </div>
      </div>

      <div className="medisync__feature-privacy">
        <div className="medisync__feature-image">
          <img src={Privacy} alt="Privacy" />
        </div>
          <div className="medisync__feature-text">
            <h1>Emergency Care</h1>
            <p>Do you have an emergency?</p>
          </div>
      </div>

      <div className="medisync__feature-privacy">
        <div className="medisync__feature-image">
          <img src={Privacy} alt="Privacy" />
        </div>
          <div className="medisync__feature-text">
          <h1>Live Chat</h1>
          <p>Have a live chat with us</p>
        </div>
      </div>
    </div>
  )
}

export default Feature