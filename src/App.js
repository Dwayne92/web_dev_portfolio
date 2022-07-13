import './App.css';
// import axios from 'axios'
// import React, { useState, useEffect } from 'react'
// import { render } from 'react-dom'
// import ReactFitText from 'react-fittext'
// import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
// import Navbar from './components/Navbar'
// import About from './routes/About'
// import Selfie from './routes/Selfie'
import ContactSec from './components/Contact'
import ProjectSec from './components/Projects'
import LandingContainer from './components/Landing'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
// const getActivity = () => {
//   axios.get('https://www.boredapi.com/api/activity').then((response) => {
//     setActivity(response.data.activity)
//   })
// }
    // <button onClick={getActivity()}>Get Activity</button>



    //
    // const [navbarOpen, setnavbarOpen] = useState(false)
    // function handleToggle(){
    //   setnavbarOpen(prev => !prev)
    // }


export default function App() {






  // <div className='shotcontainer'>
  // <img src='IMG_5031.jpg' className='headshot' />
  // </div>

  // goes in between container and firstsec <nav>
  //
  //
  // </nav>
  return (

  <div className='container'>
      <LandingContainer />
      <ProjectSec />
      <ContactSec />


   </div>




  );
}

// const [apodPic,setapodPic] = useState('')
// const [activity,setActivity] = useState('')
// const getAPOD = () => {
//   axios.get('https://api.nasa.gov/planetary/apod?api_key=bDgsn2ZBWdTB347AgiOtJRdNXINesY9pBAo3dMxz').then((response) => {
//   setapodPic(response.data.url)
//   })
// }
//
//
// useEffect(() => {
//   getAPOD()
// }, [])

// function Home(){
//   return(
//     <div>
//     <h1>Home</h1>
//     </div>
//   )
// }
// function Test(){
//   return (
//     <div>
//     <h1>Test</h1>
//     </div>
//   )
// }


// <img src={apodPic} className='tnimg' />
// <div className='nasacaption'>
// <p className='nasades des'>This is an API from nasa, for an Astronomy picture
// of the day Come back tomorrow for another picture!</p>
// </div>
// <h4>Here is an API that gives random activities</h4>
//
// <div className='rest'>
// <p className='restdes des'>
// I also build APIs!
// </p>
// </div>
//
// </div>


// <Router>
// <nav>
//   <Link to='/' className='l'>Home</Link>
//   <Link to='/about' className='l'>About</Link>
//   <div className='shotcontainer'>
//   <img src='IMG_5031.jpg' className='headshot' />
//   </div>
//
// </nav>
//  <Routes>
//     <Route path='/' element={<Home />} />
//    <Route path='/about' element={<Test />} />
//
//  </Routes>
// </Router>
