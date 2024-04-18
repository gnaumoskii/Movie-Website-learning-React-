
import "./App.css";
import Home from "./Home";
import Layout from "./Layout";
import MovieList from "./MovieList";
import MoviePage from "./MoviePage";
import MyMovieList from "./MyMovieList";

import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMyMovies } from "./api/mymovielist";

function App() {
    //Get My Movie List

    useEffect(() => {
      getMyMovies();

    }, []);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="movies">
                    <Route index element={<MovieList  />} />
                    <Route path="/movies/:id/" element={<MoviePage />} />
                </Route>
                <Route path="list">
                    <Route index element={<MyMovieList />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
