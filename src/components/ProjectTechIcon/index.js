import React, { useEffect, useState } from 'react';
import '../../styles/technologies.scss';

function ProjectTechIcon(props) {

  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    if(props.isSmall && props.selectedTechList && props.selectedTechList.length > 0){
      if(props.selectedTechList.includes(props.tech)){
        setSelected(true);
      }
    }
  },[isSelected])

  return (
    <div className={"tech-wrapper-sm"}> 
      <i className={`${props.icon} tech-icon-sm ${isSelected ? "colored" : ""}`} ></i>
    </div>
  );
}

export default ProjectTechIcon;
