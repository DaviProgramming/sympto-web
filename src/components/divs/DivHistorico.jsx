import React from 'react'

import HistoricoCard from '../cards/HistoricoCard'

const DivHistorico = (props) => {
  return (
    <div className="historicos">

    <div className="historicos-content">

      <HistoricoCard idConsulta="20103010" motivoConsulta="qualquer motivo aparente" medicoConsulta="Doutor Girafales" />
      <HistoricoCard idConsulta="20103010" motivoConsulta="qualquer motivo aparente" medicoConsulta="Doutor Girafales" />
      <HistoricoCard idConsulta="20103010" motivoConsulta="qualquer motivo aparente" medicoConsulta="Doutor Girafales" />


    </div>

  </div>
  )
}

export default DivHistorico