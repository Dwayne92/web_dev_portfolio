import React from 'react'



const LandingContainer = () => {
  return(
    <div className='firstsec'>
      <div className='landingimgcnt'>
        <img className='landingimg' src='balloons.png' alt='' />
      </div>
      <div className='toprestdiv'>
        <div className='title-div'>
          <h1 className='title'>Modern<br/>Web Development</h1>
        </div>
        <h5 className='subtitle'>Full-Stack Developer</h5>
        <div className='techicons'>
          <img src='html5.png' className='tekicons' alt='' />
          <img src='css3.png' className='tekicons' alt='' />
          <img src='javascript.png' className='tekicons' alt='' />
          <img src='bootstrap.png' className='tekicons' alt='' />
          <img src='react-icon.png' className='tekicons' alt='' />
          <img src='nodejs.png' className='tekicons' alt='' />
          <img src='expressjs.png' className='tekicons' alt='' />
          <img src='mongodb.png' className='tekicons' alt='' />
          <img src='python-vertical.png' className='tekicons' alt='' />
          <img src='django.png' className='tekicons' alt='' />
        </div>
      </div>
    </div>
  )
}



export default LandingContainer
