import React from 'react';
import styled from 'styled-components';

const HomeMainContentContainer = styled.div`
  text-align: center;
  border: 2px solid #373737;
  border-radius: 5px;
  width: 60%;
  margin: 80px auto 40px;
  background-color: #fafafa;
`;

const HomeMainHeader = styled.h2`
  color: #373737;
  font-size: 32px;
`;

const HomeMainParagraph = styled.p`
  font-size: 18px;
  color: #373737;
`;

const Home = () => {
  return (
    <HomeMainContentContainer>
      <HomeMainHeader>Welcome to an exploration of a Star Wars API!</HomeMainHeader>
      <HomeMainParagraph>As you navigate your way through these web pages, you will find some pretty neat information. I hope you enjoy!</HomeMainParagraph>
    </HomeMainContentContainer>
  )
}

export default Home;