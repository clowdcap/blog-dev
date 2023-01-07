import React from 'react'
import './header.scss'


import LogoTopo from '../logo/LogoTopo'
import Mobile from '../mobile/Mobile'
import Navegacao from '../navegacao/Navegacao'



const Header = () => {
  return (
    <header className="topo">
        <div className="container__topo center">

            <LogoTopo titulo="blog do zé" />
         
            <Navegacao />

            <Mobile />
            
        </div>
    </header>
  )
}

export default Header