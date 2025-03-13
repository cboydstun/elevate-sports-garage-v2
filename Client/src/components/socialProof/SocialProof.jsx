import React from 'react'
import './SocialProof.css'

export default function SocialProof () {
  return (
    <section className='why-us-container'>
      <h1 className='title'>Why Choose Elevate Sports Garage?</h1>
      <div className='location-container'>
        <p>Prime Location</p>
        <h2>
          Conveniently located in Canyon Lake, Texas, serving the entire Hill
          Country area with easy access and ample parking.
        </h2>
      </div>
      <div className='equipment-container'>
        <p>Pro-Grade Equipment</p>
        <h2>
          State-of-the-art pitching machines with adjustable speeds and pitch
          types for both baseball and softball.
        </h2>
      </div>
      <div className='hours-container'>
        <p>Extended Hours</p>
        <h2>
          Open early and late to accommodate your training schedule, with
          membership options for 24/7 access.
        </h2>
      </div>
    </section>
  )
}
