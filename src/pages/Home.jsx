import { useState, useEffect } from "react";
import MovieCard from "../componentes/MovieCard";

import "./MovieGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      <p className="rodape"> ℗ 2023 - Ebert Palmeira</p>
    </div>
  );
};

export default Home;
