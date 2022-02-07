import React, { useState } from 'react';
import '../../../styles/main.scss';
import ReactPageScroller from 'react-page-scroller';
import SectionWelcome from './SectionWelcome';
import SectionAbout from './SectionAbout';
import SectionTechnologies from './SectionTechnologies';

function Home() {

  return (
    <ReactPageScroller
      // pageOnChange={this.handlePageChange}
      // onBeforePageScroll={this.handleBeforePageChange}
      // customPageNumber={this.state.currentPage}
    >     
      <SectionWelcome />  
      <SectionAbout />  
      <SectionTechnologies />  
    </ReactPageScroller>
  );
}

export default Home;
