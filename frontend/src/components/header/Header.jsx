
import React, {useState} from 'react'
import './header.scss'


import LogoTopo from '../logo/LogoTopo'
import Mobile from '../mobile/Mobile'
import Navegacao from '../navegacao/Navegacao'



const Header = () => {

  const [showMenu, setShowMenu] = useState(false)

  const ToggleMenu = () => {
      setShowMenu(!showMenu)
  }

  return (
    <header className="topo">
        <div className="container__topo center">

            <LogoTopo titulo="blog do zé" />
         
            <Navegacao />

            <Mobile onClick={ToggleMenu} />
            
        </div>
    </header>
  )
}

export default Header