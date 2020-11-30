import React from 'react';
import { SlideWrapper, SlideTitle, SlideUl, SlideItem } from './style';

const MoviesRow = ({ title, items }) => {
  return (
    <SlideWrapper className="container">
      <SlideTitle>{title}</SlideTitle>

      <SlideUl>
        {items &&
          items.results.map(({ poster_path, id }) => (
            <SlideItem key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt="Filmes"
              />
            </SlideItem>
          ))}
      </SlideUl>
    </SlideWrapper>
  );
};

export default MoviesRow;
