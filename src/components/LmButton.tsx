import React from 'react'
import '../assets/styles/titleHeader.scss';
type ButtonProps = {
    text: string,
    isDark?: boolean,
    widthFull?:boolean
}

const LmButton = ({text, isDark,widthFull}:ButtonProps) => {
  return (
    <div>
        <button className={`lm-btn ${isDark ? 'dark-mode' : ''} ${widthFull ? 'width-full' : ''}`}>
            {text}
        </button>
    </div>
  )
}

export default LmButton
