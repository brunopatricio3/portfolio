import React from 'react';
import '../../../styles/main.scss';

function Pagination(props) {

  return (
      <div className="pagination margin-bottom-sm" onClick={() => props.onSelect()}>
        {/* <p className="text-sz-xxl">{props.pageName}</p> */}
      </div>
  );
}

export default Pagination;
