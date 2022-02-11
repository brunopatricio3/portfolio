import React, { useState } from 'react';
import '../../styles/technologies.scss';

function TechIcon(props) {
  
  const [isSelected, setSelected] = useState(false);

  function pressButton(tech){
    if(!props.isSmall) {
      setSelected(!isSelected);
      props.toggleFilter(tech);
    }
  }

  return (
    <div className={`tech-wrapper${props.isSmall ? "-sm" : "" }`} onClick={() => pressButton(props.tech)}> 
      <i className={`${props.icon} tech-icon${props.isSmall ? "-sm" : "" } ${isSelected ? "colored" : ""}`} ></i>
    </div>
  );
}

export default TechIcon;
