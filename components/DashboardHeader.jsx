import React from 'react'
import { Button } from './ui/button'
import { SignOutButton, UserButton } from '@clerk/nextjs'

const DashboardHeader = () => {
  return (
    <div className='p-5 flex justify-between shadoe-sm border-b'>
      <div></div>
      <div className='pr-3'>
        <UserButton />
      </div>
    </div>
  )
}

export default DashboardHeader
