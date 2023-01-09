import React from 'react'

import ImageCapa from './../../assets/pic-1.png'

import './destaque.scss'

const Destaque = () => {
  return (
    <section className="destaque">
      <div className="container__destaque center">
        <div className="img__destaque">
          <img src={ImageCapa} alt="" />
        </div>
        <div className="texto__destaque">
          <h1>A few words about this blog platform, Ghost, and how this site was made</h1>
          <p>Why Ghost (& Figma) instead of Medium, WordPress or other options?</p>
        </div>
      </div>

      <hr />
    </section>
  )
}

export default Destaque