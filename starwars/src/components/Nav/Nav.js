import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import CharacterList from '../CharacterList/CharacterList';
import PlanetList from '../PlanetList/PlanetList';

const NavContainerDiv = styled.div`
  border-bottom: 1px solid #373737;
  background-color: #fafafa;
`;

const NavHeader = styled.h1`
  margin: 0 3%;
  padding: 20px 0;
  font-family: Roboto;
  color: #373737;
`;



const Nav = () => {
  return (
    <NavContainerDiv>
      <NavHeader>StarWars Information</NavHeader>

      {/* <Link to='/characterlist'>Character List</Link>
      <Link to='/planetlist'>Planet List</Link>

      <Route path='/characterlist' component={CharacterList} />
      <Route path='/planetlist' component={PlanetList} /> */}

    </NavContainerDiv>
  )
}

export default Nav;