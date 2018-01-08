import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Banner from './components/banner';
import { AboutContainer, SkillsContainer ,EduContainer, ProjectsContainer} from './container';


import Footer from './components/footer';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Banner />
          <AboutContainer />
          <SkillsContainer />
          <EduContainer />
          <ProjectsContainer />
          <Footer />
          
        </div>
      </Provider>
    );
  }
}

export default App;
