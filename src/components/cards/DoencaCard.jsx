import React from 'react'

const DoencaCard = (props) => {
    return (
        <div className="doenca">
            <div className="nome">{props.nome}</div>
            <div className="infos">{props.descricao}</div>
        </div>
    )
}

export default DoencaCard