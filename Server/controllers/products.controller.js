import {Product} from '../models/product.schema.js'





export async function createProduct (req, res) {
  const { name, description, price, image } = req.body



  const product = new Product({
    name,
    description,
    price,
    image,
    featured:false
  })

  uploadImage

 try {
  res.send('Product Created Succesfully')
  await product.save()
 } catch (error) {console.log(error)
  
 }
}

export async function getProducts (req, res) {
  const products = await Product.find({})
  res.send(products)
}

export async function getProductById (req, res) {
  const { id } = req.params
  try {
    const product = await Product.find({_id:id})

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      })
    }

    res.status(200).json(service)
  } catch (error) {
    console.log(error)
  }
}
export async function updateProduct (req, res) {
  try {
    // get the id from the request params
    const { id } = req.params

    // destructure the request body
    const { name, description, price,image,featured } = req.body

    // find the service by id
    const product = await Product.findById(id)

    // validation
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      })
    }

    // update the service
    product.name = name
    product.description = description
    product.price = price
    product.image = image
    product.featured = featured

    // save the post
    await product.save()

    // send the success response
    res.status(200).json(product)
  } catch (error) {
    console.log(error)
  }
}

export async function deleteProduct (req, res) {
  try {
    // get the id from the request params
    const { id } = req.params

    // find the service by id
    const product = await Product.findById(id)

    // validation
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      })
    }

    // delete the post
    await Product.findByIdAndDelete(id)

    // send the success response
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully'
    })
  } catch (error) {
    console.log(error)
  }

 
}
