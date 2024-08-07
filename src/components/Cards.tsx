import React from 'react'
import '../assets/styles/cards.scss';
type card = {
    item: {
        title:string,
        img:string,
        description:string
    }
}
const Cards = ({item}:card) => {
  return (
    <div className='card'>
        <img src={item.img} alt="" />
        <h1>{item.title}</h1>
        <p>{item.description}</p>
    </div>
  )
}

export default Cards
