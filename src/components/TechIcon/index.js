import React, { useEffect, useState } from 'react';
import '../../styles/technologies.scss';

function TechIcon(props) {

  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    if(props.isSmall && props.selectedTechList && props.selectedTechList.length > 0){
      if(props.selectedTechList.includes(props.tech)){
        setSelected(true);
      }
    }
  },[isSelected])

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
