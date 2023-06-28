import React from 'react'

import { redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'

const Login = (props) => {
  return (
    <>
    
    <section className='container login'>

    <div className="section-content login">

      <div className="image-company">
        <img src="" alt="Logo" />
      </div>

      <div className="form-login">
        <form  id='form-login'>
        <div className="title">Entrar na conta</div>

            <label htmlFor="">
              <span><FontAwesomeIcon icon={faUser} /> Usuario</span>
              <input type="text" />
            </label>
            <label htmlFor=""><span><FontAwesomeIcon icon={faKey} /> Senha</span>
              <input type="text" />
            </label>

            <Link to="/cadastro">Não possui conta? cadastre-se</Link>

            <button type='button'>Logar</button>
        </form>
      </div>

    </div>

    </section>
    
    </>
  )
}

export default Login