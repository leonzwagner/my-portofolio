import React from 'react'

interface LinkProps {
  children: React.ReactNode
  href: string 
}

export const Link = ({ href = '/home', children }: LinkProps) => {

  return (
    <a className='p-2' href={href}>{children}</a>
  )
}

