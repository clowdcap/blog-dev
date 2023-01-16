import React, { useRef, useState } from 'react'
import './contact.scss'
import axios from 'axios'
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
    
    const formulario = useRef(null)

    const [error, setError] = useState(null)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [descricao, setDescricao] = useState('')

    // var myForm = document.querySelector('.form__contact')

    const handleName = (event) => {
        const value = event.target.value
        setName(value)
    }

    const handleEmail = (event) => {
        const value = event.target.value
        setEmail(value)
    }

    const handleDescricao = (event) => {
        const value = event.target.value
        setDescricao(value)
    }

    // const handleReset = () => {
    //     var inputs__form = document.querySelectorAll('.fomulario__contact')
    //     inputs__form.forEach(input => {
    //         input.value = ''
    //     })
    // }

    const handleInputs = () => {
        setName('')
        setEmail('')
        setDescricao('')
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            await axios.post('http://localhost:5000/contact/create', {
                "name": name,
                "email": email,
                "descricao": descricao
            })

            console.log('Sucesso')
            setError({message: 'Create contact successful'})
            handleInputs()

        } catch (error) {
            setError({message: 'Error contact created'})
            console.log(error)
        }
    }

    // async function create_contact(e) {
    //     e.preventDefault()
        
    //     var nome = e.target[0].value
    //     var email = e.target[1].value
    //     var mensagem = e.target[2].value

    //     console.log('FORM DATA: ', myForm)
    //     console.log(nome, email, mensagem)
        
    //     try {
    //         await axios.post('http://localhost:5000/contact/create', {
    //             "nome": nome,
    //             "email": email,
    //             "mensagem": mensagem,
    //         })

    //     alert('Contato registrador com sucesso');

    //     } catch (error) {
    //     console.log(error)
    //         alert('Falha ao registrar o contato, tente novamente')
    //     } finally {
    //         handleReset()
    //     }
    // }

    return (
        <section className="contact">
            <div className="container__contact center">
 
                <div className="text__contact">
                    <h1>Contato</h1>
                    <ul className='list__contact'>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eaque commodi numquam soluta, doloribus sit harum. </li>
                        <li>
                            <p>Call me to WhatsApp:</p>
                            <a href='tel:+5541992725388'>
                                < BsWhatsapp className='icone'/> +55 41 9 9272-5388
                            </a>
                        </li>

                        <li>
                            <p>Local: <span>Curitiba, PR</span></p>
                        </li>

                        <li>
                            <p>Visite my Linkedln</p>
                            <a 
                                href="https://www.linkedin.com/in/jose-marinho-dev/"
                                target="_blank" 
                                rel="noreferrer">
                                    <BsLinkedin className='icone' /> Click here
                            </a>
                        </li>


                        
                    </ul>
                </div>

                <div className="form__contact">
                    <div className="titulo__form">
                        <h1>Entre em contato comigo</h1>
                    </div>
                    <form className='fomulario__contact' onSubmit={handleSubmit} ref={formulario}>
                        <p>{error ? error.message : null}</p>
                        <input 
                            type="text" 
                            name="nome" 
                            id="nome_contact" 
                            placeholder='Your Name'
                            value={name}
                            onChange={handleName}
                            required />

                        <input 
                            type="email" 
                            name="email" 
                            id="email_contact"  
                            placeholder='Your Email'
                            value={email}
                            onChange={handleEmail}
                            required />

                        <textarea 
                            name="mensagem" 
                            id="text_contact" 
                            value={descricao}
                            onChange={handleDescricao}
                            placeholder='Type here' />

                        <button
                            type="submit"
                            disabled={ email === '' || name === '' }
                            >Contact</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact