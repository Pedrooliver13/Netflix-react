import React from 'react';
import Button from '../Form/Button/Button';
import { IMAGE_GET } from '../../Api/Api';
import {
  FeaturedBackground,
  FeaturedWrapper,
  FeaturedTitle,
  FeaturedInfo,
  FeaturedDescription,
  FeaturedButtons,
  FeaturedGenres
} from './style';

export const FeaturedMovie = ({ item }) => {
  const {
    backdrop_path,
    name,
    vote_average,
    overview,
    number_of_seasons,
    genres,
    first_air_date,
  } = item;

  const genresReduce = genres.reduce((acc, {name}) => {
    return [...acc, name]
  }, []);
  const genresRow = genresReduce.join(', ');

  let descr = overview;
  if (descr.length > 200) {
    descr = descr.substring(0, 200) + '...';
  }

  const date = new Date(first_air_date).getFullYear();

  return (
    <FeaturedBackground
      image={backdrop_path}
      style={{ backgroundImage: `url(${IMAGE_GET.url}${backdrop_path})` }}
    >
      <FeaturedWrapper>
        <FeaturedTitle>{name}</FeaturedTitle>

        <FeaturedInfo>
          <p className="featured__average">{vote_average} pontos</p>
          <p>{date}</p>
          <p>{number_of_seasons} Temporadas</p>
        </FeaturedInfo>

        <FeaturedDescription>{descr}</FeaturedDescription>

        <FeaturedButtons>
          <Button color="primary">► Assistir</Button>
          <Button>+ Minha Lista</Button>
        </FeaturedButtons>

        <FeaturedGenres><span>Gêneros:</span> {genresRow}</FeaturedGenres>
      </FeaturedWrapper>
    </FeaturedBackground>
  );
};

export default FeaturedMovie;
