import React from "react";
import { useState, useEffect } from "react";
import Movie from "../Movie/Movie";
import { getMyMovies } from "../../api/mymovielist";
import "../MovieList/MovieList.css";

export default function MyMovieList() {
    const [myMovies, setMyMovies] = useState([]);

    
    useEffect(() => {
      const getMyMoviesHandler = async () => {
        const myMoviesData = await getMyMovies();
        setMyMovies(myMoviesData);
      }
      getMyMoviesHandler();
    }, []);
    return (
        <div className="movies container-fluid">
                    <div className="movies__options container">
                        <h1 className="movies__options__heading">
                            My List
                        </h1>
                    </div>
                    <div className="movies__list-container container ">
                        <ul className="movies__list ">
                            {myMovies.length ? (
                                myMovies
                                    .filter((movie) => movie.vote_average > 0)
                                    .map((movie, index) => {
                                        return (
                                            <li key={index}>
                                                <Movie movie={movie} IMG_URL={movie.poster_path} />
                                            </li>
                                        );
                                    })
                            ) : (
                                <h1 style={{ color: "gray", fontWeight: "lighter" }}>Currently there are no movies on the list.</h1>
                            )}
                        </ul>
                    </div>
        </div>
    );
}
