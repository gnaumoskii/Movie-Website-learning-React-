import React from 'react'
import { Link } from 'react-router-dom'
import ratingIcon from './materials/starIcon.png'

export default function Movie({movie, IMG_URL}) {




  return (
    <Link style={{textDecoration:'none'}} to={`/movies/${movie.id}`}>
    <div className='movieCard'>
  
     <div className='backgroundImage' style={movie.poster_path != null ? {backgroundImage:`url(${IMG_URL + movie.poster_path})`} : {}}>

     </div>
      
      <div style={{zIndex:'1',textAlign:'center',width: '100%',position:'relative',top:'-85px'}}>
        
          <h4 className='movieCardTitle'> {movie.original_title}</h4>
          <div className='movieCardRating'> 
            <img className='ratingIcon' src={ratingIcon}></img>
            <h4 className='ratingNumber'>{movie.vote_average}</h4>
          </div>
      </div>
    </div>
    </Link>
    
  )
}
