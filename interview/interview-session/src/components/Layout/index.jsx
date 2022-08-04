import React from 'react'
import Header from '../Header'
import LeftColumn from '../LeftColumn'
import RightColumn from '../RightColumn'
import './style.css'

const Layout = () => {
  return (
    <div>
        <Header />
        <div className='layoutbody'>
            <LeftColumn />
            <RightColumn />
        </div>
    </div>
  )
}

export default Layout