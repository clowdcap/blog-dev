import React from 'react'
import { Link } from "react-router-dom"
import './logo.scss'

const LogoTopo = (props) => {
  return (
    <Link to="/" >
      <div className="logo__topo">
        {props.titulo}
      </div>
    </Link>
  )
}

export default LogoTopo



