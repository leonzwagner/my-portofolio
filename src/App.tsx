import React, { } from 'react'
import { NavbarMobile } from './components/Fragments/NavbarMobile'
import { NavbarDesktop } from './components/Fragments/NavbarDesktop'

export const App = () => {

  return (
    <div>
      <NavbarMobile></NavbarMobile>
      <NavbarDesktop></NavbarDesktop>
    </div>
  )
}

