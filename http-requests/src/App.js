import React, { useEffect, useState, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://react-http-cbb96-default-rtdb.europe-west1.firebasedatabase.app/movies.json'
      );

      if (!response.ok) throw new Error('Something went wrong!');

      const data = await response.json();
      const result = [];
      Object.keys(data).forEach((key) => {
        data[key].id = Math.random();
        result.push(data[key]);
      });

      setMovies(result);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const addMovieHandler = async (movie) => {
    const response = await fetch(
      'https://react-http-cbb96-default-rtdb.europe-west1.firebasedatabase.app/movies.json',
      {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  };

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) content = <MoviesList movies={movies} />;

  if (error) content = error;

  if (isLoading) content = <p>Loading...</p>;

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
