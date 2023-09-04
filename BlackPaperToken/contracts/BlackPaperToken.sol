// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

interface IUniswapV2Router {
    function WETH() external pure returns (address);
    function swapETHForExactTokens(uint256 amountOut, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts);
}

contract BlackPaperToken is  ERC20Burnable, AccessControl, Pausable, ReentrancyGuard {
    //using SafeMath for uint256;

    //uint256 private _maxTotalSupply = 100000000000000 * 10**decimals();
    uint256 private _initialSupply = 370000000 * 10**decimals();
    uint256 private _buybackFeePercent = 2;

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    //IUniswapV2Router public uniswapRouter;
    //address private WETH;

    event BuybackFeeChanged(uint256 newFeePercent);
    //event EtherWithdrawn(address indexed recipient, uint256 amount);
    //event UniswapRouterUpdated(address newRouterAddress);

    constructor() ERC20("BlackPaperToken", "BLPT") {
        require(_initialSupply > 0, "Initial supply must be greater than zero");
        _mint(msg.sender, _initialSupply);
        //_setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        //_setupRole(MINTER_ROLE, msg.sender);
       // uniswapRouter = IUniswapV2Router(_uniswapRouterAddress);
       // WETH = uniswapRouter.WETH();
    }

    function _mint(address account, uint256 amount) internal override(ERC20) {
        super._mint(account, amount);  // Here we're calling the _mint function from ERC20Capped
    }
   /*
    function updateUniswapRouter(address newRouterAddress) external onlyRole(DEFAULT_ADMIN_ROLE) {
        uniswapRouter = IUniswapV2Router(newRouterAddress);
        WETH = uniswapRouter.WETH();
        emit UniswapRouterUpdated(newRouterAddress);
    }

    function withdrawEther(address payable recipient, uint256 amount) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(address(this).balance >= amount, "Not enough Ether in the contract");
        recipient.transfer(amount);
        emit EtherWithdrawn(recipient, amount);
    }
    */

    receive() external payable {}
}