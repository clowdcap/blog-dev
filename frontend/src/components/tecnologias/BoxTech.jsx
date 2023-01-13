import React from 'react'

const BoxTech = (props) => {
    return (
        <div className="box__tech">
            <div className="icone__box">
                {props.icone1}
                {props.icone2}
                {props.icone3}
            </div>
            <div className="nome__box">
                <h3>{props.linguagem}</h3>
                <p>{props.descricao1}</p>
                <p>{props.descricao2}</p>
            </div>
        </div>
    )
}

export default BoxTech