const Contract = require('web3-eth-contract');
Contract.setProvider("https://goerli.infura.io/v3/27ee7d4de18a477589b23628b97a1758");

var contract_abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "participant",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "participant_id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "pool_id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount_added_this_time",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "total_amonut_of_participant",
                "type": "uint256"
            }
        ],
        "name": "etherAddedIntoPool",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "etherSent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "extraValueGot",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "feeGot",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "feeSet",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "pool_id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "result",
                "type": "uint256"
            }
        ],
        "name": "poolEnded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "pool_id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "init_amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "duration",
                "type": "uint256"
            }
        ],
        "name": "poolInitiated",
        "type": "event"
    },
    {
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pool_id",
                "type": "uint256"
            }
        ],
        "name": "addEtherIntoPool",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "address_of_participant",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "auditing_contracts",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "pool_id",
                "type": "uint256"
            }
        ],
        "name": "claimReward",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "portion",
                "type": "uint256"
            }
        ],
        "name": "contractHacked",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "duration_time",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "extra_value",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "fee_amount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "has_claimed_reward",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "id_of_auditing_contracts",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "init_amount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "audited_contract",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "duration",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "initiatePool",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "is_pool_ended",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "is_pool_hacked",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "participant_amount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "participant_id",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "pool_amount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "receiver_of_init_amount",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "removeExtraValue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "removeFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "removeFeeAndExtraValue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "setFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "start_time",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "total_fee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "total_minus_fee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "total_participants",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "total_pool",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
];

var contract_address = "0x7Bf16ee9588F10249652A9624fEa170d1D13C8F5";
var contract = new Contract(contract_abi, contract_address);
function getDataOnChain() {
    var data = [];
    var total_pool;
    function getData(index) {
        return new Promise((resolve, reject) => {
            //console.log(index);
            data[index] = {
                is_pool_ended: 0,
                is_pool_hacked: 0,
                init_amount: 0,
                pool_amount: 0,
                total_participants: 0
            };
            contract.methods.is_pool_ended(index).call()
                .then((is_pool_ended) => {
                    data[index]['is_pool_ended'] = is_pool_ended;
                    return contract.methods.is_pool_hacked(index).call();
                })
                .then((is_pool_hacked) => {
                    data[index]['is_pool_hacked'] = is_pool_hacked;
                    return contract.methods.init_amount(index).call();
                })
                .then((init_amount) => {
                    data[index]['init_amount'] = init_amount;
                    return contract.methods.pool_amount(index).call();
                })
                .then((pool_amount) => {
                    data[index]['pool_amount'] = pool_amount;
                    return contract.methods.total_participants(index).call();
                })
                .then((total_participants) => {
                    data[index]['total_participants'] = total_participants;
                    return contract.methods.start_time(index).call();
                })
                .then((start_time) => {
                    data[index]['start_time'] = start_time;
                    return contract.methods.duration_time(index).call();
                })
                .then((duration_time) => {
                    data[index]['duration_time'] = duration_time;
                    return contract.methods.auditing_contracts(index).call();
                })
                .then((auditing_contract) => {
                    data[index]['auditing_contract'] = auditing_contract;
                    index = index + 1;
                    if (index <= total_pool) return getData(index);
                })
                .then((result) => {
                    resolve("good");
                });
        });
    }
    return new Promise((resolve, reject) => {
        contract.methods.total_pool().call().then((_total_pool) => {
            total_pool = _total_pool;
            if(total_pool == 0) return [];
            return getData(1);
        }).then((result) => {
            console.log(result);
            console.log(data);
            resolve(data);
        });
    })
}

var isinfo = new Set();
var onChainData=[];
var state;
function showdata() {
    $("tbody").html("");
    var data = onChainData;
    for (var i = 1; i < data.length; i++) {
        if(state == 1 && data[i]['is_pool_ended'] == 1) continue;
        if(state == 2 && data[i]['is_pool_ended'] == 0) continue;
        if(state == 3 && data[i]['is_pool_hacked'] == 0) continue;
        $("tbody").append(`<tr id="c${i}"></tr>`);
        $("#c" + i).append(`<td>${i}</td>`);
        if(data[i]['is_pool_hacked'] == 1) $("#c" + i).append(`<td>hacked</td>`);
        else if(data[i]['is_pool_ended'] == 1) $("#c" + i).append(`<td>closed</td>`);
        else $("#c" + i).append(`<td>active</td>`);
        $("#c" + i).append(`<td>${parseFloat(data[i]['init_amount'] / 1000000000000000000)}</td>`);
        $("#c" + i).append(`<td>${parseFloat(data[i]['pool_amount'] / 1000000000000000000)}</td>`);
        $("#c" + i).append(`<td>${data[i]['total_participants']}</td>`);
        var end_date = new Date((parseInt(data[i]['start_time']) + parseInt(data[i]['duration_time'])) * 1000);
        $("#c" + i).append(`<td>${end_date.toLocaleString()}</td>`)
        $("#c" + i).append(`<td><a id="b${i}" class="button alt small info">查看詳情</a></td>`);
        if (isinfo.has(i)) {
            if(data[i]['is_pool_ended'] == 1){
                if(data[i]['is_pool_hacked'] == 1){
                    $("tbody").append(`
                    <tr id="cool">
                        <td colspan="${7}">
                                <p>智能合約地址：${data[i]['auditing_contract']}</p>
                                <p><a href="https://goerli.etherscan.io/address/${data[i]['auditing_contract']}" target="_blank">在Etherscan中查看</a></p>
                            <a id="btn_invest${i}" class="button disabled alt small invest">入金</a>
                            <a id="btn_claim${i}" class="button disabled alt small claim">領取</a>
                        </td>
                    </tr>`);
                }else{
                    $("tbody").append(`
                    <tr id="cool">
                        <td colspan="${7}">
                                <p>智能合約地址：${data[i]['auditing_contract']}</p>
                                <p><a href="https://goerli.etherscan.io/address/${data[i]['auditing_contract']}" target="_blank">在Etherscan中查看</a></p>
                            <a id="btn_invest${i}" class="button disabled alt small invest">入金</a>
                            <a id="btn_claim${i}" class="button alt small claim">領取</a>
                        </td>
                    </tr>`);
                }
            }else{
                $("tbody").append(`
                <tr id="cool">
                    <td colspan="${7}">
                            <p>智能合約地址：${data[i]['auditing_contract']}</p>
                            <p><a href="https://goerli.etherscan.io/address/${data[i]['auditing_contract']}" target="_blank">在Etherscan中查看</a></p>
                        <a id="btn_invest${i}" class="button alt small invest">入金</a>
                        <a id="btn_claim${i}" class="button disabled alt small claim">領取</a>
                    </td>
                </tr>`);
            }
        }
    }
}
$("#search").on('click', function () {
    $("tbody").html(`Getting data...`);
    var cnt = 0;
    var stop=setInterval(function(){
        cnt++;
        cnt%=3;
        $("#search").html("Searching.")
        for(var i=0;i<cnt;i++) $("#search").append(".");
    }, 500);
    getDataOnChain().then((_data) => {
        onChainData = _data;
        clearInterval(stop);
        $("#search").html("Search");
        showdata();
    });
});
$('tbody').on('click', '.info', function () {
    var ind = parseInt(this.id.substring(1));
    if (isinfo.has(ind)) isinfo.delete(ind);
    else isinfo.add(ind);
    showdata();
});

function EncodeTransactionData1(pool_id) {
    const addEtherIntoPool_ID = "6037bc62";
    //translate pool_id (type:uint256) into byte code
    pool_id = pool_id.toString(16).padStart(64, "0");
    return "0x" + addEtherIntoPool_ID + pool_id;
}
function EncodeTransactionData2(pool_id) {
    const claimReward_ID = "0xae169a5";
    pool_id = pool_id.toString(16).padStart(64, "0");
    return "0x" + claimReward_ID + pool_id;
}

async function invest(money, pool_id) {
    if (ethereum.isConnected()) {
        let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts.length <= 0) {
            window.alert("Please retry to login MetaMask");
        } else {
            //encode data
            console.log("pool_id (dec) = " + pool_id);
            var transaction_data = EncodeTransactionData1(pool_id);
            console.log("transaction_data (encoded) = " + transaction_data);
            var sender_address = accounts[0];
            var receiver_address = contract_address;
            var value = money * 1000000000000000000;
            value = "0x" + value.toString(16);

            //sendTransaction and call addEtherIntoPool function
            ethereum
                .request({
                    method: 'eth_sendTransaction',
                    params: [
                        {
                            from: sender_address,
                            to: receiver_address,
                            value: value,
                            data: transaction_data
                        },
                    ],
                })
                .then((txHash) => {
                    console.log("Transaction_send Successfully");
                    console.log("Transactoin Hash : " + txHash);
                    console.log("From : " + sender_address);
                    console.log("To : " + receiver_address);
                    console.log("value : " + value);
                    console.log("data : " + transaction_data);
                })
                .catch((error) => {
                    console.error(error);
                    if (error.code == 4001) {
                        window.alert("Rejected By User");
                        console.log("send trancation failed due to user rejection");
                    }
                });
        }
    } else {
        window.alert("Cannot connect to ethereum");
        console.log("Fail to connect to ethereum");
    }
}

async function claim(pool_id) {
    if (ethereum.isConnected()) {
        let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts.length <= 0) {
            window.alert("Please retry to login MetaMask");
        } else {
            //encode data
            console.log("pool_id (dec) = " + pool_id);
            var transaction_data = EncodeTransactionData2(pool_id);
            console.log("transaction_data (encoded) = " + transaction_data);
            var sender_address = accounts[0];
            var receiver_address = contract_address;

            //sendTransaction and call addEtherIntoPool function
            ethereum
                .request({
                    method: 'eth_sendTransaction',
                    params: [
                        {
                            from: sender_address,
                            to: receiver_address,
                            data: transaction_data
                        },
                    ],
                })
                .then((txHash) => {
                    console.log("Transaction_send Successfully");
                    console.log("Transactoin Hash : " + txHash);
                    console.log("From : " + sender_address);
                    console.log("To : " + receiver_address);
                    console.log("data : " + transaction_data);
                })
                .catch((error) => {
                    console.error(error);
                    if (error.code == 4001) {
                        window.alert("Rejected By User");
                        console.log("send trancation failed due to user rejection");
                    }
                });
        }
    } else {
        window.alert("Cannot connect to ethereum");
        console.log("Fail to connect to ethereum");
    }
}

$('tbody').on('click', '.invest', function () {
    var pool_id = this.id.substring(10);
    if(onChainData[pool_id]['is_pool_ended'] == 1) return;
    var money = prompt("你要入多少金(ETH)", "0.01");
    if(money==null) return;
    invest(pool_id);
});
$('tbody').on('click', '.claim', function () {
    var pool_id = this.id.substring(9);
    if(onChainData[pool_id]['is_pool_ended'] == 0 || onChainData[pool_id]['is_pool_hacked'] == 1) return;
    claim(pool_id);
})
$("#all-data").on('click', function(){ state=0;});
$("#active-data").on('click', function(){ state=1;});
$("#closed-data").on('click', function(){ state=2;});
$("#hacked-data").on('click', function(){ state=3;});