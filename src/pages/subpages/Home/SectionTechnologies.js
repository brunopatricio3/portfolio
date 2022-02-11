import React, {useEffect, useState} from 'react';
import '../../../styles/main.scss';
import TechIcon from '../../components/TechIcon';
import Project from '../../components/Project';
import projectsList from '../../../assets/copy/projects.json';

function SectionTechnologies(props) {

  const [selectedTechList, setSelectedTechList] = useState([]);
  const [hasUpdated, setHasUpdated] = useState(false);

  function toggleFilter(tech){
    setHasUpdated(true);
    let tempArr = selectedTechList;
    if(tempArr.includes(tech)){
      tempArr.splice(tempArr.indexOf(tech), 1);
    } else {
      tempArr.push(tech);
    }
    setSelectedTechList(tempArr);
    setTimeout(() => {
      setHasUpdated(false);
    }, 1);
    
  }

  return (
    <div className="section-technologies">
      <div className=" container">
        <div className="row margin-bottom-md">
          <div className="col-sm">
            <h2>
              Projects
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm text-center margin-bottom-md">
            <div>
              <TechIcon icon={"devicon-bootstrap-plain"} tech="bootstap" toggleFilter={toggleFilter} />
              <TechIcon icon={"devicon-css3-plain"} tech="css" toggleFilter={toggleFilter} />
              <TechIcon icon={"devicon-html5-plain"} tech="html" toggleFilter={toggleFilter} />
              <TechIcon icon={"devicon-javascript-plain"} tech="javascript" toggleFilter={toggleFilter} />
              <TechIcon icon={"devicon-jquery-plain"} tech="jquery" toggleFilter={toggleFilter} />
              <TechIcon icon={"devicon-react-original"} tech="react" toggleFilter={toggleFilter}/>
              <TechIcon icon={"devicon-sass-original"} tech="sass" toggleFilter={toggleFilter}/>
              <TechIcon icon={"devicon-sourcetree-original"} tech="sourcetree" toggleFilter={toggleFilter}/>
              <TechIcon icon={"devicon-typescript-plain"} tech="typescript" toggleFilter={toggleFilter} />
            </div>
          </div>
        </div>
        <div className="row">
          {!hasUpdated && projectsList.map((proj, i) => (
            <Project 
              key={i+"-"+ proj} 
              projectName={proj.projectName} 
              projectDuration={proj.projectDuration}
              projectTechnologies={proj.projectTechnologies}
              selectedTechList={selectedTechList}
            />
          ))}
        </div>
      </div>  
    </div>  
  );
}

export default SectionTechnologies;
