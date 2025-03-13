import mongoose from 'mongoose'


// create a product schema
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    image: {type:String, required:false},
    featured:{type:Boolean,required:true}
  }
)

// export the model
export const Product = mongoose.model('Product', productSchema)