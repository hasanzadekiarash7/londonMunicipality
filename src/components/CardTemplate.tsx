import React from 'react'
import LmButton from './LmButton'
import Cards from './Cards';
import '../assets/styles/who.scss';

type CardTemplate = {
  title: string,
  description?: string,
  haveAction?: boolean,
  cards: Array<{
    title: string,
    img: string,
    description: string
  }>
}

const CardTemplate = ({ cards, title, description, haveAction }: CardTemplate) => {
  return (
    <div className='width-full d-flex flex-center'>
      <div className='width-full max-width-1200'>
        <h1 className='card-part-title'>{title}</h1>
        <div className='d-flex flex-space-between width-full'>
          {description ? <p className='card-part-content'>{description}</p> : ''}
          <div>
            {haveAction ? <LmButton text='View all upcoming events' /> : ''}
          </div>
        </div>
        <div className={cards.length == 2 ? 'cardWrapper-2 width-full': cards.length == 3 ? 'cardWrapper-3 width-full' : 'cardWrapper-4 width-full'}>
          {
            cards.map((myCardsInfo, index) => <Cards key={index} item={myCardsInfo} />)
          }
        </div>
      </div>
    </div>
  )
}

export default CardTemplate
