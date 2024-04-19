import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import { getMovies, searchMovies } from "../../api/movieslist";
import "./MovieList.css";

export default function MovieList() {
    const [movies, setMovies] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");

    const getMoviesListHandler = async () => {
        const moviesList = await getMovies();
        setMovies(moviesList);
    };

    const searchMoviesHandler = async (title) => {
        const searchedMovies = await searchMovies(title);
        setMovies(searchedMovies);
    };

    useEffect(() => {
        if (searchTitle) {
            searchMoviesHandler(searchTitle);
        } else {
            getMoviesListHandler();
        }
    }, [searchTitle]);

    return (
        <div className="movies container-fluid">
            <div className="movies__options container">
                <h1 className="movies__options__heading">Movie List</h1>
                <input className="movies__options__search-bar" type="text" placeholder="Search movie..." onChange={(e) => setSearchTitle(e.target.value)} />
            </div>
            <div className="movies__list-container container">
                <ul className="movies__list ">
                    {movies.length ? (
                        movies
                            .filter((movie) => movie.vote_average > 0)
                            .map((movie, index) => {
                                return (
                                    <li key={index}>
                                        <Movie movie={movie} />
                                    </li>
                                );
                            })
                    ) : (
                        <h1>Currently there are no movies on the list.</h1>
                    )}
                </ul>
            </div>
        </div>
    );
}
