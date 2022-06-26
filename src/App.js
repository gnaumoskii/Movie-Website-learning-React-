import logo from './logo.svg';
import './App.css';

import Home from './Home';
import Layout from './Layout';
import MovieList from './MovieList';
import Movie from './Movie';
import MoviePage from './MoviePage';
import MyMovieList from './MyMovieList';

import { Route, Routes, matchPath, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';



function App() {
  const API_KEY = 'api_key=3773611f41fc95ffd84896bb15bcb7f9';
  const BASE_URL='https://api.themoviedb.org/3';
  const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
  const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
  const SEARCH_URL = BASE_URL + '/search/movie?' + API_KEY;


  const [movies,setMovies] = useState([{}]);
  const [myMovies,setMyMovies] = useState([{}]);


  const getData = async (URL) => {
    await axios.get(URL)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect( ()=> {
    getData(API_URL);
  },[])
 


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='movies' >
          <Route index  element={<MovieList myMovies={myMovies}  movies={movies} setMovies={setMovies} IMG_URL={IMG_URL} API_URL={API_URL} SEARCH_URL={SEARCH_URL} getData={getData}/>}/>
          <Route path='/movies/:id/' element={<MoviePage movies={movies} IMG_URL={IMG_URL} myMovies={myMovies} setMyMovies={setMyMovies}/>} />
        </Route>
        <Route path='list'>
          <Route index element={<MyMovieList myMovies={myMovies} setMyMovies={setMyMovies} IMG_URL={IMG_URL} />} />
        </Route>
      </Route>
    

    </Routes>
  );
}

export default App;
