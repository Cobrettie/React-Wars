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

const NavigationLinksContainer = styled.div`
  margin: 0 3% 0 0;
`;

const NavigationLink = styled(Link)`
  color: #373737;
  text-decoration: none;
  padding: 0 20px;

  &:nth-child(3) {
    padding-right: 0px; 
  }
`;

const Nav = () => {
  return (
    <NavContainerDiv>
      <NavHeader>StarWars Information</NavHeader>
      <NavigationLinksContainer>
        <NavigationLink to='/'>Home</NavigationLink>
        <NavigationLink to='/characterlist'>Characters</NavigationLink>
        <NavigationLink to='/planetlist'>Planet List</NavigationLink>
      </NavigationLinksContainer>
    </NavContainerDiv>
  )
}

export default Nav;