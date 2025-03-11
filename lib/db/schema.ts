import { integer, text, serial, pgTable } from 'drizzle-orm/pg-core'

//budget schema
export const Budget = pgTable('budget', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  amount: integer('amount').notNull(),
  icon: text('icon'),
  created_by: text('created_by').notNull()
})

export const Income = pgTable('income', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  amount: integer('amount').notNull(),
  icon: text('icon'),
  created_by: text('created_by').notNull()
})

export const Expenses = pgTable('expenses', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  amount: integer('amount').notNull(),
  budger_id: integer('budget_id').references(() => Budget.id),
  created_by: text('created_by').notNull()
})
