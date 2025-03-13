import mongoose from 'mongoose'


// create a review schema
const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    date: { type: String, required: true },
    stars:{type:Number, required: true,validate: [ 

      function (value) {

        return value >= 1 && value <= 5 && Number.isInteger(value);

      },

      'Rating must be between 1 and 5'

    ]},
    body: {type:String,required:true},
    image:{type:String,required:false},
    featured:{type:Boolean,required:false}
  }
)

// export the model
export const Review = mongoose.model('Review', reviewSchema)