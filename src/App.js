import './App.css';
// import axios from 'axios'
// import React, { useState, useEffect } from 'react'
// import { render } from 'react-dom'
// import ReactFitText from 'react-fittext'
// import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
// import Navbar from './components/Navbar'
// import About from './routes/About'
// import Selfie from './routes/Selfie'
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

  const sliderContent = [{image: 'map.png'},{image: 'grecipe.png'}, {image: 'am.png'}, {image: 'rm.png'}]

const settings = {
  dots: false,
  fade: false,
  infinite: true,
  speed: 700,
  slideToShow: 1,
  className: "slides",
  autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
}




  // <div className='shotcontainer'>
  // <img src='IMG_5031.jpg' className='headshot' />
  // </div>

  // goes in between container and firstsec <nav>
  //
  //
  // </nav>
  return (

  <div className='container'>







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
      <div className="slidersec">
      <div className="slidercontentdiv">
        <div className="slidertitlediv">
        <h2 className="slidersectitle">Built and Designed</h2>
        </div>

        <div className="slidercontentholder">
        <p className="slidersec-content">These are a collection of projects that I designed and built using
        various technologies such as HTML, CSS, Javascript, Typescript, React.js,
        Node.js, SQL & NOSQL databases, Python, Django, Flask, etc. For more
        information, contact me.</p>
        </div>

        </div>
        <div className='sliderdiv'>
          <Slider {...settings}>
            {sliderContent.map((sites)=>{
              return(
                <div>
                  <img className="z-image" src={sites.image} alt='' />
                </div>
                  )
                  })}
          </Slider>
        </div>
      </div>
      <div className="contactsec">

        <div className="contactimgdiv">
          <img className="contactimg" src="nphone.png" alt='' />
        </div>
        <div className="contactcontent" onClick={(event)=>window.open('https://www.upwork.com/freelancers/~019934926e15553f0e', "_self", "popup")}>
          <h1 className="contact-title" onClick={(event)=>window.open('https://www.upwork.com/freelancers/~019934926e15553f0e', "_self", "popup")}>Contact</h1>
        </div>


   </div>
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
