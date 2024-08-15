import React from 'react'
import CardTemplate from '../components/CardTemplate'

const WhoWeAre: React.FC = (): React.ReactNode => {
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
  const priorities = [
    {
      title: 'How we work for London',
      img: 'https://www.london.gov.uk/sites/default/files/styles/media_component_16_9_lg/public/post_election_992x496.png?h=7bb73d6e&itok=We3Gsy-q',
      description: 'Watch our short video to find out what your Mayor, the London Assembly and City Hall are responsible for.'
    },
    {
      title: 'Governance and spending',
      img: 'https://www.london.gov.uk/sites/default/files/styles/media_component_16_9_lg/public/2022-03/Large_Web_Image-Crystal-building-Front-on-darker.jpg?h=0e0716be&itok=LKfdXUp7',
      description: "Our staff and procedures, how we spend our money and how we share our information.",
    },
    {
      title: "City Hall's partners",
      img: 'https://www.london.gov.uk/sites/default/files/styles/media_component_16_9_lg/public/lt_roughsleeping_490x245.png?h=a83fab32&itok=Po_48mLM',
      description: 'We work with London Fire Brigade, MOPAC, OPDC, Outer London Commission, TfL, London Prepared, LSDC, LFC, LLDC and the Wider South East group.'
    },
  ]
  const events = [
    {
      title: "City Hall's buildings and squares",
      img: 'https://www.london.gov.uk/sites/default/files/styles/media_component_1_1_sm/public/2024-06/london-multiply-roadshow-campaign-mark-800x802.png?h=fbf7a813&itok=OqEDTgkO',
      description: 'Find out about visiting and the history of City Hall, Trafalgar Square and Parliament Square Garden.'
    },
    {
      title: 'Take Part',
      img: 'https://www.london.gov.uk/sites/default/files/styles/media_component_1_1_lg/public/2022-06/Large_Web_Image-Iftar-at-Trafalgar-Square-56.jpg?h=d36b9736&itok=lYxMxP-k',
      description: "Find out more about our events, volunteering opportunities and how to have your say on big issues and help shape our plans and policies.",
    },
    {
      title: 'Diversity and our values',
      img: 'https://www.london.gov.uk/sites/default/files/styles/media_component_1_1_lg/public/website_tile-ourtime_0383.jpg?h=7bb73d6e&itok=p6nBjNXZ',
      description: "We ensure London's diversity is reflected in our staff, and guarantee equality and support for all who work with us."
    },
  ]
  const spotLight = [
    {
      title: 'Press and public affairs',
      img: 'https://www.london.gov.uk/sites/default/files/styles/media_component_16_9_lg/public/2022-01/Large_Web_Image-12938.jpg?h=23b1cdc1&itok=gPN8m5U-',
      description: 'View press releases and webcasts from the Mayor of London, London Assembly and London Assembly Members and find out how the Mayor lobbies the government and EU on issues of importance to Londoners.'
    },
    {
      title: 'City Hall Blog',
      img: 'https://www.london.gov.uk/sites/default/files/styles/media_component_16_9_lg/public/2021-12/London%20skyline%20at%20dusk_496x496_VRU_2Dec21.png?h=a2cec010&itok=To_z1LGT',
      description: 'Get the inside track on our work, read stories from guest bloggers and much more.'
    },
  ]
  return (
    <div>
      <CardTemplate title='Who we are' cards={whoCards} />
      <div className='width-full d-flex flex-center mt-10'>
        <hr className='line-res' />
      </div>
      <CardTemplate title='Working for a better London for everyone' cards={priorities} />
      <div className='width-full d-flex flex-center mt-10'>
        <hr className='line-res' />
      </div>
      <CardTemplate title='More about us and how to get involved' cards={events} />
      <div className='width-full d-flex flex-center mt-10'>
        <hr className='line-res' />
      </div>
      <CardTemplate title='Stay up to date with our work' cards={spotLight} />  
    </div>
  )
}

export default WhoWeAre
