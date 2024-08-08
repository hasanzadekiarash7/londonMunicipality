import React from 'react'
import LmButton from './LmButton';
import '../assets/styles/EventCard.scss';
const EventCard = () => {
    return (
        <div style={{margin: '10px'}}>
            <div className='cardEvent'>
                <div className="max-width-1200 d-flex flex-center">
                    <img src="https://www.london.gov.uk/sites/default/files/styles/cta_component_xl/public/2024-08/LondonSkyline_0010%20%281%29.jpg?h=5ece81dd&itok=uddmEkBc" />
                    <div className="cardEvent-content">
                        <h1>Growing our economy – have your say</h1>
                        <p>What are your experiences of working and living in London? Take the survey to have your say and help shape our city’s future.</p>
                            <LmButton text="Join Talk London and take the survey" widthFull isDark></LmButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard
