import React from 'react';
import { useParams } from 'react-router-dom';
import {useFetch} from '../../Hooks/useFetch';
import { MOVIE_GET } from '../../Api/Api';
import Loading from '../../Components/Loading/Loading';

const ShowMovie = () => {
  const params = useParams();
  const { url } = MOVIE_GET(params.id);
  const { request, data, loading } = useFetch();
  
  React.useEffect(() => {
    request(url);
  }, [request, url]);

  console.log(data)
  
  return (
    <>
      <h1>hello world</h1>
      {loading && <Loading />}
    </>
  )
}

export default ShowMovie;