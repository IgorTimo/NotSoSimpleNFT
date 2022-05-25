const { assert } = require('./chai');
const { deployments, getNamedAccounts } = require('hardhat');
const { YIUR_COLLECTIBLE } = require('../constants');

describe(YIUR_COLLECTIBLE, () => {
  it('Should paginate correctly', async () => {
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

    const json00 = await yc.getAllTokens(1, 10);
    const tokents00 = JSON.parse(json00);
    const json01 = await yc.getAllTokens(2, 3);
    const tokents01 = JSON.parse(json01);

    const json11 = await yc.getTokensOf(deployer, 1, 2);
    const tokents11 = JSON.parse(json11);
    const json12 = await yc.getTokensOf(deployer, 2, 2);
    const tokents12 = JSON.parse(json12);

    const json2 = await yc.getTokensOf(user1, 2, 10);
    const tokents2 = JSON.parse(json2);

    assert.strictEqual(tokents00.tokens.length, 5);
    assert.strictEqual(tokents01.tokens.length, 2);
    assert.strictEqual(tokents11.tokens.length, 2);
    assert.strictEqual(tokents12.tokens.length, 1);
    assert.strictEqual(tokents2.tokens.length, 0);
  });
});
