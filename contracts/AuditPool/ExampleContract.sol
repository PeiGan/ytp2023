pragma solidity 0.6.12;
import "./AuditingContractBase.sol";

contract ExampleContract is AuditingContractBase {
    mapping (address => uint) public balanceOf;
    mapping (address => uint) public has_get_initial;
    address[] public address_of_users;
    uint constant public initial_amount = 1;
    uint public total_user = 0;

    constructor (AuditPool _auditPool) AuditingContractBase(_auditPool) public payable {
        auditPool.initiatePool{value: msg.value}(address(this), 120, msg.sender);
    }

    function getInitialAmount() public {
        require(has_get_initial[msg.sender] == 0, "Initial amount has received!");
        has_get_initial[msg.sender] = 1;
        balanceOf[msg.sender] += initial_amount;
        total_user += 1;
        address_of_users.push(msg.sender);
    }

    function transfer(address to, uint value) public returns (bool) {
        require(balanceOf[msg.sender] - value >= 0);
        balanceOf[msg.sender] -= value;
        balanceOf[to] += value;
        return true;
    }

    function testContract(address receiver) override external {
        uint sum = 0;
        for(uint i = 0; i < total_user; i++){
            sum += balanceOf[address_of_users[i]];
        }
        if(sum != (total_user * initial_amount)){
            auditPool.contractHacked(receiver, 10000);
        }
    }
}