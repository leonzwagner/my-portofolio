import React from 'react'

interface ListNavProps {
  children: React.ReactNode
}

export const ListNav = ({ children }: ListNavProps) => {
  return (
    <nav className='text-text-mocha'>{children}</nav>
  )
}

