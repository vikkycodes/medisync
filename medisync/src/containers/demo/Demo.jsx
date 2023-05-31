import React from 'react';
import './demo.css';
import Frame from '../../assets/frame.jpg';

const Demo = () => {
  return (
    <div className="medisync__demo_bg" 
      style={{ backgroundImage: `url(${Frame})` }}>
      <h1>
        Integrated health management platform
      </h1>
      <p>
        Medisync helps  tens of thousands of individuals and healthcare providers across the world to collect and record their medical data, symptoms, exam results and also share it with other medical person or anybody from the family.
      </p>
      <button type='button'>Request for Demo</button>
    </div>
  )
}

export default Demo