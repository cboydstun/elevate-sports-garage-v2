import React from 'react'
import './FacilitiesPage.css'

export default function Facilities() {
  return (
    <div className='facilities-page'>
      <div className='content-container'>
        <h1 className='welcome-message'>Welcome to our Facilities!</h1>
        <div className='message-section'>
          <p>
            Welcome to Elevate Sports Garage, your premier destination for
            indoor baseball and softball training.
            <br />
            Our state-of-the-art facility is designed to provide athletes of all
            ages and skill levels with the perfect environment to hone their
            skills. We offer high-quality batting cages equipped with the latest
            technology to track performance and improve batting techniques. Our
            experienced staff is dedicated to helping you elevate your game,
            whether you're a beginner looking to learn the basics or an advanced
            player aiming for the next level.
            <br />
            Join us and experience the excitement of training in a safe,
            controlled environment, rain or shine. Let's swing for success
            together!
          </p>
        </div>
        <div className='image-section'>
          <img
            className='pitch-machine'
            src='https://res.cloudinary.com/dlcaybqqy/image/upload/v1740439311/hackcallouts-copy_oh7dsa.jpg'
            alt='pitch-machine'
          />
          <p className='image-description'>
            At our facility, we use the Hack Attack Baseball Pitching Machines
            that have a unique three-wheel design that lets you see the ball
            clearly and fully all the way through the feeding motion,
            acceleration and release, just like a live pitcher
          </p>
        </div>
        <div className='featured-brands'>
          <h2 className='product-title'>Proshop Products</h2>
          <p>Check out some of the brands we carry!</p>
          <div className='brand-links'>
            <div className='taterballs-container'>
              <img
                className='taterballs-image'
                src='https://res.cloudinary.com/dlcaybqqy/image/upload/v1740444062/High_Density_Foam_Baseball_nacyg7.jpg'
                alt='Taterballs Image'
              />
              <a href='https://www.taterbaseball.com' className='taterballs'>
                Taterballs
              </a>
            </div>
            <div className='naked-grips-container'>
              <img
                className='naked-grip-image'
                src='https://res.cloudinary.com/dlcaybqqy/image/upload/v1740443993/1_Bomb_mzjigx.webp'
                alt='Naked Grips image'
              />
              <a href='https://www.nakedgrips.com' className='naked-grips'>
                Naked Grips
              </a>
            </div>
            <div className='lizard-skin-container'>
              <img
                className='batting-tape'
                src='https://res.cloudinary.com/dlcaybqqy/image/upload/v1740439312/media_3d73382b-b133-4059-b92c-47ec58205faa_990x990_dajwuf.webp'
                alt='Lizard Skin image'
              />
              <a href='https://www.lizardskins.com' className='lizard-skin'>
                Lizard Skin
              </a>
            </div>
          </div>
          <a href='link-to-shop' className='shop-link'>
            SHOP NOW!
          </a>
        </div>
      </div>
    </div>
  )
}