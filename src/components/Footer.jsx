import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (

    <>
      <div className='w-100 p-3 d-flex align-items-center justify-content-center flex-column mt-5' style={{width:"100%", height:"300px",zIndex:"1"}}>
        {/* blur background */}
      
       <div className='d-flex justify-content-center' style={{width:"600px",height:"200px",position:"absolute",backgroundColor:"rgba(33, 44, 535, 0.300)",filter:"blur(200px)",zIndex:"-1"}}></div>
      
        {/* footer */}

        <div className='footer p-3 mt-5 d-flex flex-wrap align-items-center justify-content-evenly w-100'>
          <div className="website mt-5" style={{width: "400px"}}>
  
            <h4><i class="fa-solid fa-video me-3 text-warning mt-5"></i>Media Player</h4>
            <h6>The MediaPlayer App is a versatile and user-friendly platform that allows users to stream, upload, and organize their favorite media content seamlessly. With features like personalized playlists, watch history, media categorization, and user profiles, the app offers a tailored experience for each user. Built with a responsive design, it provides a smooth playback experience across devices.</h6>
          </div>
  
          <div className="links d-flex flex-column">
  
            <h4>Links</h4>
            <Link to={'/'} style={{textDecoration: "none", color: "white"}}>Landing Page</Link>
            <Link to={'/home'} style={{textDecoration: "none", color: "white"}}>Home</Link>
            <Link to={'/watchhistory'} style={{textDecoration: "none", color: "white"}}>Watch History</Link>
  
          </div>
          <div className="guides d-flex flex-column">
  
            <h4>Guides</h4>
            <Link to={'/'} style={{textDecoration: "none", color: "white"}}>React</Link>
            <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration: "none", color: "white"}}>React Bootstrap</Link>
            <Link to={'https://bootswatch.com/'} style={{textDecoration: "none", color: "white"}}>Bootswatch</Link>
          </div>
          <div className="contact mt-4">
            <h4>Contact Us</h4>
            <div className='d-flex'>
              <input type="text" className='form-control' placeholder='Enter your EmailID' />
              <button className='btn btn-warning text-white ms-3' style={{boxShadow:"0 10px 20px rgba(255, 166, 0, 0.350)"}}>Subscribe</button>
            </div>
  
            <div className='d-flex justify-content-evenly mt-3'>
              <Link to={'/'}><i class="fa-brands fa-facebook fa-2x" style={{textDecoration: "none", color: "white"}}></i></Link>
              <Link to={'/'}><i class="fa-brands fa-instagram fa-2x" style={{textDecoration: "none", color: "white"}}></i></Link>
              <Link to={'/'}><i class="fa-brands fa-twitter fa-2x" style={{textDecoration: "none", color: "white"}}></i></Link>
              <Link to={'/'}><i class="fa-brands fa-linkedin fa-2x" style={{textDecoration: "none", color: "white"}}></i></Link>
            </div>
          </div>
        </div>
        <p className='mt-5 p-3 text-center'>Copyrigt © 2023 Media player. Built with React.</p>
      </div>
      
    </>
  )
}

export default Footer