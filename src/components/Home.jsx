import React from 'react'
import ContactSec from './Contact'
import ProjectSec from './Projects'
import LandingContainer from './Landing'
import Toughchatsec from './Toughchat'

const Home = () => {
  return(
    <div className='container'>
    <LandingContainer />
    <ProjectSec />
    <ContactSec />
    </div>
  )
}

// <Toughchatsec />

export default Home
