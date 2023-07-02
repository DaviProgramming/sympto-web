import React , { useState }  from 'react'


import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faUser, faGear, faCreditCard } from '@fortawesome/free-solid-svg-icons'


const showOption = (option) => {

  if (option == 'perfil') {

    return (

      <div className="option-content">

        <div className="title">Perfil</div>
      </div>

    )

  } else if(option == 'config-conta'){

    return (

      <div className="option-content">

        <div className="title">Configurações da conta</div>
      </div>

    )

  } else if(option == 'config-pagamento'){

    return (

      <div className="option-content">

        <div className="title">Configurações de pagamento</div>
      </div>

    )

  }

}


const Settings = (props) => {


  const [option, setOption] = useState('perfil');


  return (
    <>

      <Navbar props={props} />

      <section className='container settings'>

        <div className="section-content settings">

          <div className="settings-options">

            <div className="perfil" onClick={(e) => {setOption('perfil')}}>
              <FontAwesomeIcon icon={faUser} /> <span>Perfil</span>
            </div>

            <div className="dados" onClick={(e) =>{setOption('config-conta')}}>
              <FontAwesomeIcon icon={faGear}  /> <span>Configurações da conta</span>
            </div>

            <div className="pagamento" onClick={(e) =>{setOption('config-pagamento')}}>
              <FontAwesomeIcon icon={faCreditCard} /> <span>Configurações de pagamento</span>

            </div>

          </div>

          

           {showOption(option)}



        </div>

      </section>

    </>
  )
}

export default Settings