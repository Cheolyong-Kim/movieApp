import { useEffect, useState } from 'react';
import Carousel from '../components/carousel';
import Loading from '../components/loading';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMoives = async() => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMoives();
  },[])
  return (
    <div className="App">
      {loading ? <Loading></Loading> : 
        <Carousel movies={movies}></Carousel>
      }
    </div>
  );
}