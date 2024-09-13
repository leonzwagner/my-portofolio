import React from 'react'

interface ListProps {
  style: string
  children: React.ReactNode
}

export const List = ({ style, children }: ListProps) => {

  return (
    <li className={style}>
      {children}
    </li>
  )
}

