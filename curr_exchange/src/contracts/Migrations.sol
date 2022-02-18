// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Migrations {
  address public owner = msg.sender;
  uint public last_completed_migration;

  modifier _restricted() {
    if (msg.sender == owner) _;
  }

  function setCompleted(uint completed) public _restricted {
    last_completed_migration = completed;
  }
  //new code 
  function upgrade(address new_address) public _restricted {
    Migrations upgraded = Migrations(new_address);
    upgraded.setCompleted(last_completed_migration);
  }
}
