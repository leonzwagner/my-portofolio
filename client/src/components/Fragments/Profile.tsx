import React from 'react'
import { TextBio } from '../Elements/Text/Index'
import { ImageProf } from '../Elements/Image/Index'

export const Profile = () => {
  return (
    <div className='flex flex-col items-center space-y-5 sm:flex-row sm:justify-center my-10 sm:px-3 sm:my-16 sm:space-x-10'>
      <TextBio />
      <ImageProf />
    </div>
  )
}

