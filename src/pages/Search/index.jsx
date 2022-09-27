import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; //Pegar os parâmetros da URL
import { MovieCard } from "../../components/MovieCard";
import "../../App.css";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export const Search = () => {
  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState([])
  const query = searchParams.get("q")
  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    console.log(searchWithQueryURL)

    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultado para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 &&
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}>
              {movie.title}
            </MovieCard>
          ))}
      </div>
    </div>
  );
};
