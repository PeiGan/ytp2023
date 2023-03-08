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
                "name": "init_amount",
                "type": "uint256"
            }
        ],
        "name": "poolAdded",
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
                "name": "state_before",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "state_after",
                "type": "uint256"
            }
        ],
        "name": "poolStateChanged",
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
                "name": "pool_id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "result",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "endPool",
        "outputs": [],
        "stateMutability": "nonpayable",
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
                "name": "pool_id",
                "type": "uint256"
            }
        ],
        "name": "forceEnd",
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
        "inputs": [],
        "name": "newPool",
        "outputs": [],
        "stateMutability": "payable",
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
        "name": "pool_state",
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
        "name": "removeAllFund",
        "outputs": [],
        "stateMutability": "nonpayable",
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
        "name": "removeFund",
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
                "name": "pool_id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "state",
                "type": "uint256"
            }
        ],
        "name": "setPoolState",
        "outputs": [],
        "stateMutability": "nonpayable",
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

var contract_address = "0xA3DDB347b3160Dc52643b4c83Bf5779b953BcB67";
var contract = new Contract(contract_abi, contract_address);
function getDataOnChain() {
    var data = [];
    var total_pool;
    function getData(index) {
        return new Promise((resolve, reject) => {
            //console.log(index);
            data[index] = {
                pool_state: 0,
                init_amount: 0,
                pool_amount: 0,
                total_participants: 0
            };
            contract.methods.pool_state(index).call()
                .then((pool_state) => {
                    data[index]['pool_state'] = pool_state;
                    //console.log("h");
                    //console.log(pool_state);
                    return contract.methods.init_amount(index).call();
                })
                .then((init_amount) => {
                    data[index]['init_amount'] = init_amount;
                    //console.log("i");
                    //console.log(init_amount);
                    return contract.methods.pool_amount(index).call();
                })
                .then((pool_amount) => {
                    data[index]['pool_amount'] = pool_amount;
                    //console.log("j");
                    //console.log(pool_amount);
                    return contract.methods.total_participants(index).call();
                })
                .then((total_participants) => {
                    data[index]['total_participants'] = total_participants;
                    //console.log("k");
                    //console.log(total_participants);
                    index = index + 1;
                    if (index <= total_pool) return getData(index);
                })
                .then((result) => {
                    //console.log("l");
                    //console.log(result);
                    resolve("good");
                });
        });
    }
    return new Promise((resolve, reject) => {
        contract.methods.total_pool().call().then((_total_pool) => {
            total_pool = _total_pool;
            return getData(1);
        }).then((result) => {
            //console.log(result);
            //console.log(data);
            resolve(data);
        });
    })
}

var isinfo = new Set();
var d, n = 0, m = 7, k = 4;
var onChainData;
function showdata() {
    $("tbody").html("");
    for (var i = 0; i < n; i++) {
        $("tbody").append(`<tr id="c${i}"></tr>`);
        $("#c" + i).append(`<td>${d[m*i]}</td>`);
        if (isinfo.has(i)) {
            $("tbody").append(`
                <tr id="cool">
                    <td colspan="${m + 1}">
                        <ol>
                            <li>編號：${d[m*i+1]}</li>
                            <li>項目描述：${d[m*i+2]}</li>
                            <li>原獎池：${d[m*i+3]}</li>
                            <li>項目方姓名：${d[m*i+4]}</li>
                            <li>項目方Email：${d[m*i+6]}</li>
                            <li>智能合約地址：${d[m*i+5]}</li>
                        </ol>
                        <a id="h${i}" class="button alt small hack">破解</a>
                        <a id="i${i}" class="button alt small invest">入金</a>
                    </td>
                </tr>`);
        }
    }
    var data = onChainData;
    for (var i = 1; i < data.length; i++) {
        if (data[data.length-i]['pool_state'] == 0) $("#c" + (i - 1)).append(`<td>closed</td>`);
        else $("#c" + (i - 1)).append(`<td>active</td>`);
        $("#c" + (i - 1)).append(`<td>${data[data.length-i]['init_amount']}</td>`);
        $("#c" + (i - 1)).append(`<td>${parseFloat(data[data.length-i]['init_amount'])+parseFloat(data[data.length-i]['pool_amount'])}</td>`);
        $("#c" + (i - 1)).append(`<td>${data[data.length-i]['total_participants']}</td>`);
    }
    for (var i = 0; i < n; i++) $("#c" + i).append(`<td><a id="b${i}" class="button alt small info">查看詳情</a></td>`);
}
$("#search").on('click', function () {
    $("tbody").html(`Getting data...`);
    var cnt=0;
    var stop=setInterval(function(){
        cnt++;
        cnt%=3;
        $("#search").html("Searching.")
        for(var i=0;i<cnt;i++) $("#search").append(".");
    }, 500);
    isinfo.clear();
    var a = {
        sheetUrl: 'https://docs.google.com/spreadsheets/d/1wyzTbgj5W0HfIwCBW0vqEeuEJYzo7Jn6_DumJ8Z-gyo/edit#gid=2033481343',
        sheetTag: 'second',
        row: 1,
        col: 1,
        endRow: 1,
        endCol: 1
    };
    $.get('https://script.google.com/macros/s/AKfycbw2cEr58WMddT5i-PydfnFhh3d3wqVgrCLsdB7MPFZI7bU1_3OqvQevgvLystQGcZ7SVg/exec', a, function (data) {
        console.log(data);
        n = parseInt(data);
        a = {
            sheetUrl: 'https://docs.google.com/spreadsheets/d/1wyzTbgj5W0HfIwCBW0vqEeuEJYzo7Jn6_DumJ8Z-gyo/edit#gid=2033481343',
            sheetTag: 'second',
            row: 2,
            col: 1,
            endRow: n + 1,
            endCol: m
        };
        $.get('https://script.google.com/macros/s/AKfycbw2cEr58WMddT5i-PydfnFhh3d3wqVgrCLsdB7MPFZI7bU1_3OqvQevgvLystQGcZ7SVg/exec', a, function (data) {
            d = data.split(',');
            console.log(d);
            getDataOnChain().then((_data) => {
                onChainData = _data;
                for (var i = 1; i < onChainData.length; i++) {
                    onChainData[i]['pool_amount'] /= 1000000000000000000;
                }
                clearInterval(stop);
                $("#search").html("Search");
                showdata();
            });
        });
    });
});
$('tbody').on('click', '.info', function () {
    var ind = parseInt(this.id.substring(1));
    if (isinfo.has(ind)) isinfo.delete(ind);
    else isinfo.add(ind);
    showdata();
});

/*function getPoolID() {
    //TODO:Get Pool_id
    return 3;
}*/

/*function getValue() {
    // TODO: Get Value (in eth)
    return 0.01;
}*/

function EncodeTransactionData(pool_id) {
    const addEtherIntoPool_ID = "6037bc62";
    //translate pool_id (type:uint256) into byte code
    pool_id = pool_id.toString(16).padStart(64, "0");
    return "0x" + addEtherIntoPool_ID + pool_id;
}

async function invest(money, pool_id) {
    if (ethereum.isConnected()) {
        let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts.length <= 0) {
            window.alert("Please retry to login MetaMask");
        } else {
            //encode data
            console.log("pool_id (dec) = " + pool_id);
            var transaction_data = EncodeTransactionData(pool_id);
            console.log("transaction_data (encoded) = " + transaction_data);
            var sender_address = accounts[0];
            var receiver_address = "0xA3DDB347b3160Dc52643b4c83Bf5779b953BcB67";
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
$('tbody').on('click', '.invest', function () {
    var money = prompt("你要入多少金(ETH)", "0.01");
    if(money==null) return;
    invest(money, onChainData.length-1-this.id.substring(1));
});
$('tbody').on('click', '.hack', function () {
    var report = prompt("請把你的審計報告上傳到網路上並貼上連結", "https://docs.google.com");
});