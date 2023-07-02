import React from 'react'

const HistoricoCard = (props) => {
    return (
        <div className="historico">

            <div className="header">Historico</div>

            <div className="content">

            <div className="numero-consulta">
                Numero Consulta: <span>{props.idConsulta}</span>
            </div>

            <div className="motivo-consulta">
                Motivo Consulta: <span>{props.motivoConsulta}</span>
            </div>

            <div className="medico-consulta">
                Medico consulta: <span>{props.medicoConsulta}</span>
            </div>

            </div>

           

        </div>
    )
}

export default HistoricoCard