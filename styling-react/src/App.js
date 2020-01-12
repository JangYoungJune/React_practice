import React from 'react';
import logo from './logo.svg';
import './App.css';
import SassComponent from './SassComponent/SassComponent';
import CSSModule from './CssModule/CSSModule';

function App() {
  // default & css selector
  // return (
  //   <div className="App">
  //     <header>
  //       <img src={logo} className="logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  // sass 처리
  // return (
  //   <div>
  //     <SassComponent></SassComponent>
  //   </div>
  // );

  // css-module 처리
  return (
    <div>
      <CSSModule />
    </div>
  );
}

export default App;
