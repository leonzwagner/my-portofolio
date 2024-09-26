import React from 'react'

interface ListNavProps {
  children: React.ReactNode
}

export const ListNav = ({ children }: ListNavProps) => {
  return (
    <nav className='text-xl text-text-mocha flex space-x-4 justify-center flex-wrap w-[20rem] sm:w-[30rem]'>{children}</nav>
  )
}

