import React, { useState } from 'react'
import CheckoutSteps from '../components/CheckoutSteps'

const ShippingScreen = () => {
  const [fullName, setFullName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [country, setCountry] = useState('')

  function submitHandler(e) {
    e.preventDefault()
  }
  return (
    <div>
      <CheckoutSteps step1 step2 />
      <form className='form' onSubmit={submitHandler}>
        <div>
          <h1>Shipping Addess</h1>
        </div>
        <div>
          <label htmlFor='fullName'>Full Name</label>
          <input
            type='text'
            id='fullName'
            placeholder='Enter Full Name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            id='address'
            placeholder='Enter Address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='city'>City</label>
          <input
            type='text'
            id='city'
            placeholder='Enter City'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='postalCode'>Postal Code</label>
          <input
            type='text'
            id='postalCode'
            placeholder='Enter Postal code'
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='country'>Country</label>
          <input
            type='text'
            id='country'
            placeholder='Enter Country'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div>
          <label />
          <button type='submit' className='primary'>
            Continue
          </button>
        </div>
      </form>
    </div>
  )
}

export default ShippingScreen
