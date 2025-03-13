import mongoose from 'mongoose'


// create a contact schema
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    body: String
  },
{timestamps:true}
)

// export the model
export const Contact = mongoose.model('Contact', contactSchema)