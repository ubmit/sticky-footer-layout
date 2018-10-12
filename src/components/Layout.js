import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100%;
`;

const Header = styled.div`
  background-color: whitesmoke;
  color: purple;
  padding: 20px;
  display: flex;
`;

const Contact = styled.div`
  margin-left: auto;
`;

const Footer = styled.div`
  background-color: whitesmoke;
  color: purple;
  padding: 20px;
  text-align: center;
`;

const Content = styled.div`
  padding: 20px;
  margin: auto;
  max-width: 800px;
`;

const Anchor = styled.a`
  transition: 100ms linear;
  opacity: 1;
  text-decoration: none;
  color: purple;

  :hover {
    opacity: 0.8; 
  }
`;

export default ({ children }) => (
  <Wrapper>
    <Header>
      Sticky footer layout with styled-components
      <Contact>
        <Anchor href="https://github.com/ubmit/sticky-footer-layout">
          GitHub Repo
        </Anchor>
      </Contact>
    </Header>
    <Content>{children}</Content>
    <Footer>
      Powered by <Anchor href="http://www.catipsum.com">Cat Ipsum</Anchor>
    </Footer>
  </Wrapper>
);
