import React from 'react';
import styled from 'styled-components';

const CharacterCard = styled.div`
  width: 30%;
  margin: 40px 20px 20px;
  border: 1px solid #373737;
  background-color: #fafafa;
  border-radius: 5px;
`;

const CharacterName = styled.h2`
  border-bottom: 1px solid #373737;
  width: 40%;
  margin: 20px auto 30px;
  color: #373737;
  font-size: 26px;
`;

const CharacterDetails = styled.p`
  color: #373737;
  font-size: 18px;
`;

const CharacterInfo = (props) => {
  console.log(props)
  return (
    // <MainContainerDiv>
      <CharacterCard>
        <CharacterName>{props.name}</CharacterName>
        <CharacterDetails>Birth Year: {props.birth_year}</CharacterDetails>
        <CharacterDetails>Height: {props.height}cm</CharacterDetails>
        <CharacterDetails>Mass: {props.mass}kg</CharacterDetails>
        <CharacterDetails>Hair Color: {props.hair_color}</CharacterDetails>
      </CharacterCard>
    // </MainContainerDiv>
  )
}

export default CharacterInfo;