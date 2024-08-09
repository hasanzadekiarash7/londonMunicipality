import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import '../assets/styles/footer.scss'
type Tags = {
    icon: string,
    backGroundColor: 'youtube' | 'facebook' | 'twitter' | 'linkedin'
}

const Tags = ({ icon, backGroundColor }: Tags) => {
    return (
        <div className={`icon-wrapper ${backGroundColor}`}>
            <Icon icon={icon} fontSize={'35px'} />
        </div>
    )
}

export default Tags
