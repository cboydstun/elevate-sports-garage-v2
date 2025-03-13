import React, { useState } from 'react'
import { createContact } from '../../api/ContactsApi'
import './Contact.css'

export default function Contact () {
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    body: ''
  })

  const handleContactSubmit = async e => {
    e.preventDefault()

    try {
      createContact(contactFormData)
      alert("Thanks for your message, we will get back to you soon!")
      setContactFormData({
        name: '',
        email: '',
        body: ''
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleContactChange = e => {
    setContactFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className='contact-container'>
      <p className='contact-us-text'>Contact Us!</p>
      <br></br>
      <form className='contact-text'>
        {'We would love to hear from you! Ask about our birthday packages!'}
      </form>
      <form onSubmit={handleContactSubmit}>
        <label className='name'>Name</label>
        <br></br>
        <input
          type='text'
          name='name'
          value={contactFormData.name}
          onChange={handleContactChange}
          required
        ></input>
        <br></br>
        <label className='email'>Email</label>
        <br></br>
        <input
          type='email'
          name='email'
          value={contactFormData.email}
          onChange={handleContactChange}
          required
        ></input>
        <br></br>
        <label className='message'>Message</label>
        <br></br>
        <input
          className='body'
          type='text'
          name='body'
          value={contactFormData.body}
          onChange={handleContactChange}
          required
        ></input>
        <br></br>
        <button type='submit'>Send!</button>
      </form>
    </div>
  )
}
