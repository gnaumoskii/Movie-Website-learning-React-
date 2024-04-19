import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovie } from "../../api/movieslist";
import { getMyMovie } from "../../api/mymovielist";
import { removeMyMovie, addMyMovie } from "../../api/mymovielist";
import "./MovieDetails.css";

export default function MovieDetails() {
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
        <div className="movie-details ">
            {movie && (
                <>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} className="movie-details__background-poster" />

                    <div
                        className="movie-details__content container d-md-flex flex-direction-row justify-content-center"
                        style={{ minHeight: "90vh", overflow: "auto" }}
                    >
                        <img className="movie-details__poster col-6" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} />

                        <div className="col-6">
                            <div className="movie-details__info">
                                <h1 className="movie-details__info__title">{movie && movie.original_title}</h1>
                                <p className="movie-details__info__description">{movie && movie.overview}</p>
                                <div className="d-flex">
                                    <p className="movie-details__info__rating">
                                        RATING:
                                        <span
                                            className="movie-details__info__rating-value"
                                            style={movie.vote_average < 4 ? { color: "red" } : movie.vote_average < 7 ? { color: "orange" } : { color: "green" }}
                                        >
                                            {movie.vote_average}
                                        </span>
                                    </p>
                                    <p className="movie-details__info__release-date">
                                        RELEASE YEAR:
                                        <span className="movie-details__info__release-date__value">
                                            {new Date(movie.release_date).toLocaleDateString(undefined, { year: "numeric" })}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            {checkMovie.current ? (
                                <button
                                    className="movie-details__btn-remove"
                                    onClick={() => {
                                        removeMyMovie(movie.id);
                                        navigate("/list");
                                    }}
                                >
                                    REMOVE FROM YOUR LIST
                                </button>
                            ) : (
                                <button
                                    className="addToList movie-details__btn-add"
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
                </>
            )}
        </div>
    );
}
