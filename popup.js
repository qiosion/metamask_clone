document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("account_list").addEventListener("click", changeAccount);
        
    document.getElementById("user_address").addEventListener("click", copyAddress);

    document.getElementById("transfer_fund").addEventListener("click", handler);

    document.getElementById("header_network").addEventListener("click", getOpenNetwork);

    document.getElementById("network_item").addEventListener("click", getSelectedNetwork);

    document.getElementById("add_network").addEventListener("click", setNetwork);

    document.getElementById("login_account").addEventListener("click", loginUser);

    document.getElementById("account_create").addEventListener("click", createUser);
    
    document.getElementById("open_create").addEventListener("click", openCreate);
    
    document.getElementById("sign_up").addEventListener("click", signUp);
    
    document.getElementById("login_up").addEventListener("click", login);
    
    document.getElementById("logout").addEventListener("click", logout);
    
    document.getElementById("open_transfer").addEventListener("click", openTransfer);
    
    document.getElementById("goBack").addEventListener("click", goBack);
    
    document.getElementById("open_import").addEventListener("click", openImport);
    
    document.getElementById("open_assets").addEventListener("click", openAssets);
    
    document.getElementById("open_activity").addEventListener("click", openActivity);
    
    document.getElementById("go_home_page").addEventListener("click", goHomePage);
    
    document.getElementById("open_account_import").addEventListener("click", openImportModel);
    
    document.getElementById("close_account_import").addEventListener("click", closeImportModel);
    
    document.getElementById("add_new_token").addEventListener("click", addToken);
    
    document.getElementById("add_new_account").addEventListener("click", addAccount);
});

// ========= 변수 ========= //
// testnet 주소
let providerURL = 'https://eth-sepolia.g.alchemy.com/v2/BfWYkYAVj8wCQ6EEL-xeTcLKv4ygqoOo';

let provider;
let privateKey;
let address;

// ========= 메서드 ========= //
function handler() {
    document.getElementById("transefer_center").style.display = "flex";

    const amount = document.getElementById("amount").value;
    const address = document.getElementById("address").value;

    // privateKey 와 address 는 각각 다른 계정에서 가져와 사용
};

// 잔고 확인
function checkBalance() {

};

//
function getOpenNetwork() {

};

function getSelectedNetwork() {

};

function setNetwork() {

};

function loginUser() {

};

function createUser() {

};

// create model open
function openCreate() {

};

function signUp() {

};

function login() {

};

function logout() {

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

