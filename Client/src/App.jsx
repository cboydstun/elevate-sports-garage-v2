import React from 'react'

import Home from './pages/Home'
import Login from './pages/Login'
import Admin from './pages/Admin'
import ServicesPage from './pages/ServicesPage'
import Footer from './components/footer/Footer'
import NavBar from './components/navigationBar/Navbar'
import Facilities from './pages/FacilitiesPage'
import Testimonials from './pages/Testimonials'

import ProtectedRoute from './pages/ProtectedRoute'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ContactPage from './pages/ContactPage'

export default function App () {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route
          path='/protected'
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>

      <Footer />
    </Router>
  )
}
