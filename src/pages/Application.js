import React, { useState } from 'react';
import Home from './subpages/Home'
import '../styles/main.scss';


function Application() {
  const [selectedPage, setSelectedPage] = useState("Home");

  return (
    <div className="app-wrapper">
      <div className="main-wrapper">
          <Home who="Bruno"/> 
      </div>
    </div>
  );
}

export default Application;