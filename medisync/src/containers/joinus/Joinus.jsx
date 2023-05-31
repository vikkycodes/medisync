import React from 'react';
import './joinus.css';

const Joinus = () => {
  return (
    <div className="medisync__joinus">
      <h2>Newsletter</h2>
      <h1>JOIN US</h1>
      <p>Get informed about our latest services or product</p>
      <div className="medisync__joinus_input">
        <input type='email' placeholder='Your email'/>
        <button type='button'>Subscribe</button>
      </div>
    </div>
  )
}

export default Joinus