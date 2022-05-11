import React, { useEffect, useState } from 'react';
import '../../styles/technologies.scss';

function TechIcon(props: { isSmall: boolean; toggleFilter: (arg0: string) => void; tech: string; icon: string; }) {

  const [isSelected, setSelected] = useState(false);

  function pressButton(tech: string){
    if(!props.isSmall) {
      setSelected(!isSelected); 
      props.toggleFilter(tech);
    }
  }

  return (
    <div className={`tech-wrapper`} onClick={() => pressButton(props.tech)}> 
      <i className={`${props.icon} tech-icon ${isSelected ? "colored" : ""}`} ></i>
    </div>
  );
}

export default TechIcon;
