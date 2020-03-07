import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Nav from './components/Nav/Nav';
import CharacterInfo from './components/CharacterInfo/CharacterInfo';
import ChangePageButtons from './components/ChangePageButtons/ChangePageButtons';
import Footer from './components/Footer/Footer';

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
        console.log(response);
        const charactersArray = response.data.results;
        setCharacters(charactersArray);
      })
      .catch(err => console.log(err));
  }, [pageNumber])
  // [pageNumber] in the dependancy array is telling the useEffect hook to run anytime pageNumber changes

  if (!characters) return <h3>Loading...</h3>

  if (pageNumber === 0) return setPageNumber(1);

  console.log(pageNumber);

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
      <ChangePageButtons 
        incrementPageNumber={incrementPageNumber} 
        decrementPageNumber={decrementPageNumber}
      />
      <Footer />
    </div>
  )
}

export default App;
