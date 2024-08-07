import React from 'react'
import LmButton from './LmButton'
import Cards from './Cards';
import '../assets/styles/who.scss';

type whoWeAre = {
  title: string,
  description?: string,
  haveAction?: boolean
}

const WhoWeAre = ({ title, description, haveAction }: whoWeAre) => {
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
        <div className='cardWrapper width-full'>
          <Cards
            item={{ title: 'What the Mayor does', img: 'https://www.london.gov.uk/sites/default/files/styles/media_component_16_9_lg/public/2024-02/Large_Web_Image-Mayor-of-London-Sadiq-Khan.jpg?h=2a71c125&itok=6x6roV00', description: 'Sadiq Khan is the current Mayor. He provides citywide leadership and creates policies to improve London for all.' }} />
          <Cards
            item={{ title: 'What the London Assembly does', img: 'https://www.london.gov.uk/sites/default/files/styles/media_component_16_9_lg/public/chamber_cityhall_992x496_31mar22_2.jpg?h=6258ffef&itok=3t4mmyNp', description: 'The Assembly holds the Mayor and Mayoral advisers to account by examining their work to ensure promises to Londoners are delivered.' }} />
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
