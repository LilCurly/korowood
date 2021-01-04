//import logo from './logo.svg';
import './App.css';

import { React, Component } from 'react'

import Header from './Header'
import HeaderHamburgerNavigation from './HeaderHamburgerNavigation';

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
        <Header isHamburgerOpen={this.state.isHamburgerOpen} hamburgerHandler={this.hamburgerHandler} />
        <HeaderHamburgerNavigation isHamburgerOpen={this.state.isHamburgerOpen} hamburgerHandler={this.hamburgerHandler} />
      </div>
    );
  }
}

export default App;
