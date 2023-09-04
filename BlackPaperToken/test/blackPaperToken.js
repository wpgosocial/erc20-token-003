const BlackPaperToken = artifacts.require("BlackPaperToken");
const ERC20 = artifacts.require("ERC20"); // Assuming you have an ERC20 contract in your truffle project

contract('BlackPaperToken', (accounts) => {
    let blackPaperToken;
    const [deployer, minter, user1, user2] = accounts;
    let initialSupply = web3.utils.toBN(web3.utils.toWei("370000000", "ether"));  // This value should match your contract's initial supply


    it('should deploy BlackPaperToken contract', async () => {
        const uniswapMockAddress = user1; // Just for testing. Ideally, you'd mock a Uniswap router for more comprehensive tests.
        const erc20MockAddress = ERC20.address; // Assuming you've deployed a mock ERC20 or the real one.

        blackPaperToken = await BlackPaperToken.new(uniswapMockAddress, erc20MockAddress, { from: deployer });

        assert(blackPaperToken.address !== '');
    });

    it('should mint the initial supply to the deployer', async () => {
        let balance = await blackPaperToken.balanceOf(deployer);
        assert(balance.eq(initialSupply));
    });

    it('should allow the deployer to mint tokens', async () => {
        await blackPaperToken.grantRole(web3.utils.soliditySha3('MINTER_ROLE'), minter, { from: deployer });
        
        let mintAmount = web3.utils.toBN(web3.utils.toWei("1000", "ether"));
        await blackPaperToken.mint(user1, mintAmount, { from: minter });

        let balance = await blackPaperToken.balanceOf(user1);
        assert(balance.eq(mintAmount));
    });


    it('should allow pausing and unpausing by deployer', async () => {
        await blackPaperToken.pause({ from: deployer });
        let paused = await blackPaperToken.paused();
        assert(paused === true);

        await blackPaperToken.unpause({ from: deployer });
        paused = await blackPaperToken.paused();
        assert(paused === false);
    });

});