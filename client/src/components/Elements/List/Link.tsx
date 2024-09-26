import React from 'react'

interface LinkProps {
  children: React.ReactNode
  href: string
  color: string
  onMouseOver: (event: React.MouseEvent<HTMLDivElement>) => void
  onMouseOut: (event: React.MouseEvent<HTMLDivElement>) => void
}

export const Link = ({ href = '/home', children, color = 'decoration-lavender', onMouseOver, onMouseOut }: LinkProps) => {

  return (
    <a className={`p-2 hover:underline hover:font-extrabold decoration-2 ${color}`} onMouseOver={onMouseOver} onMouseOut={onMouseOut} href={href}>{children}</a>
  )
}

