import React from 'react'
import List from './List'
import '../assets/styles/footer.scss'
import Tags from './Tags'
const LmFooter = () => {
  const links1 = ['Who we are', 'Jobs', 'Venue hire', 'Contact us']
  const links2 = ['Talk London', 'City Hall blog', 'Keep up to date', 'Media centre']
  const links3 = ['Accessibility', 'Privacy policies', 'Terms and conditions', 'Freedom of Information']
  return (
    <div className='footer d-flex flex-center'>
      <div className='max-width-1200 width-full'>
        <h1>Useful links</h1>
        <div className='d-flex responsive-footer flex-space-between align-center'>
          <div className="footer-listWrapper">
            <List items={links1} />
            <List items={links2} />
            <List items={links3} />
          </div>
          <div className='footer-connect'>
            <h1>Connect with us</h1>
            <div className='d-flex responsive-footer-tags flex-center gap-2'>
              <Tags icon='mdi:youtube' backGroundColor="youtube" />
              <Tags icon='mdi:facebook' backGroundColor="facebook" />
              <Tags icon='mdi:twitter' backGroundColor="twitter" />
              <Tags icon='mdi:linkedin' backGroundColor="linkedin" />
            </div>
          </div>
        </div>
        <hr style={{margin: '30px 0px'}} />
          <div className='footer-bottom'>
            <p>We use cookies to ensure that we give you the best experience on our website. View cookie settings.</p>
            <p>© Copyright Greater London Authority 2024</p>
          </div>
      </div>
    </div>
  )
}

export default LmFooter
