import { Service } from '../models/service.schema.js'

export async function createService (req, res) {
  const { name, description, price,image } = req.body

  const service = new Service({
    name,
    description,
    price,
    image
  })

 try {
  res.send('Service Created Succesfully')
  await service.save()
 } catch (error) {console.log(error)
  
 }
}

export async function getServices (req, res) {
  const services = await Service.find({})
  res.send(services)
}

export async function getServiceById (req, res) {
  const { id } = req.params
  try {
    const service = await Service.find({_id:id})

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      })
    }

    res.status(200).json(service)
  } catch (error) {
    console.log(error)
  }
}
export async function updateService (req, res) {
  try {
    // get the id from the request params
    const { id } = req.params

    // destructure the request body
    const { name, description, price,image } = req.body

    // find the service by id
    const service = await Service.findById(id)

    // validation
    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      })
    }

    // update the service
    service.name = name
    service.description = description
    service.price = price
    service.image = image

    // save the post
    await service.save()

    // send the success response
    res.status(200).json(service)
  } catch (error) {
    console.log(error)
  }
}

export async function deleteService (req, res) {
  try {
    // get the id from the request params
    const { id } = req.params

    // find the service by id
    const service = await Service.findById(id)

    // validation
    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      })
    }

    // delete the post
    await Service.findByIdAndDelete(id)

    // send the success response
    res.status(200).json({
      success: true,
      message: 'service deleted successfully'
    })
  } catch (error) {
    console.log(error)
  }

 
}
