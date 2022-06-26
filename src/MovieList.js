import React from 'react'
import Movie from './Movie'


export default function MovieList( {myMovies,movies,setMovies, IMG_URL, API_URL, SEARCH_URL, getData} ) {



  return (
    <div className='movieListPage row text-center'>
      <div className='col-12 text-start'>
        <h1 style={{color:'white', position:'relative',top:'114px', marginLeft:'148px', fontFamily:'Open Sans', fontWeight:'normal'}}>Movie List</h1>
        <form onSubmit={e=>e.preventDefault()}>
          <input className='searchBarMovie'  
            type='text' 
            placeholder='Search movie...'
            onChange={(e)=>{
           
              if(e.target.value ==''){
                const  newList = getData(API_URL);
                setMovies(newList);
              } else {

               
                const  newList = getData(SEARCH_URL+'&query='+ e.target.value);
                setMovies(newList);
             
                
              }
       
            }}
            />
          <select className='selectFilter'>
              <option>Genre</option>
            </select>
              
            <select className='selectFilter'>
              <option>Year</option>
            </select>
        </form>
      </div>
      <hr className='col-12' style={{position: 'relative' , color: 'white', width: '90%', marginLeft: 'auto', marginRight: 'auto',textAlign:'center',top:'90px'}} />      
      <div id='mlist' className='movieList col-12 '>
        <ul className='movieCardList '>
        
        {
          movies.length ? 
           movies.filter(movie => movie.vote_average > 0).map((movie,index)=> {
             return <li key={index}><Movie movie={movie} IMG_URL={IMG_URL}/></li>
           })
           : <h1>Currently there are no movies on the list.</h1>

        }

        </ul>
        
      </div>
    </div>
    
  )
}
