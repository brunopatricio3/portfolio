import React from 'react';
import '../../styles/technologies.scss';
import TechIcon from "../components/TechIcon";

function Project(props) {
  
	function renderTechnology(tech){
		switch(tech){
			case "css": return <TechIcon key={tech.projectName} icon={"devicon-css3-plain"} isSmall/>;
			case "html": return <TechIcon key={tech.projectName} icon={"devicon-html5-plain"} isSmall/>;
			case "jquery": return <TechIcon key={tech.projectName} icon={"devicon-jquery-plain"} isSmall/>;
			case "react": return <TechIcon key={tech.projectName} icon={"devicon-react-original"} isSmall />;
			case "sass": return <TechIcon key={tech.projectName} icon={"devicon-sass-original"} isSmall />;
			default: return;
		}
		}

  return (
		<div className="col-sm-4">
			<div className="project-wrapper margin-bottom-md">
				<div className="project-info">
				<p><span>{props.projectName} | </span> <span>{props.projectDuration}</span></p>
					{props.projectTechnologies.map((tech) =>
						renderTechnology(tech)
					)}
				</div>
			</div>
		</div>
  );
}

export default Project;

