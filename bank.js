let myBank;
class Bank {
    customerArray = [];
    constructor(name, nationalCurrency) {
        this.name = name;
        this.nationalCurrency = nationalCurrency;
    }
    getCustomerArray(){
        return this.customerArray;
    }
}
/*class Currency {
    constructor(currencyId, title, rate) {
        this.currencyId = currencyId;
        this.title = title;
        this.rate = rate;
    }
}*/


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
    constructor(accountId, type, createDate, expiredDate, currency, amount){
        this.accountId = accountId;
        this.type = type;
        this.createDate = createDate;
        this.expiredDate = expiredDate;
        this.currency = currency;
        this.amount = amount;
    }
    getTypeAccount(){
        return this.type;
    }
    getCurrencyAccount(){
       return this.currency;
    }
    getAmountAccount(){
       return this.amount;
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

}

function createBank(name, nationalCurrency) {
    myBank = new Bank(name, nationalCurrency)
    return myBank;
}
console.log(createBank("My happy bank", "UAH"));
console.log(myBank);

function addCustomer(customerId, name, surname, isActive, registrationDate){
    let newCustomer = new Customer(customerId, name, surname, isActive, registrationDate);
    myBank.customerArray.push(newCustomer);
}
addCustomer('1', 'Нина', 'Малыгина', 'Yes', '21.11.2020' );
addCustomer('2', 'Ольга', 'Савенкова', 'No', '05.12.2020' );
addCustomer('3', 'Марина', 'Митина', 'Yes', '08.12.2020' );
addCustomer('4', 'Александра', 'Синицина', 'Yes', '09.12.2020' );
addCustomer('5', 'Ольга', 'Валова', 'Yes', '10.12.2020' );
addCustomer('6', 'Антонина', 'Сидорова', 'Yes', '10.12.2020' );
addCustomer('7', 'Елизавета', 'Кукушкина', 'Yes', '12.12.2020' );
addCustomer('8', 'Максим', 'Ветров', 'Yes', '13.12.2020' );
console.log(myBank);

function addAccount(accountId, type, createDate, expiredDate, currency, amount, customerName, customerSurname){
    let newAccount = new Account(accountId, type, createDate, expiredDate, currency,  amount, customerName, customerSurname);
    for(let i = 0; i < myBank.customerArray.length; i++){
        if(myBank.customerArray[i].name === customerName && myBank.customerArray[i].surname === customerSurname){
console.log("iiii");
            myBank.customerArray[i].accountArray.push(newAccount);
        }
    }
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
            console.log("iiii");
            myBank.customerArray[i].accountArray.push(newCreditAccount);
        }
    }
}
addCreditAccount(1, 'Кредитная', '15.12.2020', '15.12.2025', 'UAH', 2000, 0, 10000, 'Нина', 'Малыгина');
addCreditAccount(2, 'Кредитная', '17.12.2020', '17.12.2025', 'UAH', 0, 5000, 10000, 'Марина', 'Митина');
addCreditAccount(2, 'Кредитная', '17.12.2020', '17.12.2025', 'UAH', 0, 60000, 100000, 'Максим', 'Ветров');


let usdRate = 0;
async function getRateCurrency(callback){
    let response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
    let data = await response.json();
    console.log(data);
    callback(data);
    return callback(data);
}
let sum = 0;

function getUSDRate(data){

    for(let i = 0; i < data.length; i++){
console.log(data[i]);
if(data[i].ccy === 'USD'){
    usdRate = data[i].buy;
}
    }
    return usdRate;
}
console.log(getRateCurrency(getUSDRate));
function calc(data){
    for(let i = 0; i < myBank.getCustomerArray().length; i++){
        console.log(myBank.getCustomerArray());
        for(let j = 0; j < myBank.getCustomerArray()[i].getAccountArray().length; j++){
            console.log(myBank.getCustomerArray()[i].getAccountArray()[j]);
            if(myBank.getCustomerArray()[i].getAccountArray()[j].getCurrencyAccount() === 'UAH' && myBank.getCustomerArray()[i].getAccountArray()[j].getTypeAccount() === 'Дебет'){
                sum += myBank.getCustomerArray()[i].getAccountArray()[j].getAmountAccount() / usdRate;

            } else if(myBank.getCustomerArray()[i].getAccountArray()[j].getCurrencyAccount() === 'UAH' && myBank.getCustomerArray()[i].getAccountArray()[j].getTypeAccount() === 'Кредитная'){
                sum += (myBank.getCustomerArray()[i].getAccountArray()[j].getAmountAccount() + myBank.getCustomerArray()[i].getAccountArray()[j].getAmountBank())/ usdRate;

            }else if(myBank.getCustomerArray()[i].getAccountArray()[j].getCurrencyAccount() === 'USD' && myBank.getCustomerArray()[i].getAccountArray()[j].getTypeAccount() === 'Дебет'){
                sum += myBank.getCustomerArray()[i].getAccountArray()[j].getAmountAccount();
            } else if(myBank.getCustomerArray()[i].getAccountArray()[j].getCurrencyAccount() === 'USD' && myBank.getCustomerArray()[i].getAccountArray()[j].getTypeAccount() === 'Кредитная'){
                sum += (myBank.getCustomerArray()[i].getAccountArray()[j].getAmountAccount() + myBank.getCustomerArray()[i].getAccountArray()[j].getAmountBank())/ usdRate;

            }
        }


    }
    myBank.nationalCurrency = sum;
    return sum;
}
console.log(getRateCurrency(calc));


console.log(myBank);
