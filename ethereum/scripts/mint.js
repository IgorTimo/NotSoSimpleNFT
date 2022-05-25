const { ethers, getNamedAccounts } = require("hardhat");
const { HARDHAT_PROVIDER_URL, YIUR_COLLECTIBLE } = require('../constants');
const { abi, address } = require('../deployments/localhost/YourCollectible.json');


async function main() {
    const { deployer } = await getNamedAccounts();
    const provider = new ethers.providers.WebSocketProvider(HARDHAT_PROVIDER_URL);
    const deployerSigner = provider.getSigner(deployer);

    // const YC = await ethers.getContractFactory(YIUR_COLLECTIBLE, deployerSigner);
    // const yc = await YC.deploy();
    // await yc.deployed();
    // console.log('YourCollectible deployed to:', yc.address);

    // const yc = await ethers.getContract(YIUR_COLLECTIBLE, deployerSigner);
    // console.log('YourCollectible deployed to:', yc.address);

    const yc = await ethers.getContractAt(abi, address, deployerSigner);
    console.log('YourCollectible deployed to:', yc.address);

    await yc.mintItem(deployer, 'url1');
    await yc.mintItem(deployer, 'url2');
    await yc.mintItem(deployer, 'url3');
    await yc.mintItem(deployer, 'url4');
    await yc.mintItem(deployer, 'url5');

    const totalSupply = await yc.totalSupply();
    console.log({ totalSupply: Number(totalSupply) });
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
