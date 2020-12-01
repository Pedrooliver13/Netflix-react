import React from 'react';
import { SlideUl, SlideItem } from '../style';

const Slide = ({ items }) => {
  return (
    <SlideUl>
      {items.results.map(({ poster_path, id, name }) => (
        <SlideItem key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={name}
          />
        </SlideItem>
      ))}
    </SlideUl>
  );
};

export default Slide;
