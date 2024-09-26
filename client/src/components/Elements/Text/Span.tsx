import React from 'react'

interface SpanProps {
  style: string
  children: React.ReactNode
}

export const Span = ({ style, children }: SpanProps) => {
  return (
    <div className='w-64'>
      <span className={style}>{children}</span>
    </div>
  )
}

