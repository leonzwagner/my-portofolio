import React, { useState } from 'react'
import { ListParent } from '../Elements/List/Index'
import { NavElements } from '../Elements/NavElements/Index'
import { Button } from '../Elements/NavElements/Button/Button'
import { UnorderList } from '../Elements/List/UnorderList'

export const NavbarMobile = () => {
  const [isOpen, setOpen] = useState(false)

  const toggleMenu = () => setOpen(!isOpen)
  return (
    <nav className='block px-10 py-8 sm:hidden'>
      <NavElements divStyle='flex justify-between'>
        <Button style='' onClick={toggleMenu}>Open</Button>
      </NavElements>
      <div className={`bg-crust flex absolute inset-0 -translate-x-0 w-9/12 rounded-r-lg ${isOpen ? 'block' : 'hidden'}`}>
        <div className='absolute right-0 p-8'>
          <Button style='' onClick={toggleMenu}>
           X 
          </Button>
        </div>
        <ListParent style='flex flex-col justify-center px-12 gap-y-6 list-none rounded-lg'>
          <UnorderList style='flex flex-col gap-y-4'></UnorderList>
        </ListParent>
      </div>
    </nav>
  )
}

