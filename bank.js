class Bank {
    currencyArray = [];
    customerArray = [];
    constructor(name, nationalCurrency) {
        this.name = name;
        this.nationalCurrency = nationalCurrency;
    }
}
class Currency {
    constructor(currencyId, title, rate) {
        this.currencyId = currencyId;
        this.title = title;
        this.rate = rate;
    }
}


class Customer {
    accountArray = [];
    constructor(customerId, name, surname, patronymic, isActive, registrationDate) {
        this.customerId = customerId;
        this.name = name;
        this.surname = surname;
        this.patronymic = patronymic;
        this.isActive = isActive;
        this.registrationDate = registrationDate;

    }
}



class Account {
    constructor(accountId, type, createDate, expiredDate, currency){
        this.accountId = accountId;
        this.type = type;
        this.createDate = createDate;
        this.expiredDate = expiredDate;
        this.currency = currency;
    }

}
let currencyArray = [];
function createBank(name, nationalCurrency) {
    let myBank = new Bank(name, nationalCurrency)
    return myBank;
}
console.log(createBank("happyBank", "UAH"));
let b = [];
/*fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').then(function(result) {
    return result.json();
}).then(function(data){
    b = data;
    return b;
})
console.log(b);*/
let rate = 0;
async function getRateCurrency(callback){
    let response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
    let data = await response.json();
    console.log(data);
    callback(data);
    return callback(data);
}

function calc(data){

for(let i = 0; i < data.length; i++){
    console.log(data[i].ccy);
    if(data[i].ccy === 'UAH'){
      rate = data[i].buy;
    }
}
return rate;
}
console.log(getRateCurrency(calc));
