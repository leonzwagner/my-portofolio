import React from 'react'
import { ListNav } from '../Elements/List/Index'
import { Link } from '../Elements/List/Link'
import { House, BookOpenText, Blocks, Server } from 'lucide-react'

export const Navbar = () => {
  return (
    <header className='min-h-screen flex justify-center py-8'>
      <ListNav>
        <Link href='/home'><House /></Link>

        <Link href='/blog'><BookOpenText /></Link>

        <Link href='/project'><Blocks /></Link>

        <Link href='/about'><Server /></Link>

      </ListNav>
    </header>
  )
}

