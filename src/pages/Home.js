import React from "react";
import bgVideo from "../assets/trailer-background.mp4";
import { Link } from "react-router-dom";
import "./Home.css";
export default function Home() {
    return (
        <div className="home container">
            <video className="home__background-video" autoPlay loop muted>
                <source src={bgVideo} type="video/mp4"></source>
            </video>

            <div className="container home__content">
                <div className="home__content__text">
                    <h1 className=" home__content__text-title"> POPMOVIES</h1>
                    <div className="home__content__text-description-container">
                        <p className="home__content__text-description">Search movies and create your own movie list!</p>
                    </div>
                </div>
                <div className=" ">
                    <button className="home__content__btn--movie-list">
                        <Link to="/movies" className="home__content__btn--movie-list__text">
                            CHECK OUT THE MOVIE LIST{" "}
                        </Link>{" "}
                    </button>
                </div>
            </div>
        </div>
    );
}
