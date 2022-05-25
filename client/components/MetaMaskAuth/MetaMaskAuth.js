/* eslint-disable no-underscore-dangle */
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'
import truncateEthAddress from 'truncate-eth-address'
import React, { useEffect, useState } from 'react'
import { useWeb3Context } from '../../hooks/useWeb3Context'
import { ArrowRight, LogoutIcon } from '../../icons'
import styles from './AuthButton.module.css'
import { web3ContextInitialValues } from '../../contexts/Web3Context'

const abi = []

export const MetaMaskAuth = () => {
  const {
    updateContextState: updateWeb3ContextState,
    ethers,
    account: currentAccount,
  } = useWeb3Context()

  const [isLoading, setLoading] = useState(true)

  const login = async () => {
    try {
      setLoading(true)
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const [account] = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        const chainId = await window.ethereum.request({ method: 'eth_chainId' })
        let contractAddress

        // Hardhat Local
        if (chainId === '0x7a69') {
          contractAddress = ''

          // Rinkeby
        } else if (chainId === '0x4') {
          contractAddress = ''

          // Polygon Mainnet
        } else if (chainId === '0x89') {
          contractAddress = ''

          // Polygon Testnet
        } else if (chainId === '0x13881') {
          contractAddress = ''

          // Mainnet
        } else if (chainId === '0x1') {
          contractAddress = ''

          // Ropsten
        } else if (chainId === '0x3') {
          contractAddress = ''
        }

        const signer = provider.getSigner(account)
        const contract = new ethers.Contract(contractAddress, abi, signer)

        window.sessionStorage.setItem('account', contract.signer._address)
        updateWeb3ContextState({
          provider,
          contract,
          account: contract.signer._address,
        })
      } else if (window.web3) {
        console.log('Update MetaMask')
      } else {
        console.log('Enable MetaMask')
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    updateWeb3ContextState(web3ContextInitialValues)
    window.sessionStorage.removeItem('account')
  }

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    !!window.sessionStorage.getItem('account') && login()
  }, [])

  // eslint-disable-next-line no-nested-ternary
  return isLoading ? (
    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
  ) : !currentAccount ? (
    <button type="button" className={styles.button__type_login} onClick={login}>
      <span className="mr-2">Connect wallet</span>
      <ArrowRight />
    </button>
  ) : (
    <div className={styles.button__type_logout}>
      <div className="flex items-center mr-2">
        <Jazzicon diameter={30} seed={jsNumberForAddress(currentAccount)} />
      </div>
      <span className="mr-2">{truncateEthAddress(currentAccount)}</span>
      <button type="button" onClick={logout}>
        <LogoutIcon />
      </button>
    </div>
  )
}
