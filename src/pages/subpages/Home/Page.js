import React from 'react';
import '../../../styles/main.scss';

function Page(props) {
  
  
  return (
      <div className="pagination" onClick={() => props.onSelect()}>
        {/* <p className="text-sz-xxl page">{props.pageName}</p> */}
      </div>
  );
}

export default Page;
