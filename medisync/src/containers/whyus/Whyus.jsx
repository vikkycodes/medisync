import React from 'react';
import './whyus.css';

import Doc1 from '../../assets/doc1.png';
import Doc2 from '../../assets/doc2.png';
import Doc3 from '../../assets/doc3.png';

const Whyus = () => {
  return (
    <div className="medisync__whyus">
      <h1>Why Choose Our Platform?</h1>
      <p>
        View your medical information on our secure patient portal, empowering you to actively engage in your healthcare decisions.
      </p>
      <div className="medisync__whyus-tab">
          <div className="medisync__whyus-right_tab">
            <div className="medisync__whyus-right_tab-image">
              <img src={Doc1} alt="Doc" />
            </div>
            <h1>We also Offer Consultation Service</h1>
            <p>
              Our Qualified and experinced doctors are always ready to attend to you. Make an appointment with them
            </p>
          </div>

          <div className="medisync__whyus-right_tab">
            <div className="medisync__whyus-right_tab-image">
              <img src={Doc2} alt="Doc" />
            </div>
            <h1>Qualified Doctors</h1>
            <p>
            Our Qualified and experinced doctors are always ready to attend to you. Make an appointment with them
            </p>
          </div>

          <div className="medisync__whyus-right_tab">
            <div className="medisync__whyus-right_tab-image">
              <img src={Doc3} alt="Doc" />
            </div>
            <h1>24Hour Services</h1>
            <p>
            Whenever you are having any Challenges you can reach out to our support system, on how we can support you.
            </p>
          </div>
      </div>
    </div>
  )
}

export default Whyus