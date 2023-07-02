import React from 'react'

import { redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import Navbar from '../components/Navbar'
import Input from '../components/Input'

import validaInputs from '../components/validaInputs'

const Login = (props) => {


  return (
    <>
    <Navbar props={props} />
    <section className='container login'>

    <div className="section-content login">

      <div className="image-company">
        <img src="" alt="Logo" />
      </div>

      <div className="form-login">
        <form  id='form-login'>
        <div className="title">Entrar na conta</div>

          <Input name='usuarioLogin' icon={faUser} nomeSpan='Usuario'  />
           
            <label htmlFor="" onBlur={(e) => {validaInputs.outInput(e.target)}} onFocus={(e) => {validaInputs.clickRemoveSpan(e.target)}} onKeyUp={(e) => { validaInputs.removeSpan(e.target) }}>
              <span><FontAwesomeIcon icon={faKey} /> Senha</span>
              <input type="text" name='senhaLogin' />
              <span className='change-type' id='passwordHide' onClick={(e) => {validaInputs.changeInputType('form-login', 'show')}}><FontAwesomeIcon icon={faEye} /></span>
              <span className='change-type' id='passwordShow' onClick={(e) => {validaInputs.changeInputType('form-login', 'hide')}}><FontAwesomeIcon icon={faEyeSlash} /></span>
            </label>

            <Link to="/cadastro">Não possui conta? <span>cadastre-se</span> </Link>

            <button type='button' onClick={(e) => {validaInputs.validaForm('form-login')}}>Logar</button>
            
        </form>
      </div>

    </div>

    </section>
    
    </>
  )
}

export default Login