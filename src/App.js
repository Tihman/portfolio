import React from 'react';
import './App.css';
// import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      {/* <About /> */}
      <Experience />
      <Portfolio />

    </div>
  );
}

export default App;
