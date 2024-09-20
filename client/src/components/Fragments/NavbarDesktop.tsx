import React, {useState} from 'react'
import { ListParent } from '../Elements/List/Index'
import { UnorderList } from '../Elements/List/UnorderList'
import { NavElements } from '../Elements/NavElements/Index'
import { Button } from '../Elements/NavElements/Button/Button'

export const NavbarDesktop = () => {
  const [isOpen, setOpen] = useState(false)

  const toggleMenu = () => setOpen(!isOpen)
  return (
    <nav className='sm:flex sm:justify-between sm:px-20 sm:py-10 hidden'>
      <NavElements divStyle=''>
        <Button onClick={toggleMenu}>
        </Button>
      </NavElements>

      <ListParent style='sm:block'>
        <UnorderList style='sm:flex gap-x-16'></UnorderList>
      </ListParent>
    </nav>
  )
}

