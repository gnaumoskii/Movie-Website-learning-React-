import React from 'react'
import { useParams } from 'react-router-dom';

export default function MoviePage({movies,IMG_URL}) {
  
  const { id } = useParams();
  const movie = movies.find(movie => movie.id == id);
  console.log(movie);

  return (
    <div className='container' style={{display:'flex'}}>

<div style={movie.poster_path != null ? {position:'absolute',top:'0',left:'0',width:'100vw',height:'100vh',opacity:'15%',backgroundPosition:'center',backgroundSize:'100%',filter:'blur(16px)',backgroundImage:`url(${IMG_URL + movie.poster_path})`} : {} }> </div>





      <div className='row' style={{minHeight: '90vh', overflow:'auto'}}>
      <div className='col-md-3' style={{padding: '50px'}}>
        <div className='moviePagePoster' style={movie.poster_path != null ? {backgroundImage:`url(${IMG_URL + movie.poster_path})`} : {} }> </div>

      </div>
      
      <div className='col-md-6 text-start'> 
        <div>
         <h1 className='moviePageTitle'>{movie.original_title}</h1>
          
        </div>
      
        <div>
          <hr className='moviePageHR' style={{position:'relative',color:'white', top: '220px', marginLeft: '120px'}}></hr>
          <p className='moviePageText'>{movie.overview}</p>
          <hr className='moviePageHR' style={{position:'relative',color:'white', top: '260px', marginLeft: '120px'}}></hr>
        </div>

        <div>
          <p className='moviePageTextRating'>RATING: 
            <span style={ 
              movie.vote_average < 4 ? {color:'red',padding:'8px', fontWeight:'bold', fontSize:'22px'} :
              movie.vote_average < 7 ? {color:'orange',padding:'8px', fontWeight:'bold', fontSize:'22px'} :
                                       {color:'green',padding:'8px', fontWeight:'bold', fontSize:'22px'}
            }
              >{movie.vote_average} 
             
            </span> 
          </p>
         <p className='moviePageTextDate'>RELEASE YEAR:<span style={{padding:'8px',fontWeight:'bold',color:'lightgrey', fontSize:'22px'}}>{movie.release_date.substring(0,4)}</span> </p>
         <button className='addToList btn btn-warning'>ADD TO YOUR LIST</button>
       </div>
     
        
      </div>
      </div>
    

   
    </div>
   
  )
}
