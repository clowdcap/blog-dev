import React from 'react'

import './card.scss'

const Card = (props) => {
  return (
    <div className="card__post">
      <div className="container__post">
        <div className="img__card__post">
          <img src={props.imageUrl} alt="Inside" />
        </div>
        <div className="title__card__post">
          <h3>{props.tituloPost}</h3>
        </div>
      </div>
    </div>
  )
}

export default Card