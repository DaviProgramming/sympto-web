import React from 'react'

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = (props) => {
  return (
    <nav>
      <div className="logo">
        SYMPTO
      </div>
      <ul>
        <li>Inicio</li>
        <li>Planos</li>
        <li>Sobre</li>
      </ul>
      <div className="hamburguer">
      <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  )
}

export default Navbar