'use client'

import { useUser } from '@clerk/nextjs'
import DashboardHeader from '../../../components/DashboardHeader'
import SideNav from '../../../components/SideNav'
import { useRouter } from 'next/navigation' // ✅ FIXED!
import { useEffect } from 'react'

const Layout = ({ children }) => {
  // ✅ Accepts children prop
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (user) checkUserBudget()
  }, [user])

  const checkUserBudget = async () => {
    const result = await db
      .select()
      .from(budget)
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))

    console.log(result)
    if (result?.length === 0) {
      router.replace('/dashboard/budgets')
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
