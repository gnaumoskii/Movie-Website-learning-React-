import React from 'react'
import bgVideo from './materials/trailer-background.mp4'
import { Link } from 'react-router-dom'
import About from './About'

export default function Home() {
  return (
    <div className='homePage container'>
        <div className='home'>
            <video className='videoBackground' autoPlay loop muted>
                <source src={bgVideo} type='video/mp4'></source>
            </video>
        </div>
        <div className='container homeContent text-center m-0 p-0'>
          <div className='row'>
           
            <div className='col-md-6 text-start'>
            <div><h1 className=' homeTitle'> POPMOVIES</h1></div>
              <p className=' homeText'> 
                This project is made for the purpose of                   
                learning React.js,<br /> components, routes, and fetching data from APIs. 
              </p>
            </div>
            <div className='col-md-6 '>
             <button className='homeButton' ><Link to="/movies" className='homeButtonText' style={{}} >CHECK OUT THE MOVIE LIST </Link> </button>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='about'>
              <About />
            </div>
          </div>
        </div>
      
    </div>
  )
}
