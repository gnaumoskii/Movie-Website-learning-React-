import React from 'react'
import { Link, useLocation, matchPath } from 'react-router-dom'


export default function Navbar() {
    function scrollToAbout() {
        window.scrollBy(0,1080)
    }

    
    const pathname = useLocation();

  return (
    <div className='container m-0 p-0'>
<nav className='row p-0 m-0'>
      <div className='nav'>
      <div className='col-xl-4 navLogo '>POPMOVIES</div>
        <div className='col-xl-4 text-start'>
          <ul className='menu'>
                <li className='menuList '>  <Link to="/" onClick={() => {window.scrollBy(0,-1080)}}      style={{color: "white", textDecoration: 'none'}}>HOME</Link></li>
                <li className='menuList '><Link to="/movies" style={{color: "white", textDecoration: 'none'}} >MOVIES</Link></li>
                <li className='menuList text-truncate'><Link to="/list"   style={{color: "white", textDecoration: 'none'}}>MY MOVIE LIST</Link></li>
                <li className='menuList'><button className=' menuButton' onClick={()=>{window.scrollBy(0,1080)}}> ABOUT </button>   </li>
                
            </ul>
        </div>
        <div className='col-xl-4 text-end' >
          <form>
            <input className='searchBar' type='text' placeholder='Search movie...'/>
          </form>
        </div>
      </div>
      
        
          
          
      
    </nav>
    </div>
    
  )
}
