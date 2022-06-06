/* eslint-disable react/no-array-index-key */
import React from 'react'

// TODO: mock убрать после маппинга реальных данных
const columns = [
  {
    isEmpty: true,
    name: 'icon',
  },
  {
    name: 'items',
  },
  {
    name: 'collection',
  },
  {
    name: 'transactionType',
  },
  {
    name: 'from',
  },
  {
    name: 'to',
  },
  {
    name: 'price',
  },
  {
    name: 'dateTime',
  },
  // {
  //   name: 'edit',
  //   isEmpty: true,
  //   isAction: true,
  // },
]

const data = [
  {
    icon: 'Buffalo icon',
    items: 'Buffalo',
    collection: 'Animalzz',
    transactionType: 'Transferred',
    from: '0x298..E',
    to: '0x3b9..0',
    price: '0.59 ETH',
    dateTime: '19.05.2022, 11:08',
    edit: '',
  },
  {
    icon: 'Pug icon',
    items: 'Pug',
    collection: 'Doggies',
    transactionType: 'Purchased',
    from: '0x3b9..0',
    to: '0x298..E',
    price: '1.99 ETH',
    dateTime: '07.05.2022 06:56',
    edit: '',
  },
]

export const Table = () => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {columns.map(({ name, isEmpty, isAction }, idx) => {
            return (
              <th key={`${name}-${idx}`} scope="col" className="px-6 py-3">
                {!isEmpty ? name : ''}
              </th>
            )
          })}

          {/* <th scope="col" className="px-6 py-3">
            <span className="sr-only">Edit</span>
          </th> */}
        </tr>
      </thead>
      <tbody>
        {data.map((el, index) => {
          return (
            <tr
              key={`${el.items}-${index}`}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              {columns.map(({ name }, idx) => {
                return (
                  <td key={`${name}-${idx}`} className="px-6 py-4">
                    {el[name]}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
