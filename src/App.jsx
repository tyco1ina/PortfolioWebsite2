// App.js
import React, { useState } from 'react';
import "./App.css";

import HomePage from './components/HomePage/HomePage'
import ExperiencePage from './components/ExperiencePage/ExperiencePage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';

document.body.style = 'background: rgb(38, 39, 48);';

const App = () => {

  const [page, setPage] = useState('HomePage');

  const getPage = () => {
    if (page === "HomePage") {
      return <HomePage/>
    } else if (page === "ExperiencePage") {
      return <ExperiencePage/>
    } else if (page === "ProjectsPage") {
      return <ProjectsPage/>
    }
  }

  return (
    <div className="app">
      <div className='decorative-header'></div>

      <div className='nav-bar'>
        <div className='nav-button'><p onClick={()=>setPage("HomePage")}>Home</p></div>
        <div className='nav-button'><p onClick={()=>setPage("ExperiencePage")}>Experience</p></div>
        <div className='nav-button'><p onClick={()=>setPage("ProjectsPage")}>Projects</p></div>
        <div className='nav-button' 
        id='nav-button-resume'
        onClick={()=>window.location.href = "https://drive.google.com/file/d/1RUNmcGTvKwmpNhtzsD3Bk-AiLFnC709r/view"}><p>Resume</p></div>
      </div>

      {getPage()}

    </div>
  );
};

export default App;

// redo