import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import CharacterInfo from '../CharacterInfo/CharacterInfo';
import ChangePageButtons from '../ChangePageButtons/ChangePageButtons';

const CharacterCardsPageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
`;

const api = `https://swapi.co/api/people/`;
const pagePrefix = `?page=`;

const CharacterList = () => {
  const [characters, setCharacters] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const incrementPageNumber = () => {
    return setPageNumber(pageNumber + 1);
  }
  const decrementPageNumber = () => {
    return (
      setPageNumber(pageNumber - 1)
    );
  }

  useEffect(() => {
    axios
      .get(`${api}${pagePrefix}${pageNumber}`)
      .then(response => {
        console.log(response);
        const allCharactersArray = response.data.results;
        setCharacters(allCharactersArray);
      })
      .catch(err => console.log(err));
  }, [pageNumber])

  if (pageNumber === 0 || pageNumber > 9) setPageNumber(1);
  if (!characters) return <h3>Loading...</h3>;

  return (
    <div>
      <CharacterCardsPageContainer>
        {characters.map((item, index) => {
        return (
          // console.log(index),
          <CharacterInfo
            key={index} 
            name={item.name}
            birth_year={item.birth_year}
            height={item.height}
            mass={item.mass}
            hair_color={item.hair_color} 
          />
        )
      })}
      </CharacterCardsPageContainer>
      <ChangePageButtons 
        incrementPageNumber={incrementPageNumber} 
        decrementPageNumber={decrementPageNumber}
      />
    </div>
  )
}

export default CharacterList;