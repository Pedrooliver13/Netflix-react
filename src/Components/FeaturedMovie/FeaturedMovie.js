import React from 'react';
import {
  FeaturedBackground,
  FeaturedWrapper,
  FeaturedTitle,
  FeaturedDescription,
} from './style';

export const FeaturedMovie = ({ item }) => {
  const {
    backdrop_path,
    title,
    vote_average,
    overview,
    genre_ids,
    release_dat,
  } = item;

  let descr = overview;
  if (descr.length > 200) {
    descr = descr.substring(0, 200) + '...';
  }

  console.log(title, vote_average, overview, release_dat);

  return (
    <FeaturedBackground
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
      }}
    >
      <FeaturedWrapper>
        <FeaturedTitle>{title}</FeaturedTitle>
        {/* <FeaturedInfo>
          <p></p>
        </FeaturedInfo> */}
        <FeaturedDescription>{descr}</FeaturedDescription>
      </FeaturedWrapper>
    </FeaturedBackground>
  );
};

export default React.memo(FeaturedMovie);
