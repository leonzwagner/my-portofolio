import React from 'react'

interface ListNavProps {
  children: React.ReactNode
}

export const ListNav = ({ children }: ListNavProps) => {
  return (
    <nav className='text-lg text-text-mocha flex flex-wrap'>{children}</nav>
  )
}

