import React from 'react'

const Card = (props) => {
  return (

            <div className="card">

              <div className="card-image">

                <img src={props.img} alt="" />
                
              </div>

              <div className="card-text">

                <span className='title'>{props.text}</span>
                <span className='body'>{props.textBody}</span>

              </div>

            </div>
         
  )
}

export default Card