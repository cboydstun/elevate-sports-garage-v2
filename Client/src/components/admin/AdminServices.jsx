import React from 'react'
import { useState, useEffect } from 'react'
import {
  fetchAllServices,
  fetchService,
  createService,
  updateService,
  deleteService
} from '../../api/ServicesApi'
import axios from 'axios'
import './AdminServices.css'

export default function AdminServices () {
  const [services, setServices] = useState([])
  const [serviceFormData, setServiceFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  })
  const [putFormData, setPutFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  })
  const [createServiceIMG, setCreateServiceIMG] = useState(null)
  const [putServiceIMG, setPutServiceIMG] = useState(null)
  const [editingService, setEditingService] = useState(null)
  useEffect(() => {
    const fetchServices = async () => {
      const data = await fetchAllServices()
      setServices(data)
    }
    fetchServices()
  }, [])

  const handleServiceSubmit = async e => {
    e.preventDefault()

    try {
      let imageUrl = serviceFormData.image

      // Only upload image if one was selected
      if (createServiceIMG != null) {
        const formData = new FormData()
        formData.append('file', createServiceIMG)
        formData.append('upload_preset', 'ESGimg')

        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dlcaybqqy/image/upload',
          formData
        )
        imageUrl = response.data.secure_url
        console.log('Image uploaded:', imageUrl)
      }

      // Create a new object with all form data and the image URL
      const serviceDataToSubmit = {
        ...serviceFormData,
        image: imageUrl
      }

      // Create the service with the complete data
      const newService = await createService(serviceDataToSubmit)

      if (newService) {
        // Reset the form data after successful submission
        setServiceFormData({
          name: '',
          description: '',
          price: '',
          image: ''
        })
        setCreateServiceIMG(null)

        // Fetch updated services list
        const data = await fetchAllServices()
        setServices(data)
      } else {
        throw new Error('Failed to create the Service.')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const deleteServiceButton = async e => {
    await deleteService(e.target.name)
    const data = await fetchAllServices()
    setServices(data)
  }

  const handleServiceChange = e => {
    setServiceFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const handlePutChange = e => {
    setPutFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const handleEditClick = service => {
    // Set the service that is being edited
    setEditingService(service._id)
    setPutFormData({
      name: service.name,
      description: service.description,
      price: service.price,
      image: service.image
    })
  }
  const handleSaveClick = async serviceId => {
    try {

      let imageUrl = putFormData.image

      // Only upload image if one was selected
      if (putServiceIMG != null) {
        const formData = new FormData()
        formData.append('file', putServiceIMG)
        formData.append('upload_preset', 'ESGimg')

        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dlcaybqqy/image/upload',
          formData
        )
        imageUrl = response.data.secure_url
        console.log('Image uploaded:', imageUrl)
      }

      // Create a new object with all form data and the image URL
      const putDataToSubmit = {
        ...putFormData,
        image: imageUrl
      }









      const updatedService = await updateService(serviceId, putDataToSubmit)

      if (updatedService) {
        // Fetch updated services list
        const data = await fetchAllServices()
        setServices(data)
        setEditingService(null) // Stop editing
        setPutFormData({
          name: '',
          description: '',
          price: '',
          image: ''
        })
      } else {
        throw new Error('Failed to update the service.')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className='services'>
        <h1>SERVICES</h1>
        <br></br>
        NEW SERVICE<br></br>
        <form onSubmit={handleServiceSubmit}>
          <label>Service Name</label>
          <br></br>
          <input
            type='text'
            name='name'
            value={serviceFormData.name}
            onChange={handleServiceChange}
            required
          ></input>
          <br></br>
          <label>Description</label>
          <br></br>
          <input
            type='text'
            name='description'
            value={serviceFormData.description}
            onChange={handleServiceChange}
            required
          ></input>
          <br></br>
          <label>Price</label>
          <br></br>
          <input
            type='text'
            name='price'
            value={serviceFormData.price}
            onChange={handleServiceChange}
            required
          ></input>
          <br></br>
          <label htmlFor='image'>Image</label>
          <input
            type='file'
            name='image'
            id='image'
            onChange={event => {
              setCreateServiceIMG(event.target.files[0])
            }}
          />
          <button type='submit'>Create New Service</button>
        </form>
        <br></br>
        <ul>
          {services.map(service => {
            return (
              <li key={service._id}>
                <p>
                  {editingService === service._id ? (
                    <>
                      <label>Name</label>
                      <br />
                      <input
                        type='text'
                        name='name'
                        value={putFormData.name}
                        onChange={handlePutChange}
                      />
                      <br />
                      <label>Description</label>
                      <br />
                      <input
                        type='text'
                        name='description'
                        value={putFormData.description}
                        onChange={handlePutChange}
                      />
                      <br />
                      <label>Price</label>
                      <br />
                      <input
                        type='text'
                        name='price'
                        value={putFormData.price}
                        onChange={handlePutChange}
                      />
                      <br />
                      <label>Image</label>
                      <br />
                      <input
            type='file'
            name='image'
            id='image'
            onChange={event => {
              setPutServiceIMG(event.target.files[0])
            }}
          />
                      <br />
                      <button onClick={() => {
  setEditingService(null);  // Stop editing
  setPutFormData({
    name: '',
    description: '',
    price: '',
    image: ''
  });  // Clear the form data
}}>Cancel</button>
                      <button onClick={() => handleSaveClick(service._id)}>
                        Save Changes
                      </button>
                    </>
                  ) : (
                    <>
                      <div>
                        Name:<br></br>
                        {service.name}
                      </div>
                      <div>
                        Description:<br></br>
                        {service.description}
                      </div>
                      <div>
                        Price:
                        <br />
                        {service.price}
                      </div>
                      <img src={service.image} alt={service.name}></img>
                      <br />
                      
                      <button onClick={() => handleEditClick(service)}>
                        UPDATE
                      </button>
                    </>
                  )}
                  <br></br>
                  <button name={service._id} onClick={deleteServiceButton}>
                    DELETE
                  </button>
                  <br></br>
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
