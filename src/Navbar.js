import React from 'react'
import { Link, useLocation, matchPath } from 'react-router-dom'
import { useState } from 'react';

export default function Navbar() {

    const [scrolled,setScrolled] = useState(false);

    const checkScroll = () => {
      if(window.scrollY >= 450){
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', checkScroll);


    function scrollToAbout() {
        window.scrollBy(0,1080)
    }

    
    const pathname = useLocation();

  return (
    <div className='container m-0 p-0'>
<nav className='row p-0 m-0'>
      <div className={scrolled ? 'navScrolled' : 'nav'}>
      <div className={scrolled ?'col-xl-4 navLogoScrolled' :'col-xl-4 navLogo '}>POPMOVIES</div>
        <div className='col-xl-4 text-start'>
          <ul className='menu'>
                <li className='menuList'>  <Link to="/" className={scrolled ? 'menuElementScrolled' : 'menuElement'} onClick={() => {window.scrollBy(0,-1080)}}>HOME</Link></li>
                <li className='menuList'><Link to="/movies"  className={scrolled ? 'menuElementScrolled' : 'menuElement'}  >MOVIES</Link></li>
                <li className='menuList text-truncate'><Link to="/list"  className={scrolled ? 'menuElementScrolled' : 'menuElement'} >MY MOVIE LIST</Link></li>
            </ul>
        </div>
        <div className='col-xl-4 text-end' >
        </div>
      </div>
      
        
          
          
      
    </nav>
    </div>
    
  )
}
