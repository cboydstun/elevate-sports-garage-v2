import mongoose from 'mongoose'


// create a service schema
const serviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    image:{type:String,required:false}
  }
)

// export the model
export const Service = mongoose.model('Service', serviceSchema)