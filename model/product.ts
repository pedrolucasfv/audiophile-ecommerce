import { Schema, model, models } from 'mongoose'

const productSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  productID: String,
  image: String,
  category: String
})

const Products = models.product || model('product', productSchema)

export default Products
