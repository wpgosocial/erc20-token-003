const BlackPaperToken = artifacts.require("BlackPaperToken");

module.exports = function(deployer, network, accounts) {
    // For simplicity, let's use the first account as the deployer
    const deployerAccount = accounts[0];
    const uniswapRouterAddress = "0xB26B2De65D07eBB5E54C7F6282424D3be670E1f0";
    //const uniswapRouterAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
    deployer.deploy(BlackPaperToken, uniswapRouterAddress, { from: deployerAccount });
};