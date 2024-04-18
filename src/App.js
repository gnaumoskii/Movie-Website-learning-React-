
import "./App.css";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import MovieList from "./components/MovieList/MovieList";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import MyMovieList from "./components/MyMovieList/MyMovieList";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="movies">
                    <Route index element={<MovieList  />} />
                    <Route path="/movies/:id/" element={<MovieDetails />} />
                </Route>
                <Route path="list">
                    <Route index element={<MyMovieList />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
