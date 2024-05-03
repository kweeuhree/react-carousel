import React from 'react';

const Card = ({name, picture, info}) => {
  return (
    <div className='card-container'>
        <div className='image-container'>
            <img src={picture} alt={name}></img>
        </div>
        
        <div className='name-info-container'>
            <div className='name-container'>
                <h2>{name}</h2>
            </div>

            <div className='info-container'>
                <p>{info}</p>
            </div>
        </div>

        
    </div>
  )
}

export default Card;