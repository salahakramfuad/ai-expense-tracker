'use client'

import React from 'react'
import Image from 'next/image'
import { SignIn } from '@clerk/nextjs'

const Page = () => {
  return (
    <div className='flex h-screen bg-purple-50'>
      <div className='flex-1 relative'>
        <Image
          src='/Images/signin.jpg'
          alt='Sign In Image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <SignIn redirectUrl='/dashboard' />
      </div>
    </div>
  )
}

export default Page
