import React, { useState } from 'react'
import { ListNav } from '../Elements/List/Index'
import { Link } from '../Elements/List/Link'

const colors = [
  'decoration-lavender',
  'decoration-yellow-mocha',
  'decoration-green-mocha',
  'decoration-maroon-mocha'
]

export const Navbar = () => {
  const [hoverColor, setHoverColor] = useState('')

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
  }

  const handleMouseOver = () => {
    setHoverColor(getRandomColor())
  }

  const handleMouseOut = () => {
    setHoverColor('')
  }

  return (
    <header className='flex justify-center py-8'>
      <ListNav>
        <Link color={hoverColor} href='/home' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>home</Link>

        <Link color={hoverColor} href='/blog' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>blog</Link>

        <Link color={hoverColor} href='/project' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>project</Link>

        <Link color={hoverColor} href='https://github.com/akhdrzki' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>github</Link>
        <Link color={hoverColor} href='/project' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>linkedin</Link>

      </ListNav>
    </header>
  )
}

