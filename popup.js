const { ethers } = require("ehters");

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("accountList").addEventListener("click", changeAccount);
        
    document.getElementById("userAddress").addEventListener("click", copyAddress);

    document.getElementById("transferFund").addEventListener("click", handler);

    document.getElementById("header_network").addEventListener("click", getOpenNetwork);

    document.getElementById("network_item").addEventListener("click", getSelectedNetwork);

    document.getElementById("add_network").addEventListener("click", setNetwork);

    document.getElementById("loginAccount").addEventListener("click", loginUser);

    document.getElementById("account_create").addEventListener("click", createUser);
    
    document.getElementById("openCreate").addEventListener("click", openCreate);
    
    document.getElementById("sign_up").addEventListener("click", signUp);
    
    document.getElementById("login_up").addEventListener("click", login);
    
    document.getElementById("logout").addEventListener("click", logout);
    
    document.getElementById("open_Transfer").addEventListener("click", openTransfer);
    
    document.getElementById("goBack").addEventListener("click", goBack);
    
    document.getElementById("open_Import").addEventListener("click", openImport);
    
    document.getElementById("open_assets").addEventListener("click", openAssets);
    
    document.getElementById("open_activity").addEventListener("click", openActivity);
    
    document.getElementById("goHomePage").addEventListener("click", goHomePage);
    
    document.getElementById("openAccountImport").addEventListener("click", openImportModel);
    
    document.getElementById("close_import_account").addEventListener("click", closeImportModel);
    
    document.getElementById("add_new_token").addEventListener("click", addToken);
    
    document.getElementById("add_New_Account").addEventListener("click", addAccount);
});

// ========= 변수 ========= //
// testnet 주소 -> alchemy / app / polygon mumbai / api / HTTPS
// let providerURL = 'https://polygon-mumbai.g.alchemy.com/v2/LSwn5rwZ1-AJKZpl6GpHBUJhVT6EIp_S';
let providerURL = 'https://rpc.ankr.com/polygon_mumbai';

// let provider;
let privateKey;
let address;

// ========= 메서드 ========= //
function handler() {
    document.getElementById("transefer_center").style.display = "flex";

    const amount = document.getElementById("amount").value;
    const address = document.getElementById("address").value;

    // privateKey 와 address 는 각각 다른 계정에서 가져와 사용
    const private_key = "";
    const testAccount = "";

    // provider
    const provider = new ethers.providers.JsonRpcProvider(providerURL);

    // Wallet 이 class 인듯
    let wallet = new ehters.Wallet(privateKey, provider);

    const tx = {
        to: address,
        value: ethers.utils.parseEther(amount),
    };

    let a = document.getElementById("link");
    a.href = "somelink url";
    
    wallet.sendTransaction(tx).then((txObj) => {
        console.log("txHash : ", txObj.hash);

        document.getElementById("transfer_center").style.display = "none";

        const a = document.getElementById("link");

        a.style.display = "block";
    })
};

// 잔고 확인
function checkBalance() {
    const provider = new ethers.providers.JsonRpcProvider(providerURL);

    provider.getBalance(address).then((balance) => {
        const balanceInEth = ethers.utils.formatEther(balance);

        document.getElementById("accountBalance").innerHTML = `${balanceInEth} MATIC`

        document.getElementById("userAddress").innerHTML = `${address.slice(0, 15)}..`;


    });
};

// 네트워크 목록 열기
function getOpenNetwork() {
    document.getElementById("network").style.display = "block";
};

// 네트워크 선택 -> provider url (rpc 주소) 변경
function getSelectedNetwork(event) {
    const element = document.getElementById("selected_network");
    element.innerHTML = event.target.innerHTML;

    // 선택된 네트워크 별로 provider 지정
    // 나중에 환경변수로 빼기
    if (event.target.innerHTML === "BNB Mainnet") {
        providerURL = 'https://bsc-dataseed.binance.org/';
    
    } else if (event.target.innerHTML === "TBNB testnet") {
        providerURL = 'https://rpc.ankr.com/bsc_testnet_chapel/e146b2bdb0df374a1047f49f3c73f9eacabc8e8f0a0dfc5c30c7c3007adeefe7';
    
    } else if (event.target.innerHTML === "Ethereum Mainnet") {
        providerURL = 'https://eth-mainnet.g.alchemy.com/v2/LNaOTZ2xr8yE73YPDt6fJks4gtXRw0PT';
    
    } else if (event.target.innerHTML === "Polygon Mainnet") {
        providerURL = 'https://rpc.ankr.com/polygon';
    
    } else if (event.target.innerHTML === "Mumbai testnet") {
        providerURL = 'https://rpc.ankr.com/polygon_mumbai';
    
    } else if (event.target.innerHTML === "Sepolia testnet") {
        providerURL = 'https://rpc.ankr.com/eth_sepolia';
    
    }
    document.getElementById("network").style.display = "none";

    console.log("provider url : ", providerURL);
};

// 네트워크 목록 닫기
function setNetwork() {
    document.getElementById("network").style.display = "none";
};

function loginUser() {
    document.getElementById("createAccount").style.display = "none";
    document.getElementById("LoginUser").style.display = "block";

};

function createUser() {
    document.getElementById("createAccount").style.display = "block";
    document.getElementById("LoginUser").style.display = "none";

};

// create model open
function openCreate() {
    document.getElementById("createAccount").style.display = "none";
    document.getElementById("create_popUp").style.display = "block";

};

// 회원가입
function signUp() {
    const name = document.getElementById("sign_up_name").value;
    const email = document.getElementById("sign_up_email").value;
    const password = document.getElementById("sign_up_password").value;
    const passwordConfirm = document.getElementById("sign_up_passwordConfirm").value;

    document.getElementById("field").style.display = "none";
    document.getElementById("center").style.display = "block";

    const wallet = ethers.Wallet.createRandom(); // 랜덤 생성

    if (wallet.address) {
        console.log(wallet);

        // API CALL
        const url = "http://localhost:3000/api/v1/user/signup";

        const data = {
            name: name,
            email: email,
            password: password,
            passwordConfirm: passwordConfirm,
            address: wallet.address,
            private_key: wallet.privateKey,
            mnemonic: wallet.mnemonic.phrase,
        };
        // mnemonic(니모닉) : 지갑 복구를 위한 12개의 단어

        fetch(url, {
            method: "POST",
            handler: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((response) => response.json()).then((result) => {
            document.getElementById("createAddress").innerHTML = wallet.address;
            document.getElementById("createPrivateKey").innerHTML = wallet.privateKey;
            document.getElementById("createMnemonic").innerHTML = wallet.mnemonic.phrase;
            document.getElementById("center").style.display = "none";
            document.getElementById("accountData").style.display = "block";
            document.getElementById("sign_up").style.display = "none";

            const userWallet = {
                address: wallet.address,
                private_key: wallet.privateKey,
                mnemonic: wallet.mnemonic.phrase,
            };
    
            const jsonObj = JSON.stringify(userWallet);
            localStorage.setItem("userWallet", jsonObj);
    
            document.getElementById("goHomePage").style.display = "block";
            window.location.reload();
        }).catch((error) => {
            console.log("ERROR: ", error);
        });

    }
};

// 로그인
function login() {
    document.getElementById("login_form").style.display = 'none';
    document.getElementById("center").style.display = 'block';

    const email = document.getElementById("login_email").value;
    const password = document.getElementById("login_password").value;

    // API CALL
    const url = 'http://localhost:3000/api/v1/user/login'
    const data = {
        email: email,
        password: password,
    };

    fetch(url, {
        method: 'POST',
        handler: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then((response) => response.json()).then((result) => {
        console.log(result);
        const userWallet = {
            address: result.data.user.address,
            private_key: result.data.user.private_key,
            mnemonic: result.data.user.mnemonic,
        };

        const jsonObj = JSON.stringify(userWallet);
        localStorage.setItem('userWallet', jsonObj);
        window.location.reload();
    }).catch((error) => console.log("ERROR: ", error));
};

// 로그아웃
function logout() {
    localStorage.removeItem("userWallet");
    window.location.reload();

};

function openTransfer() {
    
};

function goBack() {

};

function openImport() {

};

function ImportGoBack() {

};

function openActivity() {

}

function openAssets() {

};

function goHomePage() {

};

function openImportModel() {

};

function closeImportModel() {

};

function addToken() {

};

function addAccount() {

};

// reload all data
function myFunction() {

};

function copyAddress() {

};

function changeAccount() {

};

