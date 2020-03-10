import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import CharacterList from './components/CharacterList/CharacterList';
import PlanetList from './components/PlanetList/PlanetList';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div>
      <Nav />
      
      <Route exact path='/' component={Home} />
      <Route path='/characterlist' component={CharacterList} />
      <Route path='/planetlist' component={PlanetList} />
      
      {/* <Footer /> */}
    </div>
  )
}

export default App;
