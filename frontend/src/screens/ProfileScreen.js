import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailsUser, updateUser } from '../actions/userActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { USER_UPDATE_RESET } from '../constants/userConstants'

const ProfileScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userUpdate = useSelector((state) => state.userUpdate)
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdate

  const dispatch = useDispatch()

  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_RESET })
      dispatch(detailsUser(userInfo._id))
    } else {
      setName(user.name)
      setEmail(user.email)
    }
  }, [dispatch, userInfo._id, user])

  function submitHandler(e) {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Password and Confirm Password does not match')
    } else {
      dispatch(updateUser({ userId: user._id, name, email, password }))
    }
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
            {loadingUpdate && <LoadingBox></LoadingBox>}
            {errorUpdate && (
              <MessageBox variant='danger'>{errorUpdate}</MessageBox>
            )}
            {successUpdate && (
              <MessageBox variant='success'>
                Profile Updated Successfully
              </MessageBox>
            )}
            <div>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                placeholder='Enter Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                placeholder='Enter Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input
                type='password'
                id='confirmPassword'
                placeholder='Confirm Password'
                onChange={(e) => setConfirmPassword(e.target.value)}
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
