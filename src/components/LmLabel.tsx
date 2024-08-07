import React from 'react'
import { Icon } from '@iconify/react';
import '../assets/styles/label.scss'
type labelProps = {
  text: string,
  appendIcon?: string | '',
  prependIcon?: string | '',
  linkAble?: boolean,
  onClick?: () => boolean
}

const lmLabel = ({ text, appendIcon, prependIcon, linkAble, onClick }: labelProps): React.ReactNode => {
  return (
    <div className={linkAble ? 'link label' : 'label'} onClick={onClick}>
      <Icon icon={typeof appendIcon === "string" ? appendIcon : ''} style={{ fontSize: '28px' }} />
      <div>
        {text}
        <div></div>
      </div>
      <Icon icon={typeof prependIcon === "string" ? prependIcon : ''} style={{ fontSize: '28px' }} />
    </div>
  )
}

export default lmLabel
