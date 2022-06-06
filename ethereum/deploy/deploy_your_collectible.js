const { YOUR_COLLECTIBLE } = require("../constants");

/**
 * @type import('hardhat-deploy/types').DeployFunction
 */
const deployFunction = async (hre) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  await deploy(YOUR_COLLECTIBLE, {
    from: deployer,
    log: true,
  });
};

deployFunction.tags = [YOUR_COLLECTIBLE];

module.exports.default = deployFunction;
