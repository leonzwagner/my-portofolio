import React from 'react'

interface HeadingProps {
  children: React.ReactNode
  style: string
}

export const Heading = ({ children, style }: HeadingProps) => {
  return (
    <div className='w-64 text-left'>
      <h1 className={style}>{children}</h1>
    </div>
  )
}

