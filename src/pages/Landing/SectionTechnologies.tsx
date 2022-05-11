import React, {useState} from 'react';
import '../../styles/main.scss';
import TechIcon from '../../components/TechIcon';
import ProjectCard from '../../components/ProjectCard';
import projectsList from '../../assets/copy/projects.json';

function SectionTechnologies() {

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
    console.log(selectedTechList)
    setTimeout(() => {
      setHasUpdated(false);
    }, 1);
  }

  return (
    <div id="projects" className="section-technologies">
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
              <TechIcon icon={"devicon-bootstrap-plain"} tech="bootstrap" toggleFilter={toggleFilter} isSmall={false} />
              <TechIcon icon={"devicon-css3-plain"} tech="css" toggleFilter={toggleFilter} isSmall={false} />
              <TechIcon icon={"devicon-html5-plain"} tech="html" toggleFilter={toggleFilter} isSmall={false} />
              <TechIcon icon={"devicon-javascript-plain"} tech="javascript" toggleFilter={toggleFilter} isSmall={false} />
              <TechIcon icon={"devicon-jquery-plain"} tech="jquery" toggleFilter={toggleFilter} isSmall={false} />
              <TechIcon icon={"devicon-react-original"} tech="react" toggleFilter={toggleFilter} isSmall={false}/>
              <TechIcon icon={"devicon-sass-original"} tech="sass" toggleFilter={toggleFilter} isSmall={false}/>
              <TechIcon icon={"devicon-sourcetree-original"} tech="sourcetree" toggleFilter={toggleFilter} isSmall={false}/>
              <TechIcon icon={"devicon-typescript-plain"} tech="typescript" toggleFilter={toggleFilter} isSmall={false} />
            </div>
          </div>
        </div>
        <div className="row">
          {!hasUpdated && projectsList.map((proj, i) => (
            <ProjectCard 
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
