import React from 'react';
import '../../styles/main.scss';
import SectionWelcome from './SectionWelcome';
import SectionAbout from './SectionAbout';
import SectionTechnologies from './SectionTechnologies';
import Pagination from "../../components/Pagination";

function Home() {
  return (
    <>
      <SectionWelcome />  
      <SectionAbout />  
      <SectionTechnologies />  
      <Pagination />
    </>
  );
}

export default Home;  
