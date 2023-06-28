import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import atc from './atc.jpg'
import ecom from './ecom.jpg'
import sm from './sm.jpg'
const HomePage = () => {
  return (
    <div>
    <Carousel fade>
      <Carousel.Item>
        <img
          src={ecom}
          alt="First slide"
          width={1100}
          height={400}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        
          src={atc}
          alt="Second slide"
          width={1100}
          height={400}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          
          src={sm}
          alt="Third slide"
          width={1100}
          height={400}
        />
      </Carousel.Item>
    </Carousel>

    
    <br /><br />
    <div className='center'><h1>Customer Management System :</h1><br />
  
      <a href="/customer-login" className='btn btn-warning btn-color btn-bg-color btn-sm col-xs-2 margin-left'>Login </a><br /><br />

      <a href='/register' className='btn btn-warning btn-color btn-bg-color btn-sm col-xs-2 margin-left'>Signup</a><br /><br />

    </div>
    </div>
  )
}

export default HomePage