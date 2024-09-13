import React from 'react'
import { List } from './List'
import { Link } from './Link'

interface UlProps {
  style: string
}

export const UnorderList = ({style}: UlProps) => {
  return (
    <ul className={style}>
      <List style=''>
        <Link href='/home'>Home</Link>
      </List>

      <List style=''>
        <Link href='/project'>Project</Link>
      </List>

      <List style=''>
        <Link href='/about'>About</Link>
      </List>

      <List style=''>
        <Link href='/about'>Contact</Link>
      </List>
    </ul>
  )
}

