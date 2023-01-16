import axios from 'axios'
import React, { useState, useRef } from 'react'
import './news.scss'

const News = () => {

  const formulario = useRef(null)

  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')


  const handleEmail = (event) => {
    const value = event.target.value
    setEmail(value)
  }

  const handleInputs = () => {
    setEmail('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
        await axios.post('http://localhost:5000/newsletter/create', {
            "email": email,
        })
        console.log('Sucesso')
        setError({message: 'Create successful'})
        handleInputs()

    } catch (error) {
        
        setError({message: 'Error newsletter created'})
        console.log(error)
        setInterval(() => {
          setError(null)
        }, 2000)
    }
}

  return (
    <div className="newsletter">
        <div className="container__news">
            <div className="texto__news">
                <h2>Sign up for the newsletter</h2>
                <p>If you want relevant updates occasionally, sign up for the private newsletter. Your email is never shared.</p>
            </div>

            <form className="form__news" ref={formulario} onSubmit={handleSubmit}>
                <p>{error ? error.message : null}</p>
                <input 
                  type="text" 
                  name="enail" 
                  id="email" 
                  placeholder='Enter your email...'
                  value={email}
                  onChange={handleEmail}
                  required/>
                <button 
                  type="submit"
                  disabled={email === ''}>Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default News