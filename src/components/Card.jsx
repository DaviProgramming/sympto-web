import React from 'react'

const Card = (props) => {
  return (

            <div className="card">

              <div className="card-image">

                <img src={props.img} alt="" />
                
              </div>

              <div className="card-text">

                <span className='card-text-title'>{props.text}</span>
                <span className='card-text-body'>{props.textBody}</span>

              </div>

            </div>
         
  )
}

export default Card