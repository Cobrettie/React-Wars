import React from 'react';
import styled from 'styled-components';

const MainContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
  text-align: center;
`;

const CharacterCard = styled.div`
  width: 30%;
  margin: 30px 0 10px;
  border: 1px solid #373737;
  background-color: #fafafa;
`;

const CharacterName = styled.h2`

`;

const CharacterInfo = (props) => {
  console.log(props)
  return (
    <MainContainerDiv>
      <CharacterCard>
        <h2>{props.name}</h2>
        <p>Height: {props.height}cm</p>
        <p>Mass: {props.mass}kg</p>
        <p>Hair Color: {props.hair_color}</p>
      </CharacterCard>
    </MainContainerDiv>
  )
}

export default CharacterInfo;