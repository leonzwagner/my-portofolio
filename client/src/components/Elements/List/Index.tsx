import React from 'react' 

interface ListParentProps {
  style: string
  children: React.ReactNode
}

export const ListParent = ({ style, children }: ListParentProps) => {
  return (
    <div className={style}>{children}</div>
  )
}

