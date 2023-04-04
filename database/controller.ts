import { NextApiRequest, NextApiResponse } from 'next'
import Products from '../model/product'

export async function getUsers(req: NextApiRequest, res: NextApiResponse) {
  try {
    const products = await Products.find({})
    if (!products) return res.status(404).json({ error: 'Data not Found' })
    console.log(products)
    res.status(200).json(products)
  } catch (error) {
    res.status(404).json({ error: 'Error while Fetching Data!' })
  }
}

export async function postUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const formData = req.body
    if (!formData)
      return res.status(404).json({ error: 'Form Data Not Provided!' })
    const product = await Products.create(formData)
    return res.status(200).json(product)
  } catch (error) {
    res.status(404).json({ error: 'Error while Posting Data!' })
  }
}

export async function putUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { productID } = req.query
    const formData = req.body

    if (!productID && !formData)
      res.status(404).json({ error: 'Product Not Selected' })

    const product = await Products.findOneAndUpdate({ productID }, formData, {
      new: true
    })
    res.status(200).json(product)
  } catch (error) {
    res.status(404).json({ error: 'Error while Updating the Data!' })
  }
}

export async function deleteUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { productID } = req.query

    if (!productID) res.status(404).json({ error: 'Product Not Selected' })

    const product = await Products.findOneAndDelete({ productID })
    res.status(200).json(product)
  } catch (error) {
    res.status(404).json({ error: 'Error while Updating the Data!' })
  }
}
