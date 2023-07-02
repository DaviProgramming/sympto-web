import React from 'react'

const DoctorCard = (props) => {
    return (
        <div className="medico">

            <div className="img">
                <img src={props.imagem} alt="" />
            </div>

            <div className="infos">
                <div className="nome">{props.nome}</div>
                <div className="especialidade">{props.especialidade}</div>
            </div>
        </div>
    )
}

export default DoctorCard