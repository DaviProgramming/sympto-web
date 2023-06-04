import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = (props) => {
  return (
    <nav>
      <div className="logo">
        SYMPTO
      </div>
      <div className="search-input">
        <div className="input-control">
        <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder='' />
         
        </div>
      </div>
      <div className="hamburguer">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  )
}

export default Navbar