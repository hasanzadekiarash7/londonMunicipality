import React from 'react'
import '../assets/styles/titleHeader.scss';
import { Link } from 'react-router-dom';
type ButtonProps = {
  text: string,
  isDark?: boolean,
  widthFull?: boolean,
  linkable?: boolean,
  url: string | ''
}

const LmButton = ({ text, isDark, widthFull, linkable, url }: ButtonProps) => {
  return (
    <div>
      <Link to={linkable ? url : '/'}>
        <button type='submit' className={`lm-btn ${isDark ? 'dark-mode' : ''} ${widthFull ? 'width-full' : ''}`}>
          {text}
        </button>
      </Link>
    </div>
  )
}

export default LmButton
