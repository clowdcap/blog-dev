import React from 'react'
import './navegacao.scss'

import { NavLink } from "react-router-dom"

const Navegacao = () => {
    return (
        <nav className="nav__topo">
            <ul className="lista__topo">
                
                <NavLink to="/" className='link__lista__topo'>
                    <li className="item__lista__topo">Home</li>
                </NavLink >

                <NavLink to="/sobre" className='link__lista__topo'>
                    <li className="item__lista__topo">Sobre</li>
                </NavLink >

                <NavLink to="/contato" className='link__lista__topo'>
                    <li className="item__lista__topo">Contato</li>
                </NavLink >
                
            </ul>
        </nav>
    )
}

export default Navegacao