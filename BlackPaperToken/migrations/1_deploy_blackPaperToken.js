const BlackPaperToken = artifacts.require("BlackPaperToken");

module.exports = function(deployer, network, accounts) {
    // For simplicity, let's use the first account as the deployer
    const deployerAccount = accounts[0];

    const uniswapRouterAddress = "0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD"; //Sepolia address from the unniswap team
 
    deployer.deploy(BlackPaperToken, uniswapRouterAddress, { from: deployerAccount });
};