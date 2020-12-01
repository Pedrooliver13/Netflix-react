import React from 'react';
import FeaturedMovie from '../Components/FeaturedMovie/FeaturedMovie';
import MoviesRow from '../Components/MoviesRow/MoviesRow';
import Loading from '../Components/Loading/Loading';
import { listResults, MOVIE_GET } from '../Api/Api';

const Home = () => {
  const [moviesList, setMoviesList] = React.useState([]);
  const [featuredItem, setFeaturedItem] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    function getRandomNumber(totalLength) {
      const randomNumber = Math.floor(Math.random() * (totalLength - 1));
      return randomNumber;
    }

    async function fetchMovieFeatured(id) {
      const { url } = MOVIE_GET(id);
      const results = await fetch(url);
      const resultsJson = await results.json();
      setFeaturedItem(resultsJson);
    }

    async function filterList(listArray) {
      const filterList = listArray.filter(({ slug }) => slug === 'tv');
      const categoryResults = filterList[0].items.results;
      return categoryResults;
    }

    async function getList() {
      const resultsList = await listResults.getHomeList();
      return resultsList;
    }

    function getFeaturedItem(results) {
      let randomNumber = getRandomNumber(results.length);
      let featuredItem = results[randomNumber];

      if (!featuredItem.backdrop_path || !featuredItem.overview) {
        randomNumber = getRandomNumber(results.length);
        featuredItem = results[randomNumber];
      }

      return featuredItem;
    }

    async function onStart() {
      setLoading(true);
      const list = await getList();
      const categoryResults = await filterList(list);
      const featuredItem = getFeaturedItem(categoryResults);

      await fetchMovieFeatured(featuredItem.id);
      setMoviesList(list);
      setTimeout(() => setLoading(false), 1260);
    }
    
    onStart();
  }, []);

  return (
    <>
      {featuredItem && featuredItem.backdrop_path && (
        <FeaturedMovie item={featuredItem} />
      )}

      {moviesList.map((item) => (
        <MoviesRow key={item.title} {...item} />
      ))}

      {loading && <Loading />}
    </>
  );
};

export default Home;
