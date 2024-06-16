import React from 'react';
import { Outlet } from "react-router-dom";
import reactLogo from './assets/react.svg'
import reactRouterLogo from './assets/react-router-logo.webp'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom';
import { AppContext } from "./context/AppContext";
import { useTheme } from './hooks';

const Dashboard = () => {
  const { themeId, toggleTheme } = useTheme()
  return (
    <AppContext.Provider value={{themeId,toggleTheme}}>
    <div className="layout">
      <div className="sidebar">
        <h2>React Apps</h2>
        <ul>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/imdb">IMDB</Link></li>
          <li><Link to="/rating">Rating</Link></li>
          <li><Link to="/webWorker">Web Worker</Link></li>
        </ul>
      </div>
      <div className='dashboard'>
        <div className='banner'>
          <div>
            <a href="https:vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https:react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <a href="https:reactrouter.com/en/main" target="_blank">
              <img src={reactRouterLogo} className="logo react" alt="React Router logo" />
            </a>
          </div>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </div>
    </AppContext.Provider>
  );
};

export default Dashboard
