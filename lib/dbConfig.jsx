import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import * as schema from 'db/schema.ts'
const sql = neon(
  'postgresql://walletmanager_owner:npg_pxdJfnX7Ql9Z@ep-cool-credit-a1sy03g7.ap-southeast-1.aws.neon.tech/walletmanager?sslmode=require'
)
export const db = drizzle(sql, { schema })
