import React from 'react'
import LogoInv from './../logo/LogoInv'
import './footer.scss'

const Footer = () => {

  const texto_rodape = ["Growth","Remote work","Strategy","Suspense","Creativity","UX design","Distributed teams","Digital product design<"]

  return (
    <footer className='rodape'>
      <div className="faixa__texto__rodape">
        {texto_rodape.map((item) => (
          <p>{item}</p>
        ))}
      </div>
      <div className="container__rodape center">

        <div className="logo">
          <LogoInv titulo="blog do zé"/>
        </div>

        <div className="textos__rodape">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Provident totam quo in voluptatum minima dolore, recusandae 
            placeat repellendus amet perferendis labore. Quibusdam earum sequi, 
            voluptatum beatae a hic debitis laboriosam.</p>
        </div>

        <div className="links__social">
          <p>WhatsApp</p>
          <p>Linkedln</p>
          <p>Discord</p>
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