import React, { useState } from 'react';
import Home from './subpages/Home'
import '../styles/main.scss';

function Application() {
  const [selectedPage, setSelectedPage] = useState("Home");

  return (
    <div className="app-wrapper">
          <Home /> 
    </div>
  );
}

export default Application;