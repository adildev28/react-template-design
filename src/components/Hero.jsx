import React from 'react'
import background from '../assets/backgroundHero.png'
import effect from '../assets/hero_effect.png'

const Hero = () => {
  return (
    <div className='absolute inset-0'>
        <img src={background} alt="background" className='bg-cover bg-center' />
        <img src={effect} alt="" className='absolute  left-0 top-0 right-0'/>
    </div>
  )
}

export default Hero