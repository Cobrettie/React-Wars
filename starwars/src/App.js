import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import styled from 'styled-components';

import Nav from './components/Nav/Nav';
import CharacterInfo from './components/CharacterInfo/CharacterInfo';
import ChangePageButtons from './components/ChangePageButtons/ChangePageButtons';
import Footer from './components/Footer/Footer';
import PlanetList from './components/PlanetList/PlanetList';

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

const App = () => {
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
        // console.log(response);
        const allCharactersArray = response.data.results;
        setCharacters(allCharactersArray);
      })
      .catch(err => console.log(err));
  }, [pageNumber])

  if (pageNumber === 0 || pageNumber > 9) setPageNumber(1);
  if (!characters) return <h3>Loading...</h3>;

  return (
    <div>
      <Router>
        <Route path='/characters' component={CharacterInfo} />
        <Route path='/planetlist' component={PlanetList} />
      </Router>
      
      <Nav />
      <CharacterCardsPageContainer>
        {characters.map(item => {
        return (
          <CharacterInfo 
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

      <Footer />
    </div>
  )
}

export default App;
