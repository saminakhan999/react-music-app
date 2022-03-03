import React from 'react';
import { Artist } from '../../components';
import './index.css';

function About () {
    return (
      <div className='about-div'>
        <Artist />
        <div className='dancing-image'>
            <img src="https://c.tenor.com/HJvqN2i4Zs4AAAAj/milk-and-mocha-cute.gif"></img>
        </div>
        
      </div>
    );
  }
  
  export default About;
