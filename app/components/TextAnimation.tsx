'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TextAnimation = () => {
  return (
    <div>
    <TypeAnimation
        sequence={[
            'Amy Sandoval',
            1500, 
            'a frontend developer',
            1500,
            'a career switcher',
            1500,
            'a lifelong learner',
            1500,
            'Amy Sandoval',
            1500,
        ]}
        wrapper="span"
        speed={25}
        repeat={0}
    />       
    </div>
  )
}

export default TextAnimation