import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Nav from './components/Nav/Nav';
import CharacterInfo from './components/CharacterInfo/CharacterInfo';

const App = () => {
  const [characters, setCharacters] = useState([]);

  // cycle through API pages
  const pagePrefix = `?page=`;
  const [pageNumber, setPageNumber] = useState(1);

  const incrementPageNumber = () => {
    return setPageNumber(pageNumber + 1);
  }

  const decrementPageNumber = () => {
    return setPageNumber(pageNumber - 1);
  }

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/${pagePrefix}${pageNumber}`)
      .then(response => {
        console.log(response);
        console.log(pageNumber)
        const charactersArray = response.data.results;
        setCharacters(charactersArray);
      })
  }, [pageNumber])
  // [pageNumber] in the dependancy array is telling the useEffect hook to run anytime pageNumber changes

  return (
    <div>
      <Nav />
      <button onClick={incrementPageNumber}>Next Page</button>
      <button onClick={decrementPageNumber}>Previous Page</button>
      {characters.map(character => {
        return (
          <CharacterInfo 
            name={character.name}
            birth_year={character.birth_year}
            height={character.height}
            mass={character.mass}
            hair_color={character.hair_color} 
          />
        )
      })}
    </div>
  )
}

export default App;
