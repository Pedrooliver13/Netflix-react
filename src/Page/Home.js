import React from 'react';
import FeaturedMovie from '../Components/FeaturedMovie/FeaturedMovie';
import MoviesRow from '../Components/MoviesRow/MoviesRow';
import Loading from '../Components/Loading/Loading';
import { listResults } from '../Api/Api';

const Home = () => {
  const [moviesList, setMoviesList] = React.useState([]);
  const [feturedItem, setFeturedItem] = React.useState(null);

  React.useEffect(() => {
    async function getList() {
      const resultsList = await listResults.getHomeList();

      function getRandomNumber(totalLength) {
        const randomNumber = Math.floor(Math.random() * (totalLength - 1));
        return randomNumber;
      }

      const filterResults = resultsList.filter(
        ({ slug }) => slug === 'originals',
      );
      const categoryResults = filterResults[0].items.results;
      let randomNumber = getRandomNumber(categoryResults.length);
      let feturedItem = categoryResults[randomNumber];

      if (!feturedItem.backdrop_path) {
        randomNumber = getRandomNumber(categoryResults.length);
        feturedItem = categoryResults[randomNumber];
      }

      console.log(feturedItem);
      console.log(randomNumber);

      setFeturedItem(feturedItem);
      setMoviesList(resultsList);
    }

    getList();
  }, []);

  return (
    <>
      {feturedItem && feturedItem.backdrop_path && (
        <FeaturedMovie item={feturedItem} />
      )}

      {moviesList.map((item) => (
        <MoviesRow key={item.title} {...item} />
      ))}

      {!moviesList.length && <Loading />}
    </>
  );
};

export default Home;
