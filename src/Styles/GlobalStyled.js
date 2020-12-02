import { createGlobalStyle } from 'styled-components';
import Reset from './Reset';
import Container from './Container';

export const GlobalStyled = createGlobalStyle`
  ${Reset};
  
  body {
    font-family: ${({theme}) => theme.font1};
    background-color: ${({theme}) => theme.color1};
    color: ${({theme}) => theme.color3};
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  img {
    display: block;
    max-width: 100%;
    width: 100%;
  }
  
  ${Container};
`;