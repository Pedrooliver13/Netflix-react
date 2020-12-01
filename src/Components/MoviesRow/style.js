import styled from 'styled-components';
import {MD} from '../../Styles/Breakpoints';

export const SlideWrapper = styled.section`
  position:relative;
  overflow: hidden;
  margin-top: -100px;
  margin-bottom: 120px;
  /* z-index: 99999; */
`;

export const SlideTitle = styled.h1`
  font-weight: 600;
  font-size: 1.15rem;

  @media (max-width: ${MD}) {
    font-size: 1rem;
  }
`;

export const SlideUl = styled.ul`
  display: flex;
  align-items: center;
`;

export const SlideItem = styled.li`
  flex-shrink: 0;
  overflow: hidden;
  max-width: 150px;
  width: 100%;
 
  border-radius: 5px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-right: 0.8rem;
  cursor: pointer;
  transition: .5s ease;

  &:hover, &:focus {
    transform: scale(1.1);
  } 

  @media (max-width: ${MD}) {
    max-width: 100px;
    width: 100%;
  }
`;
