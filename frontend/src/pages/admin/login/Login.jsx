import React from 'react'
import { useState } from 'react'

import { login } from './utils'

import './../admin.scss'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')  
    const [error, setError] = useState(null)  
    const [isRequesting, setIsRequesting] = useState(false)

    const handleEmail = (event) => {
        const value = event.target.value
        setEmail(value)
    }

    const handlePassword = (event) => {
        const value = event.target.value
        setPassword(value)
    }

    const handleInputs = () => {
        setEmail('')
        setPassword('')
    }

    const handleSubmit = (event) => {
        event.preventDefault() 

        setError(null)
        setIsRequesting(true)

        let values = { 
            email: email, 
            password: password 
        }

        login(values)
        .then(() => {
            setError(null)
            handleInputs()
            setError({message: 'Login successful'})
        }).catch((error) => {
            setError(error)
        }).finally(() => {
            setIsRequesting(false)
        })
    }

    return (
        <section className='admin'>
            <div className="container__admin center">
                <h1>Login</h1>
                <form>

                    <p>{
                        error ? 
                        error.message : 
                        null}</p>

                    <input 
                        type="email" 
                        name="usuario" 
                        autoComplete='off'
                        id="usuario" 
                        placeholder='Your e-mail' 
                        value={email}
                        onChange={handleEmail}
                        required />
                    
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder='Your password' 
                        value={password}
                        onChange={handlePassword}
                        required />
                    
                    <div className="remember__box">
                        <input 
                            type="checkbox" 
                            name="remember"
                            id="remember" />
                        
                        <span>Remember me</span>
                    </div>

                    <button 
                        className='button_admin'
                        onClick={handleSubmit}
                        type='submit'
                        disabled={email === '' || password.length < 6 || isRequesting }>Login</button>
                </form>
            </div>
        </section>
    )
}

export default Login