import React from 'react';
import Typical from 'react-typical';
import './About.css';

export default function Profile() {
  return(
  <div className='About-container' id = 'Home'>
      <div className='profile-details'>
        <div className='profile-details-left'>
          <div className='links'>
              <a href='https://www.facebook.com/profile.php?id=100012194433822'>
                  <i className='fa fa-facebook-square'></i>
              </a>
              <a href='mailto:sushanttoraskar16@gmail.com'>
                  <i className='fa fa-google-plus-square'></i>
              </a>
              <a href='https://www.instagram.com/_sushant_toraskar_/'>
                  <i className='fa fa-instagram'></i>
              </a>
              <a href='#'>
                  <i className='fa fa-youtube-square'></i>
              </a>
              <a href='https://www.linkedin.com/in/sushant-toraskar-56a192206'>
                  <i className='fa fa-linkedin-square'></i>
              </a>
          </div>
          <div className=' container myname-container'>
              <span className='primary-text'>
                  {" "}
                  hello, I'm <span className='my-name'>Sushant</span>
              </span>
              </div>
            <div className='container my-titles-container'>
                  <span>
                      {" "}
                      <h1>
              <Typical 
              loop = {Infinity}
              steps = {[
                  "React-native developer 😎",
                  1000,
                  "React-js developer ",
                  1000,
                  "Cross Platform Dev",
                  1000
              ]}
              />
              </h1>
              
              <span>
                  Can Build beautifull frontend applications.
              </span>
              </span>
          </div>
          <div className='btns-container'>
              <a href='#contact'>
              <button className='btn btn-hire'>
                  {""}
                  Hire me {""}
              </button></a>
              <a href='sushant resume.pdf' download='sushant resume.pdf'>
                  <button className='btn btn-resume'>
                  resume
                  </button>
              </a>
          </div>
        </div>
        <div className='container profile-details-right'>
          <div className='profile-container'>
              <div className='image-container' >
                  {/* <h1>hii</h1> */}
                  {/* <img src='asta.png' height={200} width={200}/> */}
              </div>
          </div>
        </div>
      </div>
  </div>    
  )
}
