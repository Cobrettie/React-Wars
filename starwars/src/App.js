import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Nav from './components/Nav/Nav';
import CharacterInfo from './components/CharacterInfo/CharacterInfo';

const App = () => {
  const [characters, setCharacters] = useState([]);

  // test adding pages
  const [pageNumber, setPageNumber] = useState(1);
  const [pagePrefix, setPagePrefix] = useState(``);

  const incrementPageNumber = () => {
    return (
      setPageNumber(pageNumber + 1),
      setPagePrefix(`?page=${pageNumber + 1}`)
    )
}

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/${pagePrefix}`)
      .then(response => {
        console.log(response);
        const charactersArray = response.data.results;
        setCharacters(charactersArray);
      })
  }, [])

  return (
    <div>
      <Nav />
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
      <button onClick={incrementPageNumber}>click me</button>
    </div>
  )
}

export default App;
