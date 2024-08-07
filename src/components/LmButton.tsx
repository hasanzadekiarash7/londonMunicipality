import React from 'react'
import '../assets/styles/titleHeader.scss';
type ButtonProps = {
    text: string,
}

const LmButton = ({text}:ButtonProps) => {
  return (
    <div>
        <button className='lm-btn'>
            {text}
        </button>
    </div>
  )
}

export default LmButton
