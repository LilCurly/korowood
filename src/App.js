//import logo from './logo.svg';
import './App.scss';

import { React, Component } from 'react'

import Header from './Header'
import HeaderHamburgerNavigation from './HeaderHamburgerNavigation'
import AboutUsSection from './AboutUsSection'
import CommitmentSection from './CommitmentSection'

class App extends Component {
  constructor() {
    super();

    this.state = {
      isHamburgerOpen: false
    };
  }

  hamburgerHandler = () => {
    this.setState({
      isHamburgerOpen: !this.state.isHamburgerOpen
    });
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <Header isHamburgerOpen={this.state.isHamburgerOpen} hamburgerHandler={this.hamburgerHandler} />
          <HeaderHamburgerNavigation isHamburgerOpen={this.state.isHamburgerOpen} hamburgerHandler={this.hamburgerHandler} />
        </div>
        <div className="Body">
          <AboutUsSection />
          <CommitmentSection />
        </div>
      </div>
    );
  }
}

export default App;
