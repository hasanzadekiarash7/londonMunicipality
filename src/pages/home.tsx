import React from 'react'
import TitleHeader from '../components/TitleHeader';
import CardTemplate from '../components/CardTemplate';
import EventCard from '../components/EventCard';
import LmForm from '../components/LmForm';
const home = (): React.ReactNode => {
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
        title: 'Help with the cost of living',
        img: 'https://www.london.gov.uk/sites/default/files/styles/media_component_16_9_lg/public/2023-05/People%20pointing%20at%20laptop%20screen_1173x1182_Equalities_5May23.jpg?h=8779381a&itok=ELXOGuGi',
        description: 'Find out what support is available to help you manage the cost of living in London.'
      },
      {
        title: 'Building a brighter future for young Londoners',
        img: 'https://www.london.gov.uk/sites/default/files/styles/media_component_16_9_lg/public/2022-09/Large_Web_Image-VRU-Edmonton-Eagles-Boxing-Club.jpg?h=0fcb6ec9&itok=d7ls99KV',
        description: "We're building a brighter future for young Londoners by building services which are tailored to their needs.",
      },
      {
        title: 'End homelessness',
        img: 'https://www.london.gov.uk/sites/default/files/styles/media_component_16_9_lg/public/lt_roughsleeping_490x245.png?h=a83fab32&itok=Po_48mLM',
        description: 'As Mayor of London, I’m on a mission to end homelessness in our city. Will you join me?'
      },
    ]
    const events = [
      {
        title: 'London Multiply Roadshow at Una Marson Library',
        img: 'https://www.london.gov.uk/sites/default/files/styles/media_component_1_1_sm/public/2024-06/london-multiply-roadshow-campaign-mark-800x802.png?h=fbf7a813&itok=OqEDTgkO',
        description: 'Visit Una Marson Library for a creative day of cardboard architecture and an opportunity to learn about measuring and angles.'
      },
      {
        title: 'London Multiply Roadshow at Edmonton Green Shopping Centre',
        img: 'https://www.london.gov.uk/sites/default/files/styles/media_component_1_1_sm/public/2024-06/london-multiply-roadshow-campaign-mark-800x802.png?h=fbf7a813&itok=OqEDTgkO',
        description: "Visit Edmonton Green Shopping Centre for a fun day of crafting activities and number games.",
      },
      {
        title: 'UK Black Pride 2024',
        img: 'https://www.london.gov.uk/sites/default/files/styles/media_component_1_1_sm/public/2024-07/Large_Web_Image-Black-Pride-2023.jpg?h=02d8295b&itok=zkkY1VUq',
        description: 'Join us at UK Black Pride 2024'
      },
    ]
    const spotLight = [
      {
        title: 'Help with the cost of living',
        img: 'https://www.london.gov.uk/sites/default/files/styles/media_component_16_9_lg/public/2023-05/People%20pointing%20at%20laptop%20screen_1173x1182_Equalities_5May23.jpg?h=8779381a&itok=ELXOGuGi',
        description: 'Find out what support is available to help you manage the cost of living in London.'
      },
      {
        title: 'Building a brighter future for young Londoners',
        img: 'https://www.london.gov.uk/sites/default/files/styles/media_component_16_9_lg/public/2022-09/Large_Web_Image-VRU-Edmonton-Eagles-Boxing-Club.jpg?h=0fcb6ec9&itok=d7ls99KV',
        description: "We're building a brighter future for young Londoners by building services which are tailored to their needs.",
      },
      {
        title: 'End homelessness',
        img: 'https://www.london.gov.uk/sites/default/files/styles/media_component_16_9_lg/public/lt_roughsleeping_490x245.png?h=a83fab32&itok=Po_48mLM',
        description: 'As Mayor of London, I’m on a mission to end homelessness in our city. Will you join me?'
      },
      {
        title: 'End homelessness',
        img: 'https://www.london.gov.uk/sites/default/files/styles/media_component_16_9_lg/public/lt_roughsleeping_490x245.png?h=a83fab32&itok=Po_48mLM',
        description: 'As Mayor of London, I’m on a mission to end homelessness in our city. Will you join me?'
      },
    ]
    return (
      <div>
        <TitleHeader />
        <CardTemplate title='Who we are' cards={whoCards} />
        <div className='width-full d-flex flex-center'>
          <hr className='line-res' />
        </div>
        <CardTemplate title='Priorities for London' description='Read about the things that matter most right now.' cards={priorities} />
        <EventCard />
        <CardTemplate title='Upcoming events' description='Discover the exciting events happening in London.' haveAction cards={events} />
          <div className='width-full d-flex flex-center mt-10'>
            <hr className='line-res' />
          </div>
        <CardTemplate title='Spotlight on' cards={spotLight} />
        <div className='width-full d-flex flex-center'>
          <hr className='line-res' />
        </div>
        <LmForm />
      </div>
    )
  }

export default home
