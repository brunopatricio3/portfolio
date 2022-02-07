import React, { useState } from 'react';
import '../../../styles/main.scss';
import AnimatedBackground from "../../../assets/videos/animated-background.mp4"
import SocialIcon from '../../components/SocialIcon';

function SectionWelcome() {

  return (
      <div className="section-welcome">
        <video className="bg-video" autoPlay loop muted>
            <source src={AnimatedBackground} type='video/mp4' />
        </video>
        <div className="bg-video-container">
          <div className="bg-video-text-container">
          <h1 className="text-sz-xxl">
              <span className='txt-cl-prog-grey'>&#60;</span>
              <span className='txt-cl-prog-green'>BrunoPatricio</span> 
              <span className='txt-cl-prog-blue'> role</span>
              <span className='txt-cl-prog-white'>=</span>
              <span className='txt-cl-prog-brown'>"FrontEndDeveloper"</span>
              <span className='txt-cl-prog-grey'> /</span>
              <span className='txt-cl-prog-grey'>&#62;</span>
            </h1>
            
            <SocialIcon icon={"devicon-github-original"} link="github" />
            <SocialIcon icon={"devicon-linkedin-plain"} link="linkedin" />
                        
            {/* <p className="text-sz-xl">Front-End Developer</p> */}
          </div>
        </div>
      </div>    
  );
}

export default SectionWelcome;
