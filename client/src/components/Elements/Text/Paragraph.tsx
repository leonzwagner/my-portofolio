import React from 'react'

interface ParagraphProps {
  children: React.ReactNode
  style: string
}

export const Paragraph = ({ children, style }: ParagraphProps) => {
  return (
    <p className={style}>{children}</p>
  )
}



// Hallo! I'm Rizki, and i like to learn Tech, especially Linux and FOSS
