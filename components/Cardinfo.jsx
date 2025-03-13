import {
  Sparkles,
  PiggyBank,
  ReceiptText,
  Wallet,
  CircleDollarSign
} from 'lucide-react'
import React, { useEffect, useState } from 'react'

// Utility function for formatting numbers
const formatNumber = (num) => num.toLocaleString()

// Dummy Data
const dummyBudgets = [
  { amount: 500, totalSpend: 300 },
  { amount: 1000, totalSpend: 700 },
  { amount: 1500, totalSpend: 1200 }
]

const dummyIncome = [{ totalAmount: 2000 }, { totalAmount: 3000 }]

const CardInfo = ({ budgetList = dummyBudgets, incomeList = dummyIncome }) => {
  const [totalBudget, setTotalBudget] = useState(0)
  const [totalSpend, setTotalSpend] = useState(0)
  const [totalIncome, setTotalIncome] = useState(0)
  const [financialAdvice, setFinancialAdvice] = useState('')

  useEffect(() => {
    if (budgetList.length > 0 || incomeList.length > 0) {
      calculateCardInfo()
    }
  }, [budgetList, incomeList])

  const calculateCardInfo = () => {
    let totalBudget_ = 0
    let totalSpend_ = 0
    let totalIncome_ = 0

    budgetList.forEach((element) => {
      totalBudget_ += Number(element.amount)
      totalSpend_ += element.totalSpend
    })

    incomeList.forEach((element) => {
      totalIncome_ += element.totalAmount
    })

    setTotalIncome(totalIncome_)
    setTotalBudget(totalBudget_)
    setTotalSpend(totalSpend_)
  }

  return (
    <div>
      {budgetList?.length > 0 ? (
        <div>
          {/* Financial Advice Section */}
          <div className='p-7 border mt-4 -mb-1 rounded-2xl flex items-center justify-between bg-white shadow-md'>
            <div>
              <div className='flex mb-2 flex-row space-x-1 items-center'>
                <h2 className='text-md font-semibold'>Finan Smart AI</h2>
                <Sparkles className='rounded-full text-white w-10 h-10 p-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate' />
              </div>
              <h2 className='font-light text-md'>
                {financialAdvice || 'Loading financial advice...'}
              </h2>
            </div>
          </div>

          {/* Cards */}
          <div className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <Card
              title='Total Budget'
              value={`$${formatNumber(totalBudget)}`}
              icon={<PiggyBank />}
            />
            <Card
              title='Total Spend'
              value={`$${formatNumber(totalSpend)}`}
              icon={<ReceiptText />}
            />
            <Card
              title='No. Of Budgets'
              value={budgetList.length}
              icon={<Wallet />}
            />
            <Card
              title='Sum of Income Streams'
              value={`$${formatNumber(totalIncome)}`}
              icon={<CircleDollarSign />}
            />
          </div>
        </div>
      ) : (
        <SkeletonLoader />
      )}
    </div>
  )
}

// Reusable Card Component
const Card = ({ title, value, icon }) => (
  <div className='p-7 border rounded-2xl flex items-center justify-between bg-white shadow-lg'>
    <div>
      <h2 className='text-sm text-gray-500'>{title}</h2>
      <h2 className='font-bold text-2xl'>{value}</h2>
    </div>
    <div className='bg-blue-800 p-3 h-12 w-12 rounded-full text-white flex items-center justify-center'>
      {icon}
    </div>
  </div>
)

// Skeleton Loader for Loading State
const SkeletonLoader = () => (
  <div className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
    {[1, 2, 3].map((_, index) => (
      <div
        className='h-[110px] w-full bg-slate-200 animate-pulse rounded-lg'
        key={index}
      ></div>
    ))}
  </div>
)

export default CardInfo
