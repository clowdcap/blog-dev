import React from 'react'
import './contact.scss'

import { BsLinkedin, BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
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
                    <form>
                        <input 
                            type="text" 
                            name="nome" 
                            id="nome_contact" 
                            placeholder='Your Name' />

                        <input 
                            type="email" 
                            name="email" 
                            id="email_contact"  
                            placeholder='Your Email'/>

                        <textarea 
                            name="text" 
                            id="text_contact" 
                            placeholder='Type here' />

                        <button type="submit">Contact</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact