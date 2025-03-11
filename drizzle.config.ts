import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  out: './drizzle',
  schema: 'db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://walletmanager_owner:npg_pxdJfnX7Ql9Z@ep-cool-credit-a1sy03g7.ap-southeast-1.aws.neon.tech/walletmanager?sslmode=require'
  }
})
