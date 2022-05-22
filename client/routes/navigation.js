import { routes } from './consts'

export const navigation = {
  label: 'NFT MONSTER',
  items: [
    {
      path: routes.gallery.path,
      label: 'Gallery',
    },
    {
      path: routes.transactions.path,
      label: 'Transactions',
    },
  ],
}
