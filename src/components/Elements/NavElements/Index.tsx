import React from 'react'
import { Span } from './Span/Span'

interface NavElm {
  children: React.ReactNode
  divStyle: string
}

export const NavElements = ( { children, divStyle }: NavElm) => {
  return (
    <div className={divStyle}>
      <Span></Span>
      {children}
    </div>
  )
}

