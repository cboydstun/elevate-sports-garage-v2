import React from 'react'
import { useState, useEffect } from 'react'

import { getContacts,deleteContact } from '../../api/ContactsApi'
export default function AdminContacts() {


      const deleteContactButton = async e => {
        deleteContact(e.target.name)
        const data = await getContacts()
        setContacts(data)
      }
       
       
    
    const [contacts,setContacts] = useState([]) 
    useEffect(() => {
      const getAllContacts = async () => {
        const data = await getContacts()
        setContacts(data)
      }
      getAllContacts()
    }, [])


  return (
    <div>
      <div className="contacts">
      <ul>
        <h1>CONTACTS</h1>
      {contacts.map(contact => {
          return (
            <li key={contact._id}>
              <p>
                {contact.name}
                <br></br>
                {contact.email}
                <br></br>
                {contact.body}
                <br></br>
                <button name={contact._id} onClick={deleteContactButton}>
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
