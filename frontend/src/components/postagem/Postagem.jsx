import React from 'react'

import './postagem.scss'

const Postagem = (props) => {
  return (
    <section className="conteudo__post">
      <div className="container__post">
        <div className="body__post">{props.conteudo}</div>

      </div>
    </section>
  )
}

export default Postagem