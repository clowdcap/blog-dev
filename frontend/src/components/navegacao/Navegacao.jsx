import React from 'react'
import './navegacao.scss'

import { NavLink } from "react-router-dom"

const Navegacao = () => {

    const user = true
    
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


                {user ? 
                
                    <ul className="lista__topo admin__reg">    
                        <NavLink to="/write" className='link__lista__topo'>
                            <li className="item__lista__topo">Write</li>
                        </NavLink >

                        <NavLink to="/account" className='link__lista__topo'>
                            <li className="item__lista__topo">Account</li>
                        </NavLink >
                    </ul>
                : 
                    <ul className="lista__topo admin__reg">

                        
                        <NavLink to="/login" className='link__lista__topo'>
                            <li className="item__lista__topo">Login</li>
                        </NavLink >

                        <NavLink to="/register" className='link__lista__topo'>
                            <li className="item__lista__topo">Register</li>
                        </NavLink >
                    </ul>
                }
                


                
            </ul>

            
        </nav>
    )
}

export default Navegacao