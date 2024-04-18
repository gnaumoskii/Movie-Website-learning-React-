import React from "react";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import { getMyMovies } from "./api/mymovielist";

export default function MyMovieList() {
    const [myMovies, setMyMovies] = useState([]);

    
    useEffect(() => {
      const getMyMoviesHandler = async () => {
        const myMoviesData = await getMyMovies();
        console.log(myMoviesData)
        setMyMovies(myMoviesData);
      }
      getMyMoviesHandler();
    }, []);
    return (
        <div className="movieListPage row text-center">
            {myMovies && (
                <>
                    <div className="col-12 text-start">
                        <h1 style={{ color: "white", position: "relative", top: "114px", marginLeft: "148px", fontFamily: "Open Sans", fontWeight: "normal" }}>
                            My List
                        </h1>
                    </div>
                    <hr
                        className="col-12"
                        style={{
                            position: "relative",
                            color: "white",
                            width: "90%",
                            marginLeft: "auto",
                            marginRight: "auto",
                            textAlign: "center",
                            top: "90px",
                        }}
                    />
                    <div className="movieList col-12 ">
                        <ul className="movieCardList ">
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
                </>
            )}
        </div>
    );
}
