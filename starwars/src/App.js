import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import CharacterInfo from './components/CharacterInfo/CharacterInfo';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        console.log(response);
        const charactersArray = response.data.results;
        setCharacters(charactersArray);
      })
  }, [])

  return (
    <div>
      {characters.map(character => {
        return (
          <CharacterInfo 
            name={character.name}
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
