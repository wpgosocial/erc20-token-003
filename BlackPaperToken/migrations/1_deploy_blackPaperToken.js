const BlackPaperToken = artifacts.require("BlackPaperToken");

module.exports = function(deployer, network, accounts) {
    // For simplicity, let's use the first account as the deployer
    const deployerAccount = accounts[0];
    //const uniswapRouterAddress = "0xB26B2De65D07eBB5E54C7F6282424D3be670E1f0";

    const uniswapRouterAddress = "0x86dcd3293C53Cf8EFd7303B57beb2a3F671dDE98";
 
    deployer.deploy(BlackPaperToken, uniswapRouterAddress, { from: deployerAccount });
};