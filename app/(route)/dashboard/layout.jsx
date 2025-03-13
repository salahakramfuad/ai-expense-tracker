'use client'

import DashboardHeader from '../../../components/DashboardHeader'
import SideNav from '../../../components/SideNav'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useUser } from '@clerk/nextjs' // ✅ Import Clerk user hook

const Layout = ({ children }) => {
  const router = useRouter()
  const { user, isSignedIn } = useUser() // ✅ Get user info

  useEffect(() => {
    if (isSignedIn) {
      checkUserBudget()
    } else {
      router.replace('/dashboard') // ✅ Redirect if not signed in
    }
  }, [isSignedIn]) // ✅ Run when sign-in state changes

  const checkUserBudget = async () => {
    try {
      const response = await fetch('/api/check-budget', {
        method: 'POST',
        body: JSON.stringify({
          email: user?.primaryEmailAddress?.emailAddress
        }),
        headers: { 'Content-Type': 'application/json' }
      })

      const { hasBudget } = await response.json()

      if (!hasBudget) {
        router.replace('/dashboard/budgets') // ✅ Redirect if no budget
      }
    } catch (error) {
      console.error('Error checking budget:', error)
    }
  }

  return (
    <div>
      <div className='fixed md:w-64 hidden md:block '>
        <SideNav />
      </div>
      <div className='md:ml-64 '>
        <DashboardHeader />
        {children}
      </div>
    </div>
  )
}

export default Layout
