import React from 'react'

export default function About() {
  return (
      <>
        <h1 className='aboutTitle'>About the project</h1>
        <hr style={{position: 'relative' , color: 'white', width: '70%', marginLeft: 'auto', marginRight: 'auto',textAlign:'center'}} />
        <p className='aboutText'> 
          This is a React.js project without database, the purpose is to practice React components,routing and data fetching from external API. 
          The website uses TMDb free API to get the movie list.
        </p>

      </>
    
    
  )
}
