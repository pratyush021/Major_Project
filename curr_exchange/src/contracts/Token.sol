pragma solidity >=0.4.22 <0.9.0;

contract Token{
  string public name = "Pratyush";
  string public symbol = 'Symbol';
  uint256 public decimal = 18;
  uint256 public totalSupply;
  //track balances

  //send tokens
  mapping(address=>uint256) public balanceOf; 
  //calculating totalSupply
  constructor() public {
    totalSupply = 1000000 * (10 ** decimal);
    balanceOf[msg.sender] = totalSupply; 
  }
}
