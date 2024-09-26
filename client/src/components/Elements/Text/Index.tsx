import React from 'react'
import { Heading } from './Heading'
import { Span } from './Span'

export const TextBio = () => {
  return (
    <section className='flex flex-col space-y-5'>
      <Heading style='text-3xl text-text-mocha'>Lalu Akhadi Rizki</Heading>
      <Span style='text-2xl text-subtext1'>Self-Taught Software Engineer</Span>
    </section>
  )
}

