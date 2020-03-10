import React from 'react';
import styled from 'styled-components';

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 30%;
  margin: 0 auto;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 5px;
  margin: 40px auto 10px;
  background-color: #fafafa;
  color: #373737;

  :hover {
    color: #fafafa;
    background-color: #373737
  }
`;

const ChangePageButtons = props => {
  // console.log(props);
  return (
    <ButtonsContainer>
      <div> 
        <Button onClick={props.incrementPageNumber}>Next Page</Button>
      </div>
      <div>
        <Button onClick={props.decrementPageNumber}>Previous Page</Button>
      </div>
    </ButtonsContainer>
  )
}

export default ChangePageButtons;