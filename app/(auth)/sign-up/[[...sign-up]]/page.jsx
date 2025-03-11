'use client'

import React from 'react'
import Image from 'next/image'
import { SignUp } from '@clerk/nextjs'

const Page = () => {
  return (
    <div className='flex h-screen bg-purple-50'>
      <div className='flex-1 relative'>
        <Image
          src='/Images/signin.jpg'
          alt='Sign Up Image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='flex-1 flex flex-col justify-center items-center p-8'>
        <h1 className='text-4xl font-bold mb-4'>Create an Account</h1>
        <p className='text-lg mb-8'>
          Join us and start tracking your expenses today!
        </p>
        <SignUp redirectUrl='/dashboard' />
      </div>
    </div>
  )
}

export default Page
