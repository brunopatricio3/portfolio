import React, { useEffect } from 'react';
import '../../styles/technologies.scss';
import ProjectTechIcon from "../ProjectTechIcon";

function ProjectCard(props) {
	
	function checkFilters(){
		if(props.selectedTechList.length === 0 ){
			return false;
		}

		let nrTechsSelected = 0;

		for(let i = 0; i < props.projectTechnologies.length; i++) {
			if(props.selectedTechList.includes(props.projectTechnologies[i])){
				nrTechsSelected++;
			}
		}

		if(nrTechsSelected === props.selectedTechList.length){
			return false;
		} else {
			return true;		
		}
	}
  
	function renderTechnology(tech, i){
		switch(tech){
			case "bootstrap": return <ProjectTechIcon key={i} icon={"devicon-bootstrap-plain"} tech="bootstrap" isSmall selectedTechList={props.selectedTechList} />;
			case "css": return <ProjectTechIcon key={i} icon={"devicon-css3-plain"} tech="css" isSmall selectedTechList={props.selectedTechList} />;
			case "html": return <ProjectTechIcon key={i} icon={"devicon-html5-plain"} tech="html" isSmall selectedTechList={props.selectedTechList} />;
			case "javascript": return <ProjectTechIcon key={i} icon={"devicon-javascript-plain"} tech="javascript" isSmall selectedTechList={props.selectedTechList} />;
			case "jquery": return <ProjectTechIcon key={i} icon={"devicon-jquery-plain"} tech="jquery" isSmall selectedTechList={props.selectedTechList} />;
			case "react": return <ProjectTechIcon key={i} icon={"devicon-react-original"} tech="react" isSmall selectedTechList={props.selectedTechList} />;
			case "sass": return <ProjectTechIcon key={i} icon={"devicon-sass-original"} tech="sass" isSmall selectedTechList={props.selectedTechList} />;
			case "sourcetree": return <ProjectTechIcon key={i} icon={"devicon-sourcetree-original"} tech="sourcetree" isSmall selectedTechList={props.selectedTechList} />;
			case "typescript": return <ProjectTechIcon key={i} icon={"devicon-typescript-original"} tech="typescript" isSmall selectedTechList={props.selectedTechList} />;
			default: return;
		}
	}

  	return (
		<div className={`col-sm-4 ${checkFilters() ? "display-none" : ""}`}>
			<div className="project-wrapper margin-bottom-md">
				<div className="project-info">
				<p><span>{props.projectName} | </span> <span>{props.projectDuration}</span></p>
					{props.projectTechnologies.map((tech, i) =>
						renderTechnology(tech, i)
					)}
				</div>
			</div>
		</div>
  	);
}

export default ProjectCard;

