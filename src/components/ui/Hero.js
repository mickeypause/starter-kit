import Image from 'next/image'
import React from 'react'
import { Button } from './button'
import placeholder from '@/assets/img/placeholder.png'

const Hero = () => {
  return (
    <section className='flex flex-col justify-center items-center h-[1024px] gap-12'>
      <div className='flex flex-col gap-3 items-center'>
        <h1>Heading</h1>

        <p className='max-w-[500px]'>
          Description of your product how will it help humanity and other boring
          stuff
        </p>
        <Button size='lg'>Get Started</Button>
      </div>

      <Image
        src={placeholder}
        width={1024}
        height={500}
      />
    </section>
  )
}

export default Hero
