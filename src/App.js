import React, { Component } from 'react';
import logo from './logo.svg';
import Banner from './components/banner';
import About from './components/about';
import Skills from './components/skills';
import Edu from './components/edu';
import Projects from './components/projects';
import Footer from './components/footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <About />
        <Skills />
        <Edu />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
