import React from 'react'
import Navbar from '../components/Navbar'

import DivDoencas from '../components/divs/DivDoencas'
import DivHistorico from '../components/divs/DivHistorico'
import DivMedicos from '../components/divs/DivMedicos'

import imageUser from '../assets/james-person-1.jpg'
import sendLogin from '../system/sendLogin'

import { faHouse, faClipboardCheck, faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const UserHome = (props) => {


  const [page, setPage] = useState('inicio');

  const centerContent = (page) => {

    if (page == 'inicio') {

      return (

        <div className="content">
          <div className="title">Inicio</div>
        </div>

      )

    } else if (page == 'historico') {

      return (

        <div className="content">
          <div className="title">Historico</div>
        </div>

      )

    } else if (page == 'medicos') {

      return (

        <div className="content">
          <div className="title">Médicos</div>
        </div>
      )

    }

  }

  return (
    <>


      <Navbar props={props} />
      <section className='container user-home'>

        <div className="section-content user-home">

          <div className="user-info">
            <div className="content">

              <div className="userCard">
                <div className="img">
                  <img src={imageUser} alt="" />
                </div>
                <div className="nome">{sendLogin.data.usuario}</div>
              </div>

              <div className="choices">

                <div className="choice inicio" onClick={(e) => {setPage('inicio')}}>

                  <FontAwesomeIcon icon={faHouse} /> Inicio

                </div>

                <div className="choice historico" onClick={(e) => {setPage('historico')}}>

                  <FontAwesomeIcon icon={faClipboardCheck} /> Historicos

                </div>

                <div className="choice medicos" onClick={(e) => {setPage('medicos')}}>

                  <FontAwesomeIcon icon={faUserDoctor} /> Médicos


                </div>

              </div>




            </div>
          </div>

          <div className="dashboard-center">
            {centerContent(page)}
          </div>

          <div className="dados-dashboard">
            <div className="content">
              <div className="title">Consultas Agendadas</div>
            </div>
          </div>

        </div>

      </section>

    </>
  )

}

export default UserHome