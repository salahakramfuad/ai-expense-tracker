'use client'

import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import CardInfo from '../../../components/Cardinfo'
import { db } from '../../../lib/dbConfig'
import BarChartDashboard from '../../../components/BarchartDashboard'
import ExpenseListTable from '../expenses/ExpenseListTable'
import BudgetItem from '../expenses/BudgetItem'
import { Budget } from '@/db/schema'

const Dashboard = () => {
  const { user } = useUser()

  const [budgetList, setBudgetList] = useState([])
  const [incomeList, setIncomeList] = useState([])
  const [expensesList, setExpensesList] = useState([])

  useEffect(() => {
    if (user) getBudgetList()
  }, [user])

  const capitalize = (str) => {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : ''
  }

  const getBudgetList = async () => {
    try {
      const result = await db
        .select({
          ...getTableColumns(Budgets), // ✅ Fixed variable name
          totalSpend: sql`SUM(${Expenses.amount})`.mapWith(Number),
          totalItem: sql`COUNT(${Expenses.id})`.mapWith(Number)
        })
        .from(Budgets)
        .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
        .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
        .groupBy(Budgets.id)
        .orderBy(desc(Budgets.id))

      setBudgetList(result)
      getAllExpenses()
      getIncomeList()
    } catch (error) {
      console.error('Error fetching budget list:', error)
    }
  }

  const getIncomeList = async () => {
    try {
      const result = await db
        .select({
          ...getTableColumns(Incomes), // ✅ Fixed variable name
          totalAmount: sql`SUM(CAST(${Incomes.amount} AS NUMERIC))`.mapWith(
            Number
          )
        })
        .from(Incomes)
        .groupBy(Incomes.id)

      setIncomeList(result)
    } catch (error) {
      console.error('Error fetching income list:', error)
    }
  }

  const getAllExpenses = async () => {
    try {
      const result = await db
        .select({
          id: Expenses.id,
          name: Expenses.name,
          amount: Expenses.amount,
          createdAt: Expenses.createdAt
        })
        .from(Budgets)
        .rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
        .where(eq(Budgets.createdBy, user?.primaryEmailAddress.emailAddress))
        .orderBy(desc(Expenses.id))

      setExpensesList(result)
    } catch (error) {
      console.error('Error fetching expenses list:', error)
    }
  }

  return (
    <div className='p-8'>
      <h2 className='font-bold text-4xl'>
        Hi, {capitalize(user?.fullName)} 👋
      </h2>
      <p className='text-gray-500'>
        Here's what is happening with your money. Let's manage your expenses.
      </p>

      <CardInfo budgetList={budgetList} incomeList={incomeList} />
      <div className='grid grid-cols-1 lg:grid-cols-3 mt-6 gap-5'>
        <div className='lg:col-span-2'>
          <BarChartDashboard budgetList={budgetList} />
          <ExpenseListTable
            expensesList={expensesList}
            refreshData={getBudgetList}
          />
        </div>
        <div className='grid gap-5'>
          <h2 className='font-bold text-lg'>Latest Budgets</h2>
          {budgetList?.length > 0
            ? budgetList.map((budget) => (
                <BudgetItem budget={budget} key={budget.id} />
              ))
            : [1, 2, 3, 4].map((item, index) => (
                <div
                  key={index} // ✅ Fixed missing key prop
                  className='h-[180px] w-full bg-slate-200 rounded-lg animate-pulse'
                ></div>
              ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
