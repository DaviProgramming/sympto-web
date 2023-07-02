import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faIdCard, faKey, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import validaInputs from '../components/validaInputs'

const Input = (props) => {
  return (
    <label htmlFor={props.name} onBlur={(e) => {validaInputs.outInput(e.target)}} onFocus={(e) => {validaInputs.clickRemoveSpan(e.target)} } onKeyUp={(e) => {validaInputs.removeSpan(e.target)}}>
    <span><FontAwesomeIcon icon={props.icon} />{props.nomeSpan}</span>
    <input type="text" name={props.name} />
  </label>
  )
}

export default Input