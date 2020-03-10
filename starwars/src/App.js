import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import CharacterList from './components/CharacterList/CharacterList';
import PlanetList from './components/PlanetList/PlanetList';



const App = () => {
  return (
    <div>
      <Nav />

      <Link to='/characterlist'>Character List</Link>
      <Link to='/planetlist'>Planet List</Link>
      
      <Route path='/characterlist' component={CharacterList} />
      <Route path='/planetlist' component={PlanetList} />
      {/* <Footer /> */}
    </div>
  )
}

export default App;
