import React, { useEffect, useState } from 'react'
import { Table } from '../components/Table'
import { useAllTokens } from '../queries'
import { useTransactions } from '../queries/useTransactions'
import { SeachInput } from '../components/Inputs'

function Transactions() {
  const { data: transactionsData } = useTransactions()
  const { data: tokens } = useAllTokens()
  console.log('transactionsData', transactionsData)
  console.log('tokens', tokens)

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <SeachInput />
      <Table />
    </div>
  )
}

export default Transactions
