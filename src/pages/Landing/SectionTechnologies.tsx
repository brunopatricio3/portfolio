import React, {useState} from 'react';
import '../../styles/main.scss';
import { useTranslation } from 'react-i18next';
import TechIcon from '../../components/TechIcon';
import ProjectCard from '../../components/ProjectCard';
import projectsList from '../../assets/copy/projects.json';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

// Modal.setAppElement('#yourAppElement');


function SectionTechnologies() {

  const [selectedTechList, setSelectedTechList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [hasUpdated, setHasUpdated] = useState(false);
  const { t, i18n } = useTranslation();
  let subtitle;

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

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function openModal() {
    console.log("ASDASD")
    setIsModalOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsModalOpen(false);
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
        <div className='row'>
        <div className="col-12 margin-bottom-md">
            <p className="main-text">
              {t<string>('projects.description')}            
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm text-center margin-bottom-md">
            <div>
              <TechIcon icon={"devicon-bootstrap-plain"} tech="bootstrap" properTechName='Bootstrap' toggleFilter={toggleFilter} isSmall={false} />
              <TechIcon icon={"devicon-css3-plain"} tech="css" properTechName='CSS3' toggleFilter={toggleFilter} isSmall={false} />
              <TechIcon icon={"devicon-html5-plain"} tech="html" properTechName='HTML5' toggleFilter={toggleFilter} isSmall={false} />
              <TechIcon icon={"devicon-javascript-plain"} tech="javascript" properTechName='JavaScript' toggleFilter={toggleFilter} isSmall={false} />
              <TechIcon icon={"devicon-jquery-plain"} tech="jquery" properTechName='jQuery' toggleFilter={toggleFilter} isSmall={false} />
              <TechIcon icon={"devicon-react-original"} tech="react" properTechName='React' toggleFilter={toggleFilter} isSmall={false}/>
              <TechIcon icon={"devicon-sass-original"} tech="sass" properTechName='Sass' toggleFilter={toggleFilter} isSmall={false}/>
              <TechIcon icon={"devicon-sourcetree-original"} tech="sourcetree" properTechName='Source Tree' toggleFilter={toggleFilter} isSmall={false}/>
              <TechIcon icon={"devicon-typescript-plain"} tech="typescript" properTechName='TypeScript' toggleFilter={toggleFilter} isSmall={false} />
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
              openModal={openModal}
            />
          ))}
        </div>
      </div> 
      <Modal
        isOpen={isModalOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal> 
    </div>  
  );
}

export default SectionTechnologies;
