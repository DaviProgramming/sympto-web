import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const Aside = (props) => {
  return (
    <aside className={props.display}>

    <div className="aside-content">

    <div className="header"><FontAwesomeIcon icon={faCircleXmark}/></div>

    

    </div>


    <div className="back"></div>

    </aside>
  )
}

export default Aside