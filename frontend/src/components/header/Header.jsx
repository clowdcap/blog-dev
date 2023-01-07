import React from 'react'

import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
  return (
    <header className="topo">
        <div className="container center">
            <div className="logo" id='logo'>
                blog do zé
            </div>
            <nav className="nav__topo">
                <ul className="lista__topo">
                  <li className="item__lista__topo">
                    <p clpssName='link__lista__topo'>Home</p>
                    <p clpssName='link__lista__topo'>Blog</p>
                    <p clpssName='link__lista__topo'>Contato</p>
                  </li>
                </ul>

                <div className="mobile">
                  <AiOutlineMenu />
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header