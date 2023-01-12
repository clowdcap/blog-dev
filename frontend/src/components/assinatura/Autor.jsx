import React from 'react'
import { Link } from 'react-router-dom'
import './assinatura.scss'

const Autor = (props) => {
  
  return (
    <div className="autor__box">
      <Link to="/">
        <div className="avatar__user">
          <img src={props.avatar} alt="Avatar" />
        </div>
      </Link>
      <div className="content__user">
        <Link to="/"><p className="name">{props.username}</p></Link>
        <p className="data">{props.data} - {props.time_read}</p>
      </div>
    </div>
  )
}

export default Autor