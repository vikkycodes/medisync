import React from 'react';
import './footer.css';

import Logo from '../../assets/logo.png';
import Facebook from '../../assets/facebook.png';
import Twitter from '../../assets/twitter.png';
import Linkedin from '../../assets/linkedin.png';
import Instagram from '../../assets/instagram.png';

const Footer = () => {
  return (
    <div className="medisync__footer">
      <div className="medisync__footer_sections">
        <div className="medisync__footer_sections_contact">
          <div className="medisync__footer_sections_contact-logo">
            <img src={Logo} alt="logo" />
          </div>
          <p>
            Keep your health under control.
          </p>
          <div className="medisync__footer_sections_contact-icons">
            <img src={Twitter} alt="Twitter" />
            <img src={Facebook} alt="Facebook" />
            <img src={Linkedin} alt="Linkedin" />
            <img src={Instagram} alt="Instagram" />
          </div>
        </div>

        <div className="medisync__footer_sections_section">
          <h1>Company</h1>
          <p>About Us</p>
          <p>Pricing</p>
          <p>Blog</p>
          <p>Terms of Use</p>
        </div>

        <div className="medisync__footer_sections_section">
          <h1>Services</h1>
          <p>Emergency Services</p>
          <p>Secure data based platform</p>
          <p>Qualified doctors</p>
        </div>

      </div>

      <div className="medisync__footer-copyright">Copyright @2023 MediSync</div>
    </div>
  )
}

export default Footer