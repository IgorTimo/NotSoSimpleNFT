const { YIUR_COLLECTIBLE } = require('../constants');

/**
 * @type import('hardhat-deploy/types').DeployFunction
 */
const deployFunction = async (hre) => {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;

    const { deployer } = await getNamedAccounts();

    await deploy(YIUR_COLLECTIBLE, {
        from: deployer,
        log: true,
    });
};

deployFunction.tags = [YIUR_COLLECTIBLE];

module.exports.default = deployFunction;
