require('dotenv').config();
require('hardhat-deploy');
require('hardhat-deploy-ethers');
require('solidity-coverage');


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: '0.8.12',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      // the url is 'http://localhost:8545' but you should not define it
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_ID}`,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
    },
    polygon: {
      url: `https://speedy-nodes-nyc.moralis.io/${process.env.MORALIS_API_KEY}/polygon/mainnet`,
      gasPrice: 1000000000,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
    },
    polytest: {
      url: `https://speedy-nodes-nyc.moralis.io/${process.env.MORALIS_API_KEY}/polygon/mumbai`,
      gasPrice: 1000000000,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
      // accounts: {
      //   mnemonic: mnemonic(),
      // },
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  namedAccounts: {
    deployer: 0,
    user1: 1,
    user2: 2,
    user3: 3,
  },
};
