import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faIdCard, faKey, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import Navbar from '../components/Navbar'
import Input from '../components/Input'

import validaInputs from '../components/validaInputs'


const SignUp = (props) => {
  return (
    <>
      <Navbar props={props} />
      <section className='cadastro'>

        <div className="section-content cadastro">
          <div className="image-company">
            <img src="" alt="logo" />
          </div>

          <div className="form-cadastro">


            <form id='form-cadastro'>

              <div className="title">
                Cadastre-se
              </div>

              <Input name='nomeCadastro' icon={faUser} nomeSpan='Nome completo' />

              <Input name='cpfCadastro' icon={faIdCard} nomeSpan='CPF' />

              <Input name='emailCadastro' icon={faEnvelope} nomeSpan='Email' />

              
                            
              <label htmlFor="senhaCadastro" onBlur={(e) => {validaInputs.outInput(e.target)}} onFocus={(e) => {validaInputs.clickRemoveSpan(e.target)}} onKeyUp={(e) => { validaInputs.removeSpan(e.target) }}>
                <span><FontAwesomeIcon icon={faKey} /> Senha</span>
                <span className='change-type' id='passwordHide' onClick={(e) => { validaInputs.changeInputType('form-cadastro', 'show') }}><FontAwesomeIcon icon={faEye} /></span>
                <span className='change-type' id='passwordShow' onClick={(e) => { validaInputs.changeInputType('form-cadastro', 'hide') }}><FontAwesomeIcon icon={faEyeSlash} /></span>

                <input type="password" name='senhaCadastro' />
              </label>

              <Link to="/login">Já possui conta? <span>Entre</span> </Link>


              <button type='button' onClick={(e) => { validaInputs.validaForm('form-cadastro') }}>Cadastrar</button>


            </form>



          </div>
        </div>

      </section>
    </>
  )
}

export default SignUp