import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  
    const navigate = useNavigate()

  return (
    <>
      <h3 className='text-2xl'>Nothing here, please <b onClick={() => navigate('/home')} className='cursor-pointer underline'>click here</b> to go to home page</h3>
    </>
  )
}

export default ErrorPage
