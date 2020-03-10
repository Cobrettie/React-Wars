import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainerDiv = styled.div`
  border-bottom: 1px solid #373737;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavHeader = styled.h1`
  margin: 0 3%;
  padding: 20px 0;
  font-family: Roboto;
  color: #373737;
  align-self: flex-end;
`;

const NavigationLinks = styled.div`
  margin: 0 3% 0 0;
`;


const Nav = () => {
  return (
    <NavContainerDiv>
      <NavHeader>StarWars Information</NavHeader>
      <NavigationLinks>
        <Link to='/'>Home</Link>
        <Link to='/characterlist'>Character List</Link>
        <Link to='/planetlist'>Planet List</Link>
      </NavigationLinks>
    </NavContainerDiv>
  )
}

export default Nav;