import React from 'react';

const CharacterInfo = (props) => {
  console.log(props)
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Height: {props.height}</p>
      <p>Mass: {props.mass}</p>
      <p>Hair Color:{props.hair_color}</p>
    </div>
  )
}

export default CharacterInfo;