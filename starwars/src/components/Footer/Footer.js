import React from 'react';
import styled from 'styled-components';

const FooterDivContainer = styled.div`
  text-align: center;
  background-color: #fafafa;
  margin: 60px auto 0;
`;

const FooterInfo = styled.p`
  color: #373737;
  margin: 0 auto;
  padding: 20px 0;
`;

const Footer = () => {
  return (
    <FooterDivContainer>
      <FooterInfo>Cobrettie Garner</FooterInfo>
    </FooterDivContainer>
  )
}

export default Footer;