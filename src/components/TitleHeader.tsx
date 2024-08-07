import React from 'react';
import '../assets/styles/titleHeader.scss';
import LmButton from './LmButton';
const TitleHeader = () => {
    return (
        <>
            <div className='title-header width-full'>
                <div style={{maxWidth: '1200px',width: "100%"}}>
                    <h1 className="title">We are London.</h1>
                    <div className="desc">
                        <p className="content">
                            Find out about the work of the Mayor, the London Assembly and the Greater London Authority.
                        </p>
                        <LmButton text='View our who we are page' />
                    </div>
                </div>
            </div>
            <img src="https://www.london.gov.uk/sites/default/files/styles/hero_image_sm/public/2023-05/Large_Web_Image-Eurovision-London-Landmarks.jpg?h=403a00f0&itok=-t6Y454a" className='width-full' alt="" />
        </>
    )
}

export default TitleHeader
