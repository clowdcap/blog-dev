import React from 'react'

const BoxRepo = (props) => {
    return (
        <li key={props.id} className="item__repositorio">
            <h2>{props.nome}</h2>
            <h4>{props.linguagem}</h4>
            <a href={props.urlLink}
                target='_blank' 
                rel="noreferrer">
                Github Respositório
            </a>
            <p>{props.descricao}</p>
        </li>
    )
}

export default BoxRepo
