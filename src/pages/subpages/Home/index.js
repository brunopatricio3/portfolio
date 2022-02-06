import React, { useState } from 'react';
import '../../../styles/main.scss';
import AnimatedBackground from "../../../assets/videos/animated-background.mp4"

function Home() {

  const [expandProfile, setExpandProfile] = useState(false);

  return (
    <>     
      <div className="main-wrapper">
        <video className="bg-video" autoPlay loop muted>
            <source src={AnimatedBackground} type='video/mp4' />
        </video>
      </div>    
    </>
  );
}

export default Home;
