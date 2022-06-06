import { ethers } from 'ethers'
import { ADDRESS } from '../consts'

const etherscanProvider = new ethers.providers.EtherscanProvider('rinkeby')

export const etherscanService = {
  getHistory: () => etherscanProvider.getHistory(ADDRESS),
}
