import React, { useState } from 'react';
import '../../../styles/main.scss';
import ReactPageScroller from 'react-page-scroller';
import SectionWelcome from './SectionWelcome';
import SectionAbout from './SectionAbout';
import SectionTechnologies from './SectionTechnologies';
import Pagination from "./Pagination";

function Home() {

  const [currentPage, setCurrentPage] = useState(null);
  const pageNames = ["Welcome", "About me", "Projects"];

  function handlePageChange (number){
    setCurrentPage(number);
  };

  function getPagesNumbers(){
    const pageNumbers = [];

    for (let i = 0; i < 3; i++) {
      pageNumbers.push(
        <Pagination key={i} eventKey={i - 1} onSelect={() => handlePageChange(i)} pageName={pageNames[i]}></Pagination>,
      );
    }

    return [...pageNumbers];
  };

  // const pagesNumbers = getPagesNumbers();

  return (
    <>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        customPageNumber={currentPage}
      >     
        <SectionWelcome  />  
        <SectionAbout pagination={getPagesNumbers()} />  
        <SectionTechnologies />  
      </ReactPageScroller>
    </>
  );
}

export default Home;
