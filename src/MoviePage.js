import React from 'react'
import { useParams, Link} from 'react-router-dom';

export default function MoviePage({movies,IMG_URL,myMovies,setMyMovies}) {
  
  const { id } = useParams();
  const movie = movies.find(movie => movie.id == id);


  const findMovie = myMovies.find(m => m.id == movie.id);
  const checkMovie = findMovie ? true : false;
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
        <form onSubmit={e => e.preventDefault()}>
            {
              checkMovie ? 
              <Link to="/movies">
              <button className='removeFromList btn' 
              onClick={() =>{  
              
                const myNewList = myMovies.filter(m => m.id != movie.id);
                setMyMovies(myNewList);
                
              }}>
              REMOVE FROM YOUR LIST
              </button>
              </Link>
            : 
            <Link to="/movies">
               <button className='addToList btn' 
               onClick={() =>{  
                   const myNewList = [...myMovies,movie];
                   setMyMovies(myNewList);
                 
               }}>
               ADD TO YOUR LIST
               </button>
               </Link>

            }
      



        </form>
        
       </div>
     
        
      </div>
      </div>
    

   
    </div>
   
  )
}
