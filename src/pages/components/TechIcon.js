import React, { useState } from 'react';
import '../../styles/technologies.scss';

function TechIcon(props) {
  
  const [isSelected, setSelected] = useState(false);

  function pressButton(tech){
    if(!props.isSmall) {
      // alert("Activate Filter")
      // props.toggleFilter(tech)
      setSelected(!isSelected);
    }
  }

  return (
    <div className={`tech-wrapper${props.isSmall ? "-sm" : "" }`} onClick={() => pressButton(props.tech)}> 
      <i className={`${props.icon} tech-icon${props.isSmall ? "-sm" : "" } ${isSelected ? "project-selected" : ""}`} ></i>
    </div>
  );
}

export default TechIcon;
