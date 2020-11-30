import styled from 'styled-components';
import { MD } from '../../Styles/Breakpoints';

export const FeaturedBackground = styled.section`
  position: relative;
  min-height: 100vh;
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    min-height: inherit;
    height: inherit;
    background: linear-gradient(to right, #050404 30%, transparent 70%);
    padding-bottom: 150px;
    padding-top: 56%;
    left: 0;
    z-index: -1;

    @media(max-width: ${MD}) {
      min-height: 80vh;
      background: none;
    }
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    background: linear-gradient(to top, #050404 20%, transparent);
    width: 100%;
    height: 40px;
    bottom: 0;
    z-index: -1;
  }
`;

export const FeaturedWrapper = styled.div`
  max-width: 750px; 
  padding-top: 10rem;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FeaturedTitle = styled.h1`
  font-weight: 800;
  font-size: 2.2rem;
  line-height: 2;

  @media (max-width: ${MD}) {
    font-size: 1rem;
  }
`;

export const FeaturedDescription = styled.p`
  max-width: 65%;

  color: ${({theme}) => theme.color6};
  font-size: 1.2rem;
  line-height: 1;
`;
