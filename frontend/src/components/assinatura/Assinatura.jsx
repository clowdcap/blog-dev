import React from 'react'
import './assinatura.scss'

const Assinatura = (props) => {
  return (
    <div className="assinatura__box">
        <div className="avatar__assinatura">
            <img src={props.avatar} alt="Avatar" />
        </div>

        <div className="content__assinatura">
        <p className="name"><span>{props.username}</span> {props.user_description}</p>
      </div>
    </div>
  )
}

export default Assinatura