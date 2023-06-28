import React from 'react'

import { Link } from 'react-router-dom'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faIdCard, faKey } from '@fortawesome/free-solid-svg-icons'


const SignUp = (props) => {
  return (
    <section className='cadastro'>

      <div className="section-content cadastro">
        <div className="image-company">
          <img src="" alt="logo" />
        </div>

        <div className="form-cadastro">
          

          <form  id='form-cadastro'>

          <div className="title">
            Cadastre-se
          </div>

            <label htmlFor="">
              <span><FontAwesomeIcon icon={faUser} /> Nome completo</span>
              <input type="text" />
            </label>

            <label htmlFor="">
              <span><FontAwesomeIcon icon={faIdCard} /> CPF</span>
              <input type="text" />
            </label>
            
            <label htmlFor=""><span><FontAwesomeIcon icon={faEnvelope} /> Email</span>
              <input type="text" />
            </label>
            <label htmlFor=""><span><FontAwesomeIcon icon={faKey} /> Senha</span>
              <input type="text" />
            </label>

            <Link to="/login">Já possui conta? cadastre-se</Link>


            <button type='button'>Cadastrar</button>


          </form>



        </div>
      </div>

    </section>
  )
}

export default SignUp