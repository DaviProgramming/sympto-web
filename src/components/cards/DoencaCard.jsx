import React from 'react'

const DoencaCard = (props) => {
  return (
    <div className="card">
    <div className="card-content">
      <div className="img-doenca">
        <img
          src={props.imagem}
          alt={props.nome}
        />
      </div>

      <div className="nome-doenca">
        <span>{props.nome}</span>
        <span className="infos">
         {props.descricao}
        </span>
      </div>
    </div>
  </div>
  )
}

export default DoencaCard