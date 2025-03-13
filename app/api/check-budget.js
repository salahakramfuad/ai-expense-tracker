import { Budgets } from '@/db/schema'
import { db } from '@/lib/dbConfig'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const { email } = await req.json()

    const result = await db
      .select()
      .from(Budgets)
      .where(eq(Budgets.createdBy, email))

    return NextResponse.json({ hasBudget: result.length > 0 })
  } catch (error) {
    console.error('Error checking budget:', error)
    return NextResponse.json(
      { hasBudget: false, error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
