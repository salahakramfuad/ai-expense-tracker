import React from 'react'
import { ContainerScroll } from './ui/container-scroll-animation'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex flex-col overflow-hidden'>
      <ContainerScroll
        titleComponent={
          <>
            <h1 className='text-4xl font-semibold text-black dark:text-white'>
              Manage Your Money With personal AI Assistant
              <br />
              <span className='text-4xl md:text-[6rem] text-purple-900 font-bold mt-1 leading-none'>
                Mr. Walet Manager
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={'/Images/fuad.jpg'}
          alt='hero'
          height={720}
          width={1400}
          className='mx-auto rounded-2xl object-cover h-full object-left-top'
          draggable={false}
        />
      </ContainerScroll>
    </div>
  )
}

export default Hero
