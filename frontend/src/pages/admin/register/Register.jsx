import axios from 'axios'
import React, { useState, useRef } from 'react'
import './../admin.scss'

const Register = () => {

    const formulario = useRef(null)

    const [error, setError] = useState(null)

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [telefone, setTelefone] = useState('')

    const handleUsername = (event) => {
        const value = event.target.value
        setUsername(value)
    }

    const handleEmail = (event) => {
        const value = event.target.value
        setEmail(value)
    }

    const handlePassword = (event) => {
        const value = event.target.value
        setPassword(value)
    }

    const handleNome = (event) => {
        const value = event.target.value
        setNome(value)
    }
    const handleSobrenome = (event) => {
        const value = event.target.value
        setSobrenome(value)
    }
    const handleTelefone = (event) => {
        const value = event.target.value
        setTelefone(value)
    }

    const handleInputs = () => {
        setUsername('')
        setNome('')
        setSobrenome('')
        setEmail('')
        setTelefone('')
        setPassword('')
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            await axios.post('http://localhost:5000/users/create', {
                "username" :username,
                "email": email,
                "passwords": password
            })
            console.log('Sucesso')
            setError({message: 'Create acount successful'})
            handleInputs()

        } catch (error) {
            setError({message: 'Error acount created'})
            console.log(error)
        }
    }

    return (
        <section className="admin">
            <div className="container__admin center">
                <h1>Register</h1>
                <form onSubmit={handleSubmit} ref={formulario} id='form_register'>
                    <p>{error ? error.message : null}</p>
                    <input 
                        type="text" 
                        name="usuario" 
                        id="usuario" 
                        placeholder='Your username*' 
                        value={username}
                        onChange={handleUsername}
                        required />
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email}
                        onChange={handleEmail}
                        placeholder='Your e-mail*'
                        required />

                    <input type="password" 
                        name="password" 
                        id="password" 
                        placeholder='Your password*' 
                        value={password}
                        onChange={handlePassword}
                        required />

                    <hr style={{width: "100%"}}/>
                    <input 
                        type="text" 
                        name="nome" 
                        id="nome" 
                        value={nome}
                        onChange={handleNome}
                        placeholder='Your name' />
                    <input 
                        type="text" 
                        name="sobrenome" 
                        id="sobrenome" 
                        value={sobrenome}
                        onChange={handleSobrenome}
                        placeholder='Your sobrename' />

                    <input 
                        type="text" 
                        name="telefone" 
                        id="telefone" 
                        value={telefone}
                        onChange={handleTelefone}
                        placeholder='Your phone' />
   
                    <span>* - Required fields</span>
                        
                    <button 
                        type='submit' 
                        className='button_admin'
                        disabled={email === '' || password.length < 3 || username.length < 3 }
                        >Register</button>
                </form>
            </div>
        </section>
    )
}


export default Register