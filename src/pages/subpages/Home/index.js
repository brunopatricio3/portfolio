import React, { useState } from 'react';
import '../../../styles/main.scss';
import ReactPageScroller from 'react-page-scroller';
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
