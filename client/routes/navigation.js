import { routes } from './consts'

export const navigation = [
  {
    label: 'Gallery',
    items: [
      {
        path: routes.gallery.all.path,
        label: 'All',
        key: routes.gallery.all.key,
      },
      {
        path: routes.gallery.favourites.path,
        label: 'Favourites',
        key: routes.gallery.favourites.key,
      },
      {
        path: routes.gallery.new.path,
        label: 'New',
        key: routes.gallery.new.key,
      },
    ],
  },
  {
    label: 'Transactions',
    items: [
      {
        path: routes.transactions.all.path,
        label: 'All',
        key: routes.transactions.all.key,
      },
      {
        path: routes.transactions.transferred.path,
        label: 'Transferred',
        key: routes.transactions.transferred.key,
      },
      {
        path: routes.transactions.sold.path,
        label: 'Sold',
        key: routes.transactions.sold.key,
      },
    ],
  },
]
