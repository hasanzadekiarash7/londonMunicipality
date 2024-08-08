import React from 'react';
import NavBar from './components/Navbar';
import TitleHeader from './components/TitleHeader';
import CardTemplate from './components/CardTemplate';


const App = (): React.ReactNode => {
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
  return (
    <div>
      <NavBar />
      <TitleHeader />
      <CardTemplate title='Who we are' cards={whoCards} />
      <div className='width-full d-flex flex-center'>
      <hr className='line-res' />
      </div>
      <CardTemplate title='Priorities for London' description='Read about the things that matter most right now.' cards={priorities} />
    </div>
  )
}

export default App
