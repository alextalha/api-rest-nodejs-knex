// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  interface Transactions {
    id: string
    title: string
    amount: number
    type?: string
    session_id?: string
    created_at: Date
  }

  interface Tables {
    transactions: Transactions
  }
}
