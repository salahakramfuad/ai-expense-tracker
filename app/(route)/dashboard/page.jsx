'use client'

import { useUser } from '@clerk/nextjs'
import React from 'react'

const Dashboard = () => {
  const { user } = useUser()

  const capitalize = (str) => {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : ''
  }

  return (
    <div className='p-8'>
      <h2 className='font-bold text-4xl'>
        Hi, {capitalize(user?.fullName)}! 👋
      </h2>
      <p>
        Here's what is happening to your money. Let the AI manager manage it{' '}
      </p>
    </div>
  )
}

export default Dashboard
