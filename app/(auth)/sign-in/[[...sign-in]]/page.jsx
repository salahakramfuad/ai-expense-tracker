'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { SignIn, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

const Page = () => {
  const { isSignedIn } = useUser()
  const router = useRouter()

  // Redirect to dashboard after successful sign-in
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
          alt='Sign In Image'
          layout='fill'
          objectFit='cover'
        />
      </div>

      {/* Right Side Sign-In Form */}
      <div className='flex-1 flex justify-center items-center'>
        <SignIn />
      </div>
    </div>
  )
}

export default Page
