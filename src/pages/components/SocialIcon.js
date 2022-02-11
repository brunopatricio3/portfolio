import React from 'react';
import '../../styles/social.scss';

function SocialIcon(props) {
  
  function pressButton(url){
    window.open(url , '_blank');
  }

  return (
    <div className='social-wrapper' onClick={() => pressButton(props.url)}> 
			<i className={`${props.icon} social-icon`}></i>
    </div>
  );
}

export default SocialIcon;
