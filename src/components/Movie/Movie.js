import React from 'react'
import { Link } from 'react-router-dom'
import ratingIcon from '../../assets/starIcon.png'
import "./Movie.css";

export default function Movie({movie}) {
  return (
    <Link style={{textDecoration:'none'}} to={`/movies/${movie.id}`}>
    <div className='movie-card'>
  
     <div className='movie-card__background-image' style={movie.poster_path != null ? {backgroundImage:`url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`} : {}}></div>
      
      <div className="movie-card__details">
          <h4 className='movie-card__details__title'> {movie.original_title}</h4>
          <div className='movie-card__details__rating'> 
            <img className='movie-card__details__rating-icon' src={ratingIcon} alt={movie.original_title} />
            <h4 className='movie-card__details__rating-number'>{movie.vote_average}</h4>
          </div>
      </div>
    </div>
    </Link>
    
  )
}
