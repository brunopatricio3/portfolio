import React from 'react';
import '../../styles/social.scss';

function SocialIcon(props) {
  
  function pressButton(link){
    alert(link)
  }

  return (
    <div className='social-wrapper' onClick={() => pressButton(props.link)}> 
			<i className={`${props.icon} social-icon`}></i>
    </div>
  );
}

export default SocialIcon;
