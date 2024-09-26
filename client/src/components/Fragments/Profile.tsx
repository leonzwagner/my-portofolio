import React from 'react'
import { TextBio } from '../Elements/Text/Index'
import { ImageProf } from '../Elements/Image/Index'
import { Heading } from '../Elements/Text/Heading'
import { Span } from '../Elements/Text/Span'

export const Profile = () => {
  return (
    <div className='flex flex-col items-center space-y-5 sm:flex-row sm:justify-center my-10 sm:px-3 sm:my-16 sm:space-x-10'>
      <TextBio style='flex flex-col space-y-5 w-64'>
        <Heading style='text-3xl text-text-mocha'>Lalu Akhadi Rizki</Heading>
        <Span style='text-2xl text-subtext1'>Self-taught Software Engineer</Span>
      </TextBio>
      <ImageProf />
    </div>
  )
}

