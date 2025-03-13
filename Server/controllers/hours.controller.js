import {Hours} from '../models/hours.schema.js';





export async function getHours(req,res) {
  try {
     const hours = await Hours.find({})
      res.send(hours)
  } catch (error) {
    console.log(error)
  }
}

export async function updateHours (req, res) {
  try {
   
    

   
    const {monday,tuesday,wednesday,thursday,friday,saturday,sunday,holiday} = req.body
const id ="67ae84b5dc39a5d0e0835196"
   console.log('ping')
   console.log(req.body)
    const hours = await Hours.findById(id)
    if (!hours) {
      console.log('well shit')
      return res.status(404).json({
        success: false,
        message: 'hours not found',
        
      })
    }


    hours.monday = monday
    hours.tuesday = tuesday
    hours.wednesday = wednesday
    hours.thursday = thursday
    hours.friday = friday
    hours.saturday = saturday
    hours.sunday = sunday
    hours.holiday = holiday

     // save the hours
    await hours.save()
   

    // send the success response
    res.status(200).json(hours)
  } catch (error) {
    console.log(error)
  }
}




  
   
  


