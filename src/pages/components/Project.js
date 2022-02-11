import React, { useEffect } from 'react';
import '../../styles/technologies.scss';
import TechIcon from "../components/TechIcon";

function Project(props) {

	useEffect(() => {
    // Update the document title using the browser API
    checkFilters();
  }, [props.selectedTechList]);

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
			case "css": return <TechIcon key={i} icon={"devicon-css3-plain"} isSmall />;
			case "html": return <TechIcon key={i} icon={"devicon-html5-plain"} isSmall />;
			case "jquery": return <TechIcon key={i} icon={"devicon-jquery-plain"} isSmall />;
			case "react": return <TechIcon key={i} icon={"devicon-react-original"} isSmall />;
			case "sass": return <TechIcon key={i} icon={"devicon-sass-original"} isSmall />;
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

export default Project;

