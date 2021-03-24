import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailsUser } from '../actions/userActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

const ProfileScreen = () => {
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(detailsUser(userInfo._id))
  }, [dispatch, userInfo._id])

  function submitHandler() {
    console.log('Update User')
  }

  return (
    <div>
      <form className='form' onSubmit={submitHandler}>
        <div>
          <h1>User Profile</h1>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant='danger'>{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                value={user.name}
                placeholder='Enter Name'
              />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                value={user.email}
                placeholder='Enter Email'
              />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                placeholder='Enter Password'
              />
            </div>
            <div>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input
                type='password'
                id='confirmPassword'
                placeholder='Confirm Password'
              />
            </div>
            <div>
              <label />
              <button type='submit' className='primary block'>
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  )
}

export default ProfileScreen
