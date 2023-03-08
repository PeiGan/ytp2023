pragma solidity 0.6.12;
import "./AuditingContractInterface.sol";
import "./AuditPool.sol";

abstract contract AuditingContractBase is AuditingContractInterface{
    AuditPool auditPool;
    constructor (AuditPool _auditPool) public {
        auditPool = _auditPool;
    }
}