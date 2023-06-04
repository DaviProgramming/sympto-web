import React from 'react'

const Card = (props) => {
  return (

            <div className="card">

              <div className="card-image">

                <img src={props.img} alt="" />
                
              </div>

              <div className="card-text">

                <span>{props.text}</span>

              </div>

            </div>
         
  )
}

export default Card