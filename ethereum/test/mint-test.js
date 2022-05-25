const { assert } = require('./chai');
const { deployments, getNamedAccounts } = require('hardhat');
const { YIUR_COLLECTIBLE } = require('../constants');

describe(YIUR_COLLECTIBLE, () => {
  it('Should return a correct couple of tokens after minting and transfering', async () => {
    await deployments.fixture(YIUR_COLLECTIBLE);
    const { deployer, user1 } = await getNamedAccounts();

    const yc = await ethers.getContract(YIUR_COLLECTIBLE);

    await yc.mintItem(deployer, 'url1');
    await yc.mintItem(deployer, 'url2');
    await yc.mintItem(deployer, 'url3');
    await yc.mintItem(deployer, 'url4');
    await yc.mintItem(deployer, 'url5');

    await yc.transferFrom(deployer, user1, 3);
    await yc.transferFrom(deployer, user1, 4);

    const json1 = await yc.getTokensOf(deployer);
    const tokents1 = JSON.parse(json1);

    const json2 = await yc.getTokensOf(user1);
    const tokents2 = JSON.parse(json2);

    assert.strictEqual(tokents1.tokens.length, 3);
    assert.strictEqual(tokents2.tokens.length, 2);
  });
});
