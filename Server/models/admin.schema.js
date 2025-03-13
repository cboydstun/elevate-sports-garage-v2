import mongoose from 'mongoose'


// create a admin schema
const adminSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    password: { type: String, required: true },
    body: String
  }
)

// export the model
export const Admin = mongoose.model('Admin', adminSchema)