import React from 'react';
import '../../../styles/main.scss';
import TechIcon from '../../components/TechIcon';
import Project from '../../components/Project';
import projectsList from '../../../assets/copy/projects.json';


function SectionTechnologies(props) {

  function toggleFilter(tech){
    alert(tech)
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
          {projectsList.map( (p) => (
            <Project 
              key={p.projectName} 
              projectName={p.projectName} 
              projectDuration={p.projectDuration}
              projectTechnologies={p.projectTechnologies}
              />
            )
          )}
         
        </div>
      </div>  
    </div>  
  );
}

export default SectionTechnologies;
