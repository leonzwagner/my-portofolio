import React from 'react'
import { TextBio } from '../Elements/Text/Index'
import { Paragraph } from '../Elements/Text/Paragraph'
import { Span } from '../Elements/Text/Span'

export const Bio = () => {
  return (
    <div className='flex justify-center'>
      <TextBio style='space-y-5 text-lg text-text-mocha text-lg flex flex-col items-center sm:w-[38rem] w-[18rem] text-start'>
        <Paragraph style=''>Hallo! <Span style='underline decoration-maroon-mocha decoration-2'>I'm Rizki</Span>, and i love to learn Tech, especially Linux and FOSS!</Paragraph>
        <Paragraph style=''>I'm a self-taught learner, keen interest in Fullstack Development, i enjoy to coding, reading, also blogging. I use Linux for my daily driver, it's quite fun and free.</Paragraph>
      </TextBio>
    </div>
  )
}

