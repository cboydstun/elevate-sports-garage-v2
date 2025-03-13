import React from 'react'
import {
  fetchAllReviews,
  fetchReview,
  createReview,
  updateReview,
  deleteReview
} from '../../api/ReviewsApi'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './AdminReviews.css'
export default function AdminReviews () {
  const [reviewFormData, setReviewFormData] = useState({
    name: '',
    date: '',
    stars: '',
    body: '',
    image: ''
  })
  const [putFormData, setPutFormData] = useState({
    name: '',
    date: '',
    stars: '',
    body: '',
    image: ''
  })
  const [createReviewIMG, setCreateReviewIMG] = useState(null)
  const [updateReviewIMG, setUpdateReviewIMG] = useState(null)
  const [reviews, setReviews] = useState([])
  const [editingReview, setEditingReview] = useState(null)

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await fetchAllReviews()
      setReviews(data)
    }
    fetchReviews()
  }, [])

  const handleReviewSubmit = async e => {
    e.preventDefault()

    //input validation

    if (reviewFormData.stars < 1 || reviewFormData.stars > 5) {
      alert('Stars must be between 1 and 5')
      return
    }

    try {
      let imageUrl = reviewFormData.image

      // Only upload image if one was selected
      if (createReviewIMG != null) {
        const formData = new FormData()
        formData.append('file', createReviewIMG)
        formData.append('upload_preset', 'ESGimg')

        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dlcaybqqy/image/upload',
          formData
        )
        imageUrl = response.data.secure_url
        console.log('Image uploaded:', imageUrl)
      }

      // Create a new object with all form data and the image URL
      const reviewDataToSubmit = {
        ...reviewFormData,
        image: imageUrl
      }

      // Create the service with the complete data
      const newReview = await createReview(reviewDataToSubmit)

      if (newReview) {
        // Reset the form data after successful submission
        setReviewFormData({
          name: '',
          date: '',
          stars: '',
          body: '',
          image: ''
        })
        setCreateReviewIMG(null)

        // Fetch updated services list
        const data = await fetchAllReviews()
        setReviews(data)
      } else {
        throw new Error('Failed to create the Service.')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const deleteReviewButton = async e => {
    await deleteReview(e.target.name)
    const data = await fetchAllReviews()
    setReviews(data)
  }

  const handleReviewChange = e => {
    setReviewFormData(prev => ({
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
  const handleEditClick = review => {
    setEditingReview(review._id)
    setPutFormData({
      name: review.name,
      date: review.date,
      stars: review.stars,
      body: review.body,
      image: review.image
    })
  }
  const handleSaveClick = async reviewId => {
    try {


      let imageUrl = putFormData.image

      // Only upload image if one was selected
      if (updateReviewIMG != null) {
        const formData = new FormData()
        formData.append('file', updateReviewIMG)
        formData.append('upload_preset', 'ESGimg')

        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dlcaybqqy/image/upload',
          formData
        )
        imageUrl = response.data.secure_url
        console.log('Image uploaded:', imageUrl)
      }

      // Create a new object with all form data and the image URL
      const updatedDataToSubmit = {
        ...putFormData,
        image: imageUrl
      }





      const updatedReview = await updateReview(reviewId, updatedDataToSubmit)

      if (updatedReview) {
        // Fetch updated services list
        const data = await fetchAllReviews()
        setReviews(data)
        setEditingReview(null) // Stop editing
        setPutFormData({
          name: '',
          date: '',
          stars: '',
          body: '',
          image: ''
        })
      } else {
        throw new Error('Failed to update the service.')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const starsFunction = function (numberOfStars) {
    return Array.from({ length: 5 }).map((_, index) => (
      <span
        key={index}
        style={{
          cursor: 'pointer',
          color: index < numberOfStars ? 'gold' : 'gray',
          fontSize: '20px'
        }}
        onClick={() =>
          setReviewFormData({ ...reviewFormData, stars: index + 1 })
        }
      >
        &#9733;
      </span>
    ))
  }
  const editStarsFunction = function (numberOfStars) {
    return Array.from({ length: 5 }).map((_, index) => (
      <span
        key={index}
        style={{
          cursor: 'pointer',
          color: index < numberOfStars ? 'gold' : 'gray',
          fontSize: '20px'
        }}
        onClick={() => setPutFormData({ ...putFormData, stars: index + 1 })}
      >
        &#9733;
      </span>
    ))
  }
  return (
    <div>
      <div className='reviews'>
        <ul>
          <h1>REVIEWS</h1>
          <br></br>
          NEW REVIEW<br></br>
          <form></form>{' '}
          <form onSubmit={handleReviewSubmit}>
            <label>Name</label>
            <br></br>
            <input
              type='text'
              name='name'
              value={reviewFormData.name}
              onChange={handleReviewChange}
              required
            ></input>
            <br></br>
            <label>Date</label>
            <br></br>
            <input
              type='text'
              name='date'
              value={reviewFormData.date}
              onChange={handleReviewChange}
              required
            ></input>
            <br></br>
            <label>Stars (1-5)</label>
            <br />
            <div>{starsFunction(reviewFormData.stars)}</div>
            <br />
            <label>Body</label>
            <br></br>
            <input
              type='text'
              name='body'
              value={reviewFormData.body}
              onChange={handleReviewChange}
              required
            ></input>
            <br></br>
            <label htmlFor='image'>Image</label>
            <input
              type='file'
              name='image'
              id='image'
              onChange={event => {
                setCreateReviewIMG(event.target.files[0])
              }}
            />
            <button type='submit'>Create New Review</button>
          </form>
          <br></br>
        </ul>
        <ul>
          {reviews.map(review => {
            return (
              <li key={review._id}>
                <p>
                  {editingReview === review._id ? (
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
                      <label>Date</label>
                      <br />
                      <input
                        type='text'
                        name='date'
                        value={putFormData.date}
                        onChange={handlePutChange}
                      />
                      <br />
                      <label>Stars</label>
                      <br />
                      <div>{editStarsFunction(putFormData.stars)}</div>
                      <br />
                      <label>Body</label>
                      <br />
                      <input
                        type='text'
                        name='body'
                        value={putFormData.body}
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
                setUpdateReviewIMG(event.target.files[0])
              }}
            />
                      <br />
                      <button
                        onClick={() => {
                          setEditingReview(null) // Stop editing
                          setPutFormData({
                            name: '',
                            date: '',
                            stars: '',
                            body: '',
                            image: ''
                          }) // Clear the form data
                        }}
                      >
                        Cancel
                      </button>
                      <button onClick={() => handleSaveClick(review._id)}>
                        Save Changes
                      </button>
                    </>
                  ) : (
                    <>
                      <div>
                        Name:<br></br>
                        {review.name}
                      </div>
                      <div>
                        Date:<br></br>
                        {review.date}
                      </div>
                      <div>
                        Stars:
                        <br />
                        {starsFunction(review.stars)}
                      </div>
                      <img src={review.image} alt={review.name}></img>
                      <br />
                      <button onClick={() => handleEditClick(review)}>
                        UPDATE
                      </button>
                    </>
                  )}
                  <br></br>
                  <button name={review._id} onClick={deleteReviewButton}>
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
