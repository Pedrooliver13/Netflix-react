import React from 'react';
import { SlideWrapper, SlideTitle } from './style';
import Slide from './Slide/Slide';

const MoviesRow = ({ title, items }) => {
  return (
    <SlideWrapper className="container">
      <SlideTitle>{title}</SlideTitle>
      {items && <Slide items={items}/>}
    </SlideWrapper>
  );
};

export default MoviesRow;
