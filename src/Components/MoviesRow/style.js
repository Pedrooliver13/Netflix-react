import styled from 'styled-components';
import { MD } from '../../Styles/Breakpoints';

export const SlideWrapper = styled.section`
  position: relative;
  overflow: hidden;
  margin-top: -100px;
  margin-bottom: 120px;

  &:hover > div {
    opacity: 1;
  }
`;

export const SlideTitle = styled.h1`
  font-weight: 600;
  font-size: 1.15rem;

  @media (max-width: ${MD}) {
    font-size: 1rem;
  }
`;

export const SlideUl = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  transition: .5s ease;
`;

const SlideControl = `
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  height: 100%;
  width: 50px;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  pointer-events: painted;
  transition: opacity .5s ease;
`;

export const SlidePrev = styled.div`
  ${SlideControl};
  left: 0px;
`;

export const SlideNext = styled.div`
  ${SlideControl};
  right: 0px;
`;

export const SlideItem = styled.li`
  flex-shrink: 0;
  overflow: hidden;
  max-width: 150px;
  width: 100%;
  height: 100%;

  border-radius: 5px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-right: 0.8rem;
  cursor: pointer;
  transition: 0.5s ease;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  @media (max-width: ${MD}) {
    max-width: 100px;
    width: 100%;
  }
`;
