import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import data from '../data'

const ProductScreen = (props) => {
  console.log(props)
  console.log(data.products.find((item) => item._id === props.match.params.id))
  console.log(typeof props.match.params.id)

  const product = data.products.find(
    (item) => item._id === props.match.params.id
  )
  console.log(product)
  if (!product) return <div>Product Not Found</div>

  return (
    <>
      <Link to='/'>Back to Result</Link>
      <div className='row top'>
        <div className='col-2'>
          <img className='large' src={product.image} alt={product.name} />
        </div>
        <div className='col-1'>
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </li>
            <li>Price : ${product.price}</li>
            <li>
              Description : <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className='col-1'>
          <div className='card card-body'>
            <ul>
              <li>
                <div className='row'>
                  <div>Price</div>
                  <div className='price'>${product.price}</div>
                </div>
              </li>
              <li>
                <div className='row'>
                  <div>Status</div>
                  {product.countInStock > 0 ? (
                    <span className='success'>In Stock</span>
                  ) : (
                    <span className='danger'>Out Of Stock</span>
                  )}
                </div>
              </li>
              <li>
                <button className='primary block'>Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductScreen
