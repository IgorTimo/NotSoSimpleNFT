import { routes } from './consts'

const { gallery, transactions } = routes

export const navigation = [
  {
    label: 'Gallery',
    path: gallery.path,
    items: [
      {
        label: 'All',
        path: gallery.all.path,
        key: gallery.all.key,
      },
      {
        label: 'Favourites',
        path: gallery.favourites.path,
        key: gallery.favourites.key,
      },
      {
        label: 'New',
        path: gallery.new.path,
        key: gallery.new.key,
      },
    ],
  },
  {
    label: 'Transactions',
    path: transactions.path,
    items: [
      {
        label: 'All',
        path: transactions.all.path,
        key: transactions.all.key,
      },
      {
        label: 'Transferred',
        path: transactions.transferred.path,
        key: transactions.transferred.key,
      },
      {
        label: 'Sold',
        path: transactions.sold.path,
        key: transactions.sold.key,
      },
    ],
  },
]
