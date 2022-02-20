import React from 'react';
import '../../../styles/main.scss';

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
        <div className="d-flex flex-row-reverse">
          <div className="pagination-icon" onClick={() => handlePageChange(pages[i].pageid)} />
          <span className='pagination-text mx-1'>{pages[i].pageName}</span>
        </div>
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
