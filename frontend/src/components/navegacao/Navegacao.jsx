import React from 'react'
import './navegacao.scss'

import { NavLink } from "react-router-dom"

const Navegacao = () => {
  return (
    <nav className="nav__topo">
        <ul className="lista__topo">
            
            <NavLink to="/" clpssName='link__lista__topo'>
                <li className="item__lista__topo">
                    Home
                </li>
            </NavLink >

            <NavLink to="/" clpssName='link__lista__topo'>
                <li className="item__lista__topo">
                    Blog
                </li>
            </NavLink >

            <NavLink to="/contato" clpssName='link__lista__topo'>
                <li className="item__lista__topo">
                    Contato
                </li>
            </NavLink >
        </ul>

        
    </nav>
  )
}

export default Navegacao