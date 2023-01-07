import React from 'react'
import LogoInv from './../logo/LogoInv'

const Footer = () => {
  return (
    <footer className='rodape'>
      <div className="faixa__texto__rodape"></div>
      <div className="container center">

        <div className="logo">
          <LogoInv titulo="blog do zé"/>
        </div>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident totam quo in voluptatum minima dolore, recusandae placeat repellendus amet perferendis labore. Quibusdam earum sequi, voluptatum beatae a hic debitis laboriosam.</p>
        <div className="links__social">
          <p>face</p>
          <p>insta</p>
          <p>discord</p>
        </div>

        <div className="copyright__rodape">
          <p>© 2012-2020 Nordic Rose Co.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer