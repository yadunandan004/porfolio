import React, { Component } from 'react';
import logo from './logo.svg';
import Banner from './components/banner';
import About from './components/about';
import Skills from './components/skills';
import Edu from './components/edu';
import Projects from './components/projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <About />
        <Skills />
        <Edu />
        <Projects />
      </div>
    );
  }
}

export default App;
