import { ethers } from 'ethers'
import abi from './abi.json'
import provider from '../provider'
import { ADDRESS } from '../consts'

export const yourCollectibleService = new ethers.Contract(
  ADDRESS,
  abi,
  provider,
)
