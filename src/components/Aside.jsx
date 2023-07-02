import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faGear, faBell, faHeadset, faDoorOpen, faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import sendLogin from '../system/sendLogin'
import imageUser from '../assets/james-person-1.jpg'

const Aside = (props) => {

  let setDisplay = props.setDisplay;

  return (
    <aside className={props.display}>
      <div className="back" onClick={(e) => { setDisplay('hide') }}></div>

      <div className="aside-content">

        <div className="header"><FontAwesomeIcon icon={faCircleXmark} onClick={(e) => { setDisplay('hide') }} />

        </div>

        <div className="user"> <div className="img"><img src={imageUser} /></div>  <span>{sendLogin.data.usuario}</span></div>

        <div className="actions">

        <div className="action">
            <Link to="/home">
              <div className="action-title"><FontAwesomeIcon icon={faHome} /> <span>Inicio</span> </div>
            </Link>
          </div>

          <div className="action">
            <Link to="/configuracoes">
              <div className="action-title"><FontAwesomeIcon icon={faGear} /> <span>Configurações</span> </div>
            </Link>
          </div>

          <div className="action">
            <Link to="/notificacoes">
              <div className="action-title"><FontAwesomeIcon icon={faBell} /> <span>Notificações</span> </div>
            </Link>
          </div>

          <div className="action">
            <Link to="/suporte">
              <div className="action-title"><FontAwesomeIcon icon={faHeadset} /> <span>Suporte</span> </div>
            </Link>
          </div>

        </div>

        <div className="option-logout" onClick={(e) => {sendLogin.logoutUser()}}>
          <FontAwesomeIcon icon={faDoorOpen} /> Sair
        </div>

      </div>

    </aside>
  )
}

export default Aside