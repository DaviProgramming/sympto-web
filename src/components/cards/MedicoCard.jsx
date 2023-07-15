import React from "react";

const MedicoCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="img-doctor">
          <img
            src={props.imagem}
            alt={props.nome}
          />
        </div>
        <div className="infos">
          <div className="nome-doctor">{props.nome}</div>
          <div className="infos-doctor">{props.especialidade}</div>
        </div>
        <div className="action">
          <button className="agenda">Agendar Consulta</button>
        </div>
      </div>
    </div>
  );
};

export default MedicoCard;
