import React, { useEffect, useRef, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getMovie } from "./api/movieslist";
import { getMyMovie, getMyMovies } from "./api/mymovielist";
import { removeMyMovie, addMyMovie } from "./api/mymovielist";

export default function MoviePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    let checkMovie = useRef(false);
    useEffect(() => {
        const movieDataHandler = async () => {
            const myMovie = await getMyMovie(id);
            if (myMovie !== null) {
                setMovie(myMovie);
                checkMovie.current = true;
                return;
            }

            const movieData = await getMovie(id);
            setMovie(movieData);
            
        };
        movieDataHandler();
    }, [id]);
    return (
        <div className="container d-flex">
            {movie && (
                <>
                    <div
                        style={
                            movie.poster_path != null
                                ? {
                                      position: "absolute",
                                      top: "0",
                                      left: "0",
                                      width: "100vw",
                                      height: "100vh",
                                      opacity: "15%",
                                      backgroundPosition: "center",
                                      backgroundSize: "100%",
                                      filter: "blur(16px)",
                                      backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                                  }
                                : {}
                        }
                    >
                        {" "}
                    </div>

                    <div className="row" style={{ minHeight: "90vh", overflow: "auto" }}>
                        <div className="col-md-3" style={{ padding: "50px" }}>
                            <div
                                className="moviePagePoster"
                                style={movie ? { backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})` } : {}}
                            >
                                {" "}
                            </div>
                        </div>

                        <div className="col-md-6 text-start">
                            <div>
                                <h1 className="moviePageTitle">{movie && movie.original_title}</h1>
                            </div>

                            <div>
                                <hr className="moviePageHR" style={{ position: "relative", color: "white", top: "220px", marginLeft: "120px" }}></hr>
                                <p className="moviePageText">{movie && movie.overview}</p>
                                <hr className="moviePageHR" style={{ position: "relative", color: "white", top: "260px", marginLeft: "120px" }}></hr>
                            </div>

                            <div>
                                <p className="moviePageTextRating">
                                    RATING:
                                    <span
                                        style={
                                            movie.vote_average < 4
                                                ? { color: "red", padding: "8px", fontWeight: "bold", fontSize: "22px" }
                                                : movie.vote_average < 7
                                                ? { color: "orange", padding: "8px", fontWeight: "bold", fontSize: "22px" }
                                                : { color: "green", padding: "8px", fontWeight: "bold", fontSize: "22px" }
                                        }
                                    >
                                        {movie.vote_average}
                                    </span>
                                </p>
                                <p className="moviePageTextDate">
                                    RELEASE YEAR:
                                    <span style={{ padding: "8px", fontWeight: "bold", color: "lightgrey", fontSize: "22px" }}>
                                        {movie.release_date.substring(0, 4)}
                                    </span>{" "}
                                </p>
                                {checkMovie.current ? (
                                    <button
                                        className="removeFromList btn"
                                        onClick={() => {
                                            removeMyMovie(movie.id);
                                            navigate("/list");
                                        }}
                                    >
                                        REMOVE FROM YOUR LIST
                                    </button>
                                ) : (
                                    <button
                                        className="addToList btn"
                                        onClick={() => {
                                            addMyMovie(movie);
                                            navigate("/list");
                                        }}
                                    >
                                        ADD TO YOUR LIST
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
