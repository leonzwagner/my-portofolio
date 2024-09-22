import React from 'react'

interface ListNavProps {
  children: React.ReactNode
}

export const ListNav = ({ children }: ListNavProps) => {
  return (
    <nav className='text-sm rounded-lg font-semibold bg-lavender sticky top-0 text-text-mocha h-10 w-60 flex items-center justify-evenly sm:text-lg sm:w-64 sm:h-12'>{children}</nav>
  )
}

