import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"



const ProjectSec = () => {

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

  return(
    <div className="slidersec">
    <div className="slidercontentdiv">
      <div className="slidertitlediv">
      <img src='builtanddesigned.png' alt='' className='slidersectitle' />
      </div>


      <p className="slidersec-content">I design and build websites using the best and
       latest languages and technologies such as
        HTML5, CSS3, Javascript, Typescript, React.js,
      Node.js, SQL & NOSQL databases, Python, Django, Flask, etc. For more
      information, contact me.</p>
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
  )
}


export default ProjectSec
