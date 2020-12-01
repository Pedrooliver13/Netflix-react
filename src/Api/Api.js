import basicFecth from '../Hooks/useFetch';
export const API_KEY = `a07e592732452c3835f07ddffbf00470`;
export const API_URL = `https://api.themoviedb.org/3`;
export const LANGUAGE = `pt-BR`;


// get image `https://image.tmdb.org/t/p/w300%${item.poster_path}`;
// get video.
// https://api.themoviedb.org/3/movie/550/videos?api_key=a07e592732452c3835f07ddffbf00470&language=en-US

export const MOVIE_GET = (id) => {
  return {
    url: `${API_URL}/tv/${id}?language=${LANGUAGE}&api_key=${API_KEY}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
};

export const IMAGE_GET = {
  url: `https://image.tmdb.org/t/p/original`,
};

export const GENRES_GET = {
  url: `${API_URL}genre/movie/list?api_key=${API_KEY}&language=${LANGUAGE}`,
  options: {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  },
};

export const MOVIES_ORIGINAL_GET = {
  title: 'Originais do Netflix',
  url: `${API_URL}/discover/movie/?with_network=213&language=${LANGUAGE}&api_key=${API_KEY}`,
  options: {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  },
};

export const TVMOVIES_GET = {
  title: 'TV filmes',
  url: `${API_URL}/discover/tv/?with_network=213&language=${LANGUAGE}&api_key=${API_KEY}`,
  options: {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  },
};

export const MOVIES_TRENDING_GET = {
  title: 'Recomendados para Você',
  url: `${API_URL}/trending/all/week?language=${LANGUAGE}&api_key=${API_KEY}`,
  options: {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  },
};

export const MOVIES_TOP_GET = {
  title: 'Em Alta',
  url: `${API_URL}/trending/all/week?language=${LANGUAGE}&api_key=${API_KEY}`,
  options: {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  },
};

export const MOVIES_ACTION_GET = {
  title: 'Ação',
  url: `${API_URL}/trending/all/week?language=${LANGUAGE}&api_key=${API_KEY}`,
  options: {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  },
};



export const listResults = {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: MOVIES_ORIGINAL_GET.title,
        items: await basicFecth(MOVIES_ORIGINAL_GET.url),
      },
      {
        slug: 'trending',
        title: MOVIES_TRENDING_GET.title,
        items: await basicFecth(MOVIES_TRENDING_GET.url),
      },
      {
        slug: 'toprated',
        title: MOVIES_TOP_GET.title,
        items: await basicFecth(MOVIES_TOP_GET.url),
      },
      {
        slug: 'action',
        title: MOVIES_ACTION_GET.title,
        items: await basicFecth(MOVIES_ACTION_GET.url),
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFecth(
          `${API_URL}/discover/movie?with_genres=35&${LANGUAGE}&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'tv',
        title: TVMOVIES_GET.title,
        items: await basicFecth(TVMOVIES_GET.url),
      },
    ];
  },
};
