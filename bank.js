
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

class Bank {
    constructor() {
        this.clients = [];
        this.id = 0;
    }

    addClients(client){
        client.id = ++this.id;
        client.is_active = true;
        client.bills = [];
        this.clients.push(client);
    }

    addBills(clientId, bill){
        for(let client of this.clients){
            if(client.id === clientId){
                client.bills.push(bill);
            }
        }
    }
    
    statusClient(isActive, clientId){
        for(let item of this.clients){
            if(item.id === clientId){
                item.is_active = isActive;
            }
        }
    }
    
    addAmountBill(clientId, type, amount){
        for(let client of this.clients){
            if(client.id === clientId){
                for(let element of client.bills){
                    if(element.type === type){
                        element.amount = amount;
                    }
                }
            }
        }
    }
    
    async getCallbackValue(callback){
        let response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
        let data = await response.json();
        if(callback === myBank.budget){
            callback(data, $status , 'USD');
        } else if(callback === myBank.allBankBudget){
            callback(data, 'USD');
        }
    }
    
    budget(data, isActive, currency){
        let sum = 0;
        let rate = 1;
        for(let item of myBank.clients){
            if(item.is_active === isActive) {
                for (let i = 0; i < item.bills.length; i++) {
                    if(item.bills[i].type === 'credit'){
                        for(let element of data){
                            if(element.ccy === currency){
                                rate = element.buy;
                            }
                        }
                        sum += item.bills[i].amount / rate;
                    }
                }
            }
        }

    }
    
    allBankBudget(data, currency){
        let sum = 0;
        let rate = 1;
        for(let item of myBank.clients){
            for (let i = 0; i < item.bills.length; i++) {
                if(item.bills[i].type === 'debit'){
                    for(let element of data){
                        if(element.ccy === currency){
                            rate = element.buy;
                        }
                    }
                    sum += item.bills[i].amount / rate;
                } else if(item.bills[i].type === 'credit'){
                    sum += item.bills[i].amount;
                }
            }

        }
    }
    
    countDebtor(isActive){
        let counter = 0;
        for(let item of myBank.clients){
            if(item.is_active === isActive) {
                for (let i = 0; i < item.bills.length; i++){
                    if(item.bills[i].amount < item.bills[i].limit)
                        counter++;
                }
            }
        }
        return counter;
    }
}
