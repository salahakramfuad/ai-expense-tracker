import React from 'react'
import Image from 'next/image'
import { SignIn } from '@clerk/nextjs'

const Page = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, position: 'relative' }}>
        <Image
          src='/Images/signin.jpg'
          alt='Sign In Image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <SignIn />
      </div>
    </div>
  )
}

export default Page
