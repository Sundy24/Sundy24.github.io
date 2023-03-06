class account{
    constructor(accName,amnt){
        this.accountName = accName;
        this.balance = parseInt(amnt);
    }
    getAccName(){
        return this.accountName;
    }
    getBalance(){
        return this.balance;
    }
    deposit(amount){
        this.balance += parseInt(amount);
    }
    debit(amount){
        this.balance -= parseInt(amount);
    }
}
class accountList{
    static accountInfoList = new Array();
}
window.onload = function(){
    document.getElementById("btnCreateAccount").onclick = createNewAccount;
    document.getElementById("btnDeposit").onclick = depositAccount;
    document.getElementById("btnDebit").onclick = debitAccount;
    document.getElementById("btnSubmit").onclick = doOperation;
};
function isEmpty(text){
    if(!text || text === null || text.trim() == "")
        return true;
    else
        return false;
}
function isNumber(text){
    var numbers = /^-?\d*(\.\d+)?$/;
    if(text.match(numbers)){
        return true;
     }
     else{
         return false;
     }
}
function clearFields(){
    document.getElementById("txtAccountName").value = ""
    document.getElementById("txtDeposit").value = "";
    document.getElementById("txtAmount").value = "";
}
function createNewAccount(){
    var accName = document.getElementById("txtAccountName").value;
    var amnt = document.getElementById("txtDeposit").value;
    if(isEmpty(accName)){
        alert("Please enter the account name.");
    }
    else if(isEmpty(amnt)){
        alert("Please enter the deposit amount.");
    }
    else if(!isNumber(amnt)){
        alert("Please enter only numbers for the deposit amount.")
    }
    else{
        var newAcc = new account(accName,parseInt(amnt));
        accountList.accountInfoList.push(newAcc);
        updateDropdown(accName);
        showAccountList();
        clearFields();  
    }
}
function showAccountList(){
    let str = "";
    for(let i = 0; i < accountList.accountInfoList.length; i++){
        let acc = accountList.accountInfoList[i];
        str += "Account Name : "+ acc.getAccName()
        + ", Balance : "+ acc.getBalance() +'\r\n';
    }
    document.getElementById("txtAccountList").value = str;
}
function updateDropdown(accName){
    let sel = document.getElementById("ddAccount");
    let op = new Option(accName,accName);
    sel.add(op,undefined);
}
function showDiv() {
    document.getElementById("hidden").style.display = "block";
} 
function closeDiv() {
    document.getElementById("hidden").style.display = "none";
}
function depositAccount(){
    document.getElementById("operation").value = "deposit";
    showDiv();
}
function debitAccount(){
    document.getElementById("operation").value = "debit";
    showDiv();
}
function doOperation(){
    let operation = document.getElementById("operation").value;
    let amnt = document.getElementById("txtAmount").value;
    if(isEmpty(amnt)){
        alert("Please enter the amount.")
    }
    else if(!isNumber(amnt)){
        alert("Please enter only number for the amount.");
    }
    else{
        let sel = document.getElementById("ddAccount");
        let selectedAcc = sel.value;
        for(let i = 0; i < accountList.accountInfoList.length; i++){
            let acc = accountList.accountInfoList[i];
            if(acc.getAccName() === selectedAcc){
                if(operation === "deposit"){
                    accountList.accountInfoList[i].deposit(parseInt(amnt));
                }
                else{
                    accountList.accountInfoList[i].debit(parseInt(amnt));
                }
            }
        }
        showAccountList();
        clearFields();
        closeDiv();
    }
}