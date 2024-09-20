import React from 'react'

interface LinkProps {
  children: React.ReactNode
  href: string 
}

export const Link = ({ href = '/home', children }: LinkProps) => {
  return (
    <a className='sm:text-xl text-sm font-semibold' href={href}>{children}</a>
  )
}

