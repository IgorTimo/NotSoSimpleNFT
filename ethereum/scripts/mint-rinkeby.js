const { ethers } = require("hardhat");
const { abi } = require('../deployments/localhost/YourCollectible.json');
const { mochUploadedHashes } = require('../constants/moch_nfts');


async function main() {
    const [deployerSigner] = await ethers.getSigners();

    const yc = await ethers.getContractAt(abi, process.env.TARGET_CONTRACT_ADDRESS, deployerSigner);
    console.log('YourCollectible deployed to:', yc.address);

    for (let i = 0; i < mochUploadedHashes.length; i++) {
        const hash = mochUploadedHashes[i];
        const tx = await yc.mintItem(deployerSigner.address, hash);
        console.log(i);

        if (i === mochUploadedHashes.length - 1) {
            await tx.wait();
        }
    }

    const totalSupply = await yc.totalSupply();
    console.log({ totalSupply: Number(totalSupply) });
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
