import React from 'react'
import CardTemplate from '../components/CardTemplate'

const WhoWeAre:React.FC = ():React.ReactNode => {
  const whoCards = [
    {
      title: 'What the Mayor does',
      img: 'https://www.london.gov.uk/sites/default/files/styles/media_component_16_9_lg/public/2024-02/Large_Web_Image-Mayor-of-London-Sadiq-Khan.jpg?h=2a71c125&itok=6x6roV00',
      description: 'Sadiq Khan is the current Mayor. He provides citywide leadership and creates policies to improve London for all.'
    },
    {
      title: 'What the London Assembly does',
      img: 'https://www.london.gov.uk/sites/default/files/styles/media_component_16_9_lg/public/chamber_cityhall_992x496_31mar22_2.jpg?h=6258ffef&itok=3t4mmyNp',
      description: 'The Assembly holds the Mayor and Mayoral advisers to account by examining their work to ensure promises to Londoners are delivered.'
    },
  ]
  return (
    <div>
      <CardTemplate title='Who we are' cards={whoCards} />
      <CardTemplate title='Who we are' cards={whoCards} />
      <CardTemplate title='Who we are' cards={whoCards} />
      <CardTemplate title='Who we are' cards={whoCards} />
    </div>
  )
}

export default WhoWeAre
