import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom' 
import { useNavigate } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {login, error, loading, success} = useLogin()

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
  }
  useEffect(() => {
    setTimeout(() => {
      success && navigate("/merchant-dashboard")
    }, 3000);
  }, [success])

  return (
    <div>
        <div className='md:grid grid-cols-2 gap-8 min-h-screen bg-[#e3b1b1a8]'>
          <div className='my-auto px-7 md:px-0 md:pl-14 w-full pt-20'>
            <div>
              <h1 className='font-bold text-3xl md:text-4xl pb-10 md:pb-14 text-[#7F3DFF]'>Login</h1>
              <p className='text-[#7F3DFF] pb-5 text-lg md:text-xl font-medium hidden md:block'>Welcome back!</p>
              <p className='text-gray-600 mb-8'>Login to keep track of your bills and apartment. </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
              {
                error && <p className='errorStyle my-4'>{error}</p>
              }
              {
                success && <p className='successStyle my-4'>You have successfully logged in!</p>
              }                  
              </div>
              <div>
                <input
                className='inputStyle' 
                type="email"
                placeholder='Enter your email'
                onChange={(e) => setEmail(e.target.value)}
                value={email} />
                <input 
                className='inputStyle' 
                type="password"
                placeholder='Enter your password'
                onChange={(e) => setPassword(e.target.value)}
                value={password} />
                <button disabled={loading} className='formButton' type='submit'>{
                    loading ? "Loading..." : "Login"
                }</button>
              </div>
              <Link to="/signup" className='text-gray-600'>Not registered? <span className='text-[#7F3DFF]'>Sign up!</span></Link>
            </form>
        </div>
        <div className='hidden md:block'>
            <img className='w-[90%]' src="/images/Saly-10.png" />
          </div>
        </div>
    </div>
  )
}

export default Login