export const routes = {
  gallery: {
    path: '/gallery',
    all: {
      key: 'gallery-all',
      path: '/gallery?filter=all',
    },
    favourites: {
      key: 'gallery-favourites',
      path: '/gallery?filter=favourites',
    },
    new: {
      key: 'gallery-new',
      path: '/gallery?filter=new',
    },
  },
  transactions: {
    path: '/transactions',
    all: {
      key: 'transactions-all',
      path: '/transactions?filter=all',
    },
    transferred: {
      key: 'transactions-transferred',
      path: '/transactions?filter=transferred',
    },
    sold: {
      key: 'transactions-sold',
      path: '/transactions?filter=sold',
    },
  },
}
