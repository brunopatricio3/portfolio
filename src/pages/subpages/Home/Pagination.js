import React from 'react';
import '../../../styles/main.scss';
import Page from './Page';

function Pagination() {
  const pages = [
    {
      pageid: "welcome", 
      pageName: "Welcome"
    },
    {
      pageid: "aboutme", 
      pageName: "About me"
    },
    {
      pageid: "projects", 
      pageName: "Projects"
    }
  ];

  function handlePageChange (pageId){
    document.getElementById(pageId).scrollIntoView();
  };

  function getPagesNumbers(){
    const pageNumbers = [];

    for (let i = 0; i < 3; i++) {
      pageNumbers.push(
        <Page key={i} onSelect={() => handlePageChange(pages[i].pageid)} pageName={pages[i].pageName} />,
      );
    }

    return [...pageNumbers];
  };

  return (
    <div className="pagination-container">
      {getPagesNumbers()}
    </div>
  );
}

export default Pagination;
