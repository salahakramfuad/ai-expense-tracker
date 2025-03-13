'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { SignUp, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

const Page = () => {
  const { isSignedIn } = useUser()
  const router = useRouter()

  // Redirect to dashboard after successful sign-up
  useEffect(() => {
    if (isSignedIn) {
      router.push('/dashboard')
    }
  }, [isSignedIn, router])

  return (
    <div className='flex h-screen bg-purple-50'>
      {/* Left Side Image */}
      <div className='flex-1 relative hidden md:block'>
        <Image
          src='/Images/signin.jpg'
          alt='Sign Up Image'
          layout='fill'
          objectFit='cover'
        />
      </div>

      {/* Right Side Sign-Up Form */}
      <div className='flex-1 flex flex-col justify-center items-center p-8'>
        <h1 className='text-4xl font-bold mb-4'>Create an Account</h1>
        <p className='text-lg mb-8'>
          Join us and start tracking your expenses today!
        </p>
        <SignUp />
      </div>
    </div>
  )
}

export default Page
