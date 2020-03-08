import React from 'react';
import styled from 'styled-components';

const ChangePageButtons = props => {
  // console.log(props);
  return (
    <div>
      <div> 
        <button onClick={props.incrementPageNumber}>Next Page</button>
      </div>
      <div>
        <button onClick={props.decrementPageNumber}>Previous Page</button>
      </div>
    </div>
  )
}

export default ChangePageButtons;