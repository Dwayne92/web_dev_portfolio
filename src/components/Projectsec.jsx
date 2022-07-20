import React from 'react'

const Projects = () => {
  return(
    <div className='projectscontainer'>
    <div className='project1sec'>
    <div className='project1picdiv'onClick={()=>window.open('https://precious-jelly-ddd9f8.netlify.app/', '_self', 'popup')}>
    <img className='grecipeprojimg' src='grecipe.png' alt='' />
    </div>
    <div className='project1content'>
    <p className='project1description des'> This is a JAM-stack web application able to return results for queries of
    food and link to original source. The project is done in REACT with the spoonacular
    API. Possible expansion of this app includes additional query options/parameters,
     pagination feature, dish details display, additional site build.
     </p>
    </div>
    </div>
    <div className='project2sec'>
    <div className='project2content'>
    <p className='des'>This is a Full-Stack application built with REACT, MongoDB, & Django Python.
    The application is an art marketplace that allows you to view the current collection & filter
    by artist, it allows you to signup to access full CRUD (create, read, update, and delete) functionality,
    which allows you to add, edit, read, and delete art, & artists from the database. Build includes
    React Bootstrap for styling
    </p>
    </div>
    <div className='project2picdiv' onClick={()=>window.open('https://art-marketplace.herokuapp.com/', '_self', 'popup')}>
    <img className='artmarketprojimg' src='am.png' alt='' />
    </div>
    </div>
    </div>
  )
}

export default Projects
