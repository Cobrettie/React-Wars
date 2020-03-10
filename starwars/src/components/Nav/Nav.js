import React from 'react';
import styled from 'styled-components';

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
    </NavContainerDiv>
  )
}

export default Nav;