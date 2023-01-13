import React from 'react'
import './about.scss'

import Me from './../../assets/pic-1.png'

const About = () => {
    return (
        <section className='about'>
            <div className="container__about center">
                <div className="me__about">
                    <img src={Me} alt="Me" />
                </div>
                <div className="texto__about">
                    <div className="titulo__about">
                        <h3>Quem é</h3>
                        <h1>Jose Marinho ?</h1>
                    </div>
                    <div className="conteudo__about">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Tempora neque quis repellat temporibus illo aliquam illum sit, 
                            eligendi nisi voluptatum labore accusantium sint doloremque 
                            laudantium quasi porro qui inventore enim doloribus cupiditate 
                            assumenda ducimus repellendus rerum! Placeat maxime eligendi 
                            corporis reprehenderit perspiciatis distinctio magnam facilis?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About