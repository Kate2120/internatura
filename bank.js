let myBank;
class Bank {
    customerArray = [];
    allBankMoney;
    debtInactiveClients;
    countDebtInactiveClients;
    debtActiveClients;
    countDebtActiveClients;
    constructor(name) {
        this.name = name;
    }
    getCustomerArray(){
        return this.customerArray;
    }
}

class Customer {
    accountArray = [];
    constructor(customerId, name, surname, isActive, registrationDate) {
        this.customerId = customerId;
        this.name = name;
        this.surname = surname;
        this.isActive = isActive;
        this.registrationDate = registrationDate;
    }
    getAccountArray(){
        return this.accountArray;
    }
    getIsActive(){
        return this.isActive;
    }
}

class Account {
    constructor(accountId, type, createDate, expiredDate, currency, amount) {
        this.accountId = accountId;
        this.type = type;
        this.createDate = createDate;
        this.expiredDate = expiredDate;
        this.currency = currency;
        this.amount = amount;
    }
    getTypeAccount() {
        return this.type;
    }
    getCurrencyAccount() {
        return this.currency;
    }
    getAmountAccount() {
        return this.amount;
    }
    getAmountUAH(){
        if(this.currency === 'UAH') {
            return this.amount;
        }
        return 0;
    }
    getAmountUSD(){
        if(this.currency === 'USD') {
            return this.amount;
        }
        return 0;
    }
}

class CreditAccount extends Account {
    constructor(accountId, type, createDate, expiredDate, currency, amount, creditFunds, creditLimit) {
        super(accountId, type, createDate, expiredDate, currency, amount);
        this.creditFunds = creditFunds;
        this.creditLimit = creditLimit;
    }
    getAmountBank(){
        return this.creditLimit - this.creditFunds;
    }
    getCreditFundsUSD(){
        if(this.currency === 'USD'){
        return this.creditFunds;
        }
        return 0;
    }
    getCreditFundsUAH(){
        if(this.currency === 'UAH'){
            return this.creditFunds;
        }
        return 0;
    }
    getAmountBankUAH(){
        if(this.currency === 'UAH'){
            return this.creditLimit - this.creditFunds;
        }
        return 0;
    }
    getAmountBankUSD(){
        if(this.currency === 'USD'){
            return this.creditLimit - this.creditFunds;
        }
        return 0;
    }
}

function createBank(name, nationalCurrency) {
    myBank = new Bank(name, nationalCurrency)
    return myBank;
}
createBank("My happy bank", "UAH");

function addCustomer(customerId, name, surname, isActive, registrationDate){
    let newCustomer = new Customer(customerId, name, surname, isActive, registrationDate);
    myBank.customerArray.push(newCustomer);
    return newCustomer;
}
addCustomer('1', 'Нина', 'Малыгина', 'true', '21.11.2020' );
addCustomer('2', 'Ольга', 'Савенкова', 'false', '05.12.2020' );
addCustomer('3', 'Марина', 'Митина', 'true', '08.12.2020' );
addCustomer('4', 'Александра', 'Синицина', 'true', '09.12.2020' );
addCustomer('5', 'Ольга', 'Валова', 'true', '10.12.2020' );
addCustomer('6', 'Антонина', 'Сидорова', 'true', '10.12.2020' );
addCustomer('7', 'Елизавета', 'Кукушкина', 'true', '12.12.2020' );
addCustomer('8', 'Максим', 'Ветров', 'true', '13.12.2020' );

function addAccount(accountId, type, createDate, expiredDate, currency, amount, customerName, customerSurname){
    let newAccount = new Account(accountId, type, createDate, expiredDate, currency,  amount, customerName, customerSurname);
    for(let i = 0; i < myBank.customerArray.length; i++){
        if(myBank.customerArray[i].name === customerName && myBank.customerArray[i].surname === customerSurname){
            myBank.customerArray[i].accountArray.push(newAccount);
        }
    }
    return newAccount;
}
addAccount(1, 'Дебет', '15.12.2020', '15.12.2025', 'UAH', 2000, 'Нина', 'Малыгина');
addAccount(2, 'Дебет', '16.12.2020', '16.12.2025', 'UAH', 7000, 'Ольга', 'Савенкова');
addAccount(3, 'Дебет', '16.12.2020', '16.12.2025', 'USD', 10000, 'Ольга', 'Савенкова');
addAccount(4, 'Дебет', '17.12.2020', '17.12.2025', 'UAH', 10000, 'Марина', 'Митина');
addAccount(5, 'Дебет', '18.12.2020', '18.12.2025', 'UAH', 50000, 'Александра', 'Синицина');
addAccount(6, 'Дебет', '18.12.2020', '18.12.2025', 'BTC', 10000, 'Ольга', 'Сидорова');
addAccount(7, 'Дебет', '18.12.2020', '18.12.2025', 'UAH', 25000, 'Антонина', 'Валова');
addAccount(8, 'Дебет', '18.12.2020', '18.12.2025', 'UAH', 40000, 'Елизавета', 'Кукушкина');

function addCreditAccount(accountId, type, createDate, expiredDate, currency, amount, creditFunds, creditLimit, customerName, customerSurname){
    let newCreditAccount = new CreditAccount(accountId, type, createDate, expiredDate, currency, amount, creditFunds, creditLimit, customerName, customerSurname);
    for(let i = 0; i < myBank.customerArray.length; i++){
        if(myBank.customerArray[i].name === customerName && myBank.customerArray[i].surname === customerSurname){
            myBank.customerArray[i].accountArray.push(newCreditAccount);
        }
    }
    return newCreditAccount;
}
addCreditAccount(1, 'Кредитная', '15.12.2020', '15.12.2025', 'UAH', 2000, 0, 10000, 'Нина', 'Малыгина');
addCreditAccount(2, 'Кредитная', '17.12.2020', '17.12.2025', 'UAH', 0, 5000, 10000, 'Марина', 'Митина');
addCreditAccount(3, 'Кредитная', '17.12.2020', '17.12.2025', 'UAH', 0, 60000, 100000, 'Максим', 'Ветров');
addCreditAccount(4, 'Кредитная', '17.12.2020', '17.12.2025', 'UAH', 0, 60000, 100000, 'Ольга', 'Савенкова');

let usdRate = 0;
async function getCallbackValue(callback){
    let response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
    let data = await response.json();
    callback(data);
}

function getUSDRate(data){
    for(let i = 0; i < data.length; i++){
       if(data[i].ccy === 'USD'){
            usdRate = data[i].buy;
        }
    }
    return usdRate;
}
getCallbackValue(getUSDRate);

function calcAllBankMoney(data){
    let sum = 0;
    let arrCustomer = myBank.getCustomerArray();
    for(let i = 0; i < arrCustomer.length; i++){
        let arrAccount = arrCustomer[i].getAccountArray();
        for(let j = 0; j < arrAccount.length; j++){
            if(arrAccount[j].getTypeAccount() === 'Дебет'){
                sum += (arrAccount[j].getAmountUAH() / usdRate + arrAccount[j].getAmountUSD());
            } else if(arrAccount[j].getTypeAccount() === 'Кредитная') {
                sum += (arrAccount[j].getAmountUAH() / usdRate + arrAccount[j].getAmountUSD() + arrAccount[j].getAmountBankUAH()/ usdRate + arrAccount[j].getAmountBankUSD());
            }
        }
    }
    myBank.allBankMoney = sum;
    return myBank.allBankMoney;
}
getCallbackValue(calcAllBankMoney);

function calcDebtInactiveClients(data){
    let sumDebtInactiveClients = 0;
    let arrCustomer = myBank.getCustomerArray();
    for(let i = 0; i < arrCustomer.length; i++){
        if(arrCustomer[i].isActive === "false"){
        for(let j = 0; j < arrCustomer[i].accountArray.length; j++){
            if(arrCustomer[i].accountArray[j].type === "Кредитная"){
                sumDebtInactiveClients += arrCustomer[i].accountArray[j].getCreditFundsUSD() + arrCustomer[i].accountArray[j].getCreditFundsUAH()/usdRate;
            }
        }
        }
    }
    myBank.debtInactiveClients = sumDebtInactiveClients;
    return myBank.debtInactiveClients;
}

getCallbackValue(calcDebtInactiveClients);

function countClientsDebtInactive(data){
    let counter = 0;
    let arrCustomer = myBank.getCustomerArray();
    for(let i = 0; i < arrCustomer.length; i++){
        if(arrCustomer[i].isActive === "false"){
            for(let j = 0; j < arrCustomer[i].accountArray.length; j++){
                if(arrCustomer[i].accountArray[j].type === "Кредитная" && arrCustomer[i].accountArray[j].creditFunds > 0){
                counter++;
                }
            }
        }
    }
    myBank.countDebtInactiveClients = counter;
    return myBank.countDebtInactiveClients;
}
getCallbackValue(countClientsDebtInactive);

function calcDebtActiveClients(data){
    let sumDebtInactiveClients = 0;
    let arrCustomer = myBank.getCustomerArray();
    for(let i = 0; i < arrCustomer.length; i++){
        if(arrCustomer[i].isActive){
            for(let j = 0; j < arrCustomer[i].accountArray.length; j++){
                if(arrCustomer[i].accountArray[j].type === "Кредитная"){
                    sumDebtInactiveClients += arrCustomer[i].accountArray[j].getCreditFundsUSD() + arrCustomer[i].accountArray[j].getCreditFundsUAH()/usdRate;
                }
            }
        }
    }
    myBank.debtActiveClients = sumDebtInactiveClients;
    return myBank.debtActiveClients;
}

getCallbackValue(calcDebtActiveClients);

function countClientsDebtActive(data){
    let counter = 0;
    let arrCustomer = myBank.getCustomerArray();
    for(let i = 0; i < arrCustomer.length; i++){
        if(arrCustomer[i].isActive){
            for(let j = 0; j < arrCustomer[i].accountArray.length; j++){
                if(arrCustomer[i].accountArray[j].type === "Кредитная" && arrCustomer[i].accountArray[j].creditFunds > 0){
                    counter++;
                }
            }
        }
    }
    myBank.countDebtActiveClients = counter;
    return myBank.countDebtActiveClients;
}
getCallbackValue(countClientsDebtActive);

console.log(myBank);
