import React from 'react';
import { useEffect, useState } from "react";
import Movie from "./Movie"; 
import NavBar from "./layout/NavBar";
import { useTitle } from "../components/Hooks";
import styles from "../css/common.css";


const Movies = () => {

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // useTitle
  const titleUpdater = useTitle("Loading....");

  // movie API
  const getMovies = async () => {
    const callapi = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    )
    const json = await callapi.json();
    setMovies(json.data.movies);
    titleUpdater("Movies");
    setLoading(false);
  };

  useEffect(() => getMovies(), []);   

  
  return (
    <div className={styles.container}>
      { loading ? (
        <div className={styles.loader}><span>Loading...</span></div>
      ) : (

        <div className={styles.movies}>

          <NavBar />

          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Movies;