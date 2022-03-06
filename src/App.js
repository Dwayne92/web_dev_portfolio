import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './routes/About'
import Selfie from './routes/Selfie'
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

  const [apodPic,setapodPic] = useState('')
  const [activity,setActivity] = useState('')
  const getAPOD = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=bDgsn2ZBWdTB347AgiOtJRdNXINesY9pBAo3dMxz').then((response) => {
    setapodPic(response.data.url)
    })
  }


  useEffect(() => {
    getAPOD()
  }, [])

  return (

    <div className='container'>
    <Router>
    <nav>
      <Link to='/' className='l'>Home</Link>
      <Link to='/about' className='l'>About</Link>
      <div className='shotcontainer'>
      <img src='IMG_5031.jpg' className='headshot' />
      </div>

    </nav>
     <Routes>
        <Route path='/' element={<Home />} />
       <Route path='/about' element={<Test />} />

     </Routes>
    </Router>


   <h1>Modern<br/>Web Development</h1>
   <h5>Full-Stack Developer</h5>
   <div className='maincont'>
   <div className='techicons'>
   <img src='html5.png' className='tekicons' />
   <img src='css3.png' className='tekicons' />
   <img src='javascript.png' className='tekicons' />
   <img src='bootstrap.png' className='tekicons' />
   <img src='react-icon.png' className='tekicons' />
   <img src='nodejs.png' className='tekicons' />
   <img src='expressjs.png' className='tekicons' />
   <img src='mongodb.png' className='tekicons' />
   <img src='python-vertical.png' className='tekicons' />
   <img src='django.png' className='tekicons' />
   </div>
   <h6>I integrate 3rd party APIs</h6>
   <img src={apodPic} className='tnimg' />
   <div className='nasacaption'>
   <p className='nasades des'>This is an API from nasa, for an Astronomy picture
   of the day Come back tomorrow for another picture!</p>
   </div>
   <h4>Here is an API that gives random activities</h4>

   <div className='rest'>
   <p className='restdes des'>
   I also build APIs!
   </p>
   </div>
   </div>

   </div>


  );
}
function Home(){
  return(
    <div>
    <h1>Home</h1>
    </div>
  )
}
function Test(){
  return (
    <div>
    <h1>Test</h1>
    </div>
  )
}
