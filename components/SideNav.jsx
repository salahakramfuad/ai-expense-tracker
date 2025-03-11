'use client'

import {
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  CircleDollarSign
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'

const SideNav = () => {
  const menuList = [
    { id: 1, name: 'Dashboard', icon: LayoutGrid, path: '/dashboard' },
    {
      id: 2,
      name: 'Incomes',
      icon: CircleDollarSign,
      path: '/dashboard/incomes'
    },
    { id: 3, name: 'Budgets', icon: PiggyBank, path: '/dashboard/budgets' },
    { id: 4, name: 'Expenses', icon: ReceiptText, path: '/dashboard/expenses' },
    { id: 5, name: 'Upgrade', icon: ShieldCheck, path: '/dashboard/upgrade' }
  ]

  const path = usePathname()

  return (
    <div className='h-screen w-64 bg-white shadow-lg border-r p-6 flex flex-col justify-between'>
      {/* Logo Section */}
      <div className='flex items-center space-x-3'>
        <Image
          src={'/logo/logo-color.svg'}
          alt='logo'
          width={40}
          height={25}
          className='rounded-full'
        />
        <span className='text-purple-900 font-bold text-xl'>
          Wallet Manager
        </span>
      </div>

      {/* Navigation Items */}
      <nav className='mt-8 flex-1'>
        {menuList.map((item) => (
          <Link href={item.path} key={item.id}>
            <div
              className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-purple-100 hover:text-purple-900
                ${
                  path === item.path
                    ? 'bg-purple-200 text-purple-900 font-semibold'
                    : 'text-gray-600'
                }`}
            >
              <item.icon className='w-5 h-5' />
              <span>{item.name}</span>
            </div>
          </Link>
        ))}
      </nav>

      {/* Profile Section */}
      <div className='flex items-center space-x-3 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all'>
        <UserButton />
        <span className='text-purple-900 text-lg font-medium'>Profile</span>
      </div>
    </div>
  )
}

export default SideNav
