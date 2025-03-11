'use client'
import React from 'react'
import { useUser, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const { user, isSignedIn } = useUser()
  return (
    <div className='p-4 flex justify-between items-center  px-10 bg='>
      <div className='flex'>
        <Image
          src='/logo/logo.png'
          alt='Wallet Manager Logo'
          height={50}
          width={50}
        />
        <div className='flex flex-row items-center font-extrabold text-purple-900 text-xl'>
          <span className=''>Wallet Manager</span>
        </div>
      </div>

      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className='flex gap-3 items-center'>
          <Link href={'/sign-up'}>
            <Button
              variant={'outline'}
              className={'rounded-full bg-purple-50 hover:cursor-grab'}
            >
              Dashboard
            </Button>
          </Link>
          <Link href={'/sign-in'}>
            <Button
              variant={'outline'}
              className={
                'rounded-full bg-purple-950 hover:cursor-grab hover:bg-purple-700 text-white'
              }
            >
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar
