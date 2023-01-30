
import React, {useState} from 'react'
import './header.scss'


import LogoTopo from '../logo/LogoTopo'

import { NavegacaoMobile } from '../navegacao/NavegacaoMobile'
import { NavLink } from 'react-router-dom'

import { AiOutlineMenu } from 'react-icons/ai'


const Header = () => {

  const [showMenu, setShowMenu] = useState(false)

  const ToggleMenu = (e) => {
    setShowMenu(!showMenu)      
  }

  const user = false

  return (
    <header className="topo">
        <div className="container__topo center">
        
          <LogoTopo titulo="Jose Marinho" />
          
          <nav className="nav__topo" >
            <ul className="lista__topo">
                
                <NavLink to="/" className='link__lista__topo'>
                    <li className="item__lista__topo">Home</li>
                </NavLink >

                <NavLink to="/blog" className='link__lista__topo'>
                    <li className="item__lista__topo">Blog</li>
                </NavLink >

                <NavLink to="/sobre" className='link__lista__topo'>
                    <li className="item__lista__topo">Sobre</li>
                </NavLink >

                <NavLink to="/contato" className='link__lista__topo'>
                    <li className="item__lista__topo">Contato</li>
                </NavLink >


                {user ? 
                
                    <ul className="lista__topo admin__reg">    
                        <NavLink to="/posts/create" className='link__lista__topo'>
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

          {showMenu ? <NavegacaoMobile /> : ''}


    <div className="mobile" onClick={ToggleMenu} >
        <AiOutlineMenu />
    </div>
          
        
        </div>
    </header>
  )
}

export default Header