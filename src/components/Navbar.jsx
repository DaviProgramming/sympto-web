import React, { useState } from 'react'
import { faBars, faSearch, faUser, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'

import Aside from './Aside'


const Navbar = (props) => {

  const [callAside, setCallAside] = useState('hide');

  const callAside2 = (display) =>{

    if(display == 'flex'){

      return(
        <Aside />
      )

    }

  }


  if(props.props.logado == 'false'){

    return (
      <>
      <nav>
  
  
        <div className="logo">
          {/* <FontAwesomeIcon icon={faBars} onClick={(e) => {
            setCallAside('grid');
          }} /> */}
          <Link to='/'>SYMPTO</Link>
        </div>
  
        <div className="search">
  
        <div className="form-control">
          <input type="text" name="input-search" id="input-search" placeholder='Pesquisa' />
          <span><FontAwesomeIcon icon={faSearch} /> </span>
        </div>
        
        </div>
  
        <div className="login">
        <Link to="/login"> <FontAwesomeIcon icon={faUser} /> Entrar na sua conta</Link>
  
  
        </div>
  
  
        
      </nav>
  
  
      {/* <Aside display={callAside} setDisplay={setCallAside}/> */}
  
      </>
    )

  } else {

    return (
      <>
      <nav>
  
  
        <div className="logo">
          {/* <FontAwesomeIcon icon={faBars} onClick={(e) => {
            setCallAside('grid');
          }} /> */}
          <Link to='/home'>SYMPTO</Link>
        </div>
  
        <div className="search">
  
        <div className="form-control">
          <input type="text" name="input-search" id="input-search" placeholder='Pesquisa' />
          <span><FontAwesomeIcon icon={faSearch} /> </span>
        </div>
        
        </div>
  
        <div className="login">

          
        <div className='user-infos' onClick={(e) => { setCallAside('flex') } }> <FontAwesomeIcon icon={faUser}/> <span>{props.props.usuario}</span>  </div>
  
  
        </div>
  
  
        
      </nav>
  
  
      <Aside display={callAside} setDisplay={setCallAside}/>
  
      </>
    )
  }

  
}

export default Navbar