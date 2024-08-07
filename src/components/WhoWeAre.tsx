import React from 'react'
import LmButton from './LmButton'

type whoWeAre = {
    title:string,
    cards:Array<object>,
    description?:string,
    haveAction?:boolean
}

const WhoWeAre = ({cards,title,description,haveAction}:whoWeAre) => {
  return (
    <div>
      <h1 className='card-part-title'>{title}</h1>
      <div className='d-flex flex-space-between'>
        <p className="card-part-desc">{description}</p>
        <div>
            {haveAction ? <LmButton text='View all upcoming events' /> : '' }
        </div>
      </div>
      <div className='cardWrapper'>
        {cards.forEach((item)=>{
            // <Cards />
            <h1>hello world {item}</h1>
        })}
      </div>
    </div>
  )
}

export default WhoWeAre
