'use client'

import { useUser } from '@clerk/nextjs'
import DashboardHeader from '../../../components/DashboardHeader'
import SideNav from '../../../components/SideNav'
import { useRouter } from 'next/navigation' // ✅ FIXED!
import { useEffect } from 'react'

const Layout = ({ children }) => {
  const { user } = useUser()
  const { isSignedIn, isLoaded } = useUser()
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isLoaded) return
    if (!isSignedIn) {
      router.replace('/') // Redirect to homepage if not logged in
    } else {
      setLoading(false) // Allow access to the dashboard
    }
  }, [isSignedIn, isLoaded, router])

  if (!isLoaded || loading) {
    return <loading />
  }

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
