import React, { useState } from 'react';
import AdminServices from '../components/admin/AdminServices';
import AdminReviews from '../components/admin/AdminReviews';
import AdminContacts from '../components/admin/AdminContacts';
import AdminHours from '../components/admin/AdminHours';
import './Admin.css';

export default function Admin() {
  // State to track which section is selected
  const [selectedSection, setSelectedSection] = useState('services');

  // Function to handle click event on sidebar items
  const handleSidebarClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className='container'>
      <div className='side-bar'>
        <ul>
          <li onClick={() => handleSidebarClick('services')}>Services</li>
          <li onClick={() => handleSidebarClick('reviews')}>Reviews</li>
          <li onClick={() => handleSidebarClick('contacts')}>Contacts</li>
          <li onClick={() => handleSidebarClick('hours')}>Hours</li>
        </ul>
      </div>

      <div className='display-container'>
        {selectedSection === 'services' && <AdminServices className="services" />}
        {selectedSection === 'reviews' && <AdminReviews className="reviews" />}
        {selectedSection === 'contacts' && <AdminContacts className="contacts" />}
        {selectedSection === 'hours' && <AdminHours className="hours" />}
      </div>
    </div>
  );
}