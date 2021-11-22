

class Client{
    firstname;
    surname;
    constructor(){

    }

    set firstName(value) {
        this.firstname = value;
    }
    set surName(value){
        this.surname = value;
    }
}
let client1 = new Client();
client1.firstName = "Vasya";
client1.surName = "Popov";

class Bill{
    type;
    amount;
    currency;
    constructor(){

    }
    set typeBill(value){
        this.type = value;
    }
    set amountBill(value){
        this.amount = value;
    }
    set currencyBill(value){
        this.currency = value;
    }
}

let  bill = new Bill();
bill.typeBill = 'Credit';
bill.amountBill = 1000;
bill.currencyBill = 'UAH';

class Bank {
    constructor() {
        this.clients = [];
        this.id = 0;
    }

    addBill(currency){

    }

    addClients(client){
        client.id = ++this.id;
        client.is_active = true;
        client.bills = [];
        this.clients.push(client);
    }

    addBills(clientId, bill){
        for(this.clients of client){
            if(client.id === clientId){
                client.bills.push(bill);
            }
        }
    }

    budget(isActive, currency){
        let sum = 0;
        for(let item of this.clients){
            if(item.is_active === isActive) {
                for (let element of item.bills) {
                    for(let i = 0; i < data.length; i++){
                        if(data[i].currency === currency){
                            console.log(item);
                            sum += element.amount * data[i].buy;
                        }
                    }


                }
            }
        }
        return sum;
    }

    f(){

    }
}
let myBank = new Bank();
console.log(myBank);
myBank.addClients(client1);
/*myBank.addBills(1,bill);*/


myBank.budget(true, 'USD');

async function getCallbackValue(callback){
    let response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
    let data = await response.json();
    callback(data);

    console.log(data);
}

function getRate(data){
    return data;
}
getCallbackValue(getRate);

