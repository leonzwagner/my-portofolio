import React from 'react'
import { Heading } from './Heading'
import { Span } from './Span'

interface TextProps {
  children: React.ReactNode
  style: string
}

export const TextBio = ({ children, style }: TextProps) => {
  return (
    <section className={style}>{children}</section>
  )
}

//<Heading style='text-3xl text-text-mocha'>Lalu Akhadi Rizki</Heading>
//<Span style='text-2xl text-subtext1'>Self-Taught Software Engineer</Span>
//<section className='flex flex-col space-y-5'>{children}</section>
