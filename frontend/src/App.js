import React from 'react'
import Product from './components/Product'
import data from './data'

function App() {
  return (
    <div className='grid-container'>
      <header className='row'>
        <div>
          <a className='brand' href='/'>
            amazkart
          </a>
        </div>
        <div>
          <a href='/cart'>Cart</a>
          <a href='/signin'>Sign In</a>
        </div>
      </header>
      <main>
        <div className='row center'>
          {data.products.map((product) => {
            return <Product key={product._id} product={product} />
          })}
        </div>
      </main>
      <footer className='row center'>All Rights Reserved &copy;</footer>
    </div>
  )
}

export default App
