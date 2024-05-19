import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

function Login() {

  const [SignState, setSignState] = useState('Sign In')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const user_auth = async (event) => {
    event.preventDefault()
    setLoading(true)
    if (SignState === 'Sign In') {
      await login(email, password)
    } else {
      await signup(name, email, password)
    }
    setLoading(false)
  }

  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} />
    </div>:
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{SignState}</h1>
        <form >
          {SignState === 'Sign Up' ?
            <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder='Your name' /> : <></>}
          <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='Your Email' name="" id="" />
          <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Password' name="" id="" />
          <button onClick={user_auth} type='submit'>{SignState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remeber Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {SignState === 'Sign In' ? <p>New to Netflix? <span onClick={() => { setSignState('Sign Up') }}>Sign Up now</span></p>
            : <p>Already have account? <span onClick={() => { setSignState('Sign In') }}>Sign In now</span></p>}


        </div>
      </div>
    </div>
  )
}

export default Login
