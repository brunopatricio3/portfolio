import React, { useEffect, useState } from 'react';
import '../../styles/technologies.scss';

interface ProjectTechIconProps{
  isSmall: boolean,
  selectedTechList: string[],
  tech: string,
  icon: string,
}

function ProjectTechIcon(props: ProjectTechIconProps) {

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
