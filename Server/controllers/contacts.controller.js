import {Contact} from '../models/contact.schema.js';
import nodemailer from 'nodemailer';




async function sendEmail(email,body,name) {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
    port: 465,
    secure: true,
    auth: {
      user:  process.env.NODEMAIL,
      pass:  process.env.NODEMAILPASS
    }
  });

  // Define email options
  const mailOptions = {
    from: email,
    to: 'jdhaenni@gmail.com',
    subject: `Message from ${name}-via ElevateSportsGarage.com`,
    text: body
  };

  // Send the email
  try {
    console.log('lol')
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}








export async function getContacts(req,res) {
  try {
     const contacts = await Contact.find({})
      res.send(contacts)
  } catch (error) {
    console.log(error)
  }
}


export async function postContact(req,res) {
    
    const{name,email,body} = req.body
    
 
    const contact = new Contact({
        name,
        email,
        body
    })
    sendEmail(email,body,name)
    
    try {
        await contact.save();
    res.send('Message Sent Succesfully')
    } catch (error) {
        console.log(error)
    }
}

export async function deleteContact (req, res) {
    try {
      // get the id from the request params
      const { id } = req.params
  
      // find the service by id
      const contact= await Contact.findById(id)
      console.log(contact)
      // validation
      if (!contact) {
        return res.status(404).json({
          success: false,
          message: 'Contact not found'
        })
      }
  
      // delete the post
      await Contact.findByIdAndDelete(id)
  
      // send the success response
      res.status(200).json({
        success: true,
        message: 'contact deleted successfully'
      })
    } catch (error) {
      console.log(error)
    }
  
   
  }
  


