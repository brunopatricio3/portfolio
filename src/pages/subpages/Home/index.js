import React, { useState } from 'react';
import '../../../styles/main.scss';
import AnimatedBackground from "../../../assets/videos/animated-background.mp4"

function Home() {

  const [expandProfile, setExpandProfile] = useState(false);

  return (
    <>     
      <div className="section-welcome">
        <video className="bg-video" autoPlay loop muted>
            <source src={AnimatedBackground} type='video/mp4' />
        </video>
        <div className="bg-video-container">
          <div className="bg-video-text-container">
            <h1 className="text-sz-xxl">@Bruno_Patrício</h1>
            <p className="text-sz-xl">Front-End Developer</p>
          </div>
        </div>
      </div>    
    </>
  );
}

export default Home;
