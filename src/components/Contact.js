import React from 'react'



const ContactSec = () => {
  return(
    <div className="contactsec">

      <div className="contactimgdiv">
        <img className="contactimg" src="nphone.png" alt='' />
      </div>
      <div className="contactcontent" onClick={(event)=>window.open('https://www.linkedin.com/in/dwayne-miller00/', "_self", "popup")}>
        <h1 className="contact-title" onClick={(event)=>window.open('https://www.linkedin.com/in/dwayne-miller00/', "_self", "popup")}>Contact</h1>
      </div>


 </div>
  )
}


export default ContactSec
