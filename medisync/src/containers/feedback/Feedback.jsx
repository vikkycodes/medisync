import React from 'react';
import './feedback.css';
import Client1 from '../../assets/client1.png'

const Feedback = () => {
  return (
    <div className="medisync__feedback">
      <h1>
        What Our User Say About Us
      </h1>

      <div className="medisync__feedback_client">
        <p>
        “Making use of Medisync platform is the best decisions I made has a lifestyle blogger because whenever I travel, I can always have access to my recent medical history to use”.
        </p> 
        <div className="medisync__feedback_client-image">
          <img src={Client1} alt="Client1" />
        </div>
        <div className="medisync__feedback_client-Name">
          <h1>Hope Atam</h1>
          <p>Lifestyle Blogger</p>
        </div>
      </div>
    </div>
  )
}

export default Feedback