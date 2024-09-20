import React from 'react'

export interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  style: string
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ onClick, style, children }) => {
  return (
    <button className={style} onClick={onClick}>{children}</button>
  )
}

