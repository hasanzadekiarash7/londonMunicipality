import React, { useState } from 'react'
import '../assets/styles/Navbar.scss';
import { Icon } from '@iconify/react';
import LmLabel from './LmLabel';
import LmButton from './LmButton';
const NavBar = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false)
  return (
    <>
      <div className='navbar'>
        <div className="menu-right">
          <LmLabel linkAble text='home' prependIcon='mdi:home' />
        </div>
        <div className="menu-center">
          <img src="https://www.london.gov.uk/themes/estate/gla_core_theme/images/logo-mayoral.svg?sgv41t" alt="" />
          <img src="https://www.london.gov.uk/themes/estate/gla_core_theme/images/logo-assembly.svg?sgv41t" alt="" />
        </div>
        <div className="menu-left">
          <div className='search'>
            <LmLabel linkAble text='search' prependIcon='mdi:magnify' />
          </div>
          <div onClick={() => setShowSideBar(item => !item)}>
            <LmLabel linkAble text='menu' prependIcon='mdi:menu' />
          </div>
        </div>
      </div>
      <div className={showSideBar ? 'sideBar left-0' : 'sideBar'}>
        <div className="sideBar-list">
          <LmLabel linkAble text='who we are' />
          <div className="Icon-space">
            <Icon style={{ fontSize: '28px', backgroundColor: '#BE123C', borderRadius: '50%' }} icon="mdi:chevron-right" />
          </div>
        </div>
        <div className="sideBar-list">
          <LmLabel linkAble text='who we are' />
          <div className="Icon-space">
            <Icon style={{ fontSize: '28px', backgroundColor: '#BE123C', borderRadius: '50%' }} icon="mdi:chevron-right" />
          </div>
        </div>
        <div className="sideBar-list">
          <LmLabel linkAble text='who we are' />
          <div className="Icon-space">
            <Icon style={{ fontSize: '28px', backgroundColor: '#BE123C', borderRadius: '50%' }} icon="mdi:chevron-right" />
          </div>
        </div>
        <div className="sideBar-list">
          <LmLabel linkAble text='who we are' />
          <div className="Icon-space">
            <Icon style={{ fontSize: '28px', backgroundColor: '#BE123C', borderRadius: '50%' }} icon="mdi:chevron-right" />
          </div>
        </div>
        <div className="sideBar-list">
          <LmLabel linkAble text='who we are' />
          <div className="Icon-space">
            <Icon style={{ fontSize: '28px', backgroundColor: '#BE123C', borderRadius: '50%' }} icon="mdi:chevron-right" />
          </div>
        </div>
        <div className="sideBar-bottom">
          <p className="text-yellow">Help with living costs</p>
          <p>Information about help you can get with the rising cost of living.</p>
          <LmButton text='Find out how' />
        </div>
      </div>
    </>
  )
}

export default NavBar
