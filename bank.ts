interface Client {
    name: string,
    surname: string,
    is_active: boolean,
    bills: Bill[],
    id: number,

}

class Bill{
    type: string;
    amount: number;
    currency: string;
    limit?: number;
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
interface Data {
    ccy: string,
    base_ccy: string,
    buy: string,
    sale: string
}
class Bank {
    clients: Client[];
    id: number;
    constructor() {
        this.clients = [];
        this.id = 0;
    }

    addClients(client: Client){
        client.id = ++this.id;
        client.is_active = true;
        client.bills = [];
        this.clients.push(client);
    }

    addBills(clientId: number, bill: Bill){
        for(let client of this.clients){
            if(client.id === clientId){
                client.bills.push(bill);
            }
        }
    }

    setActiveByClientId(isActive: boolean, clientId: number){
        for(let item of this.clients){
            if(item.id === clientId){
                item.is_active = isActive;
                break;
            }
        }
    }

    addAmountBill(clientId: number, type: string, amount: number){
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

    async getCurrencyToCallback(callback){
        let response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
        let data: Data[] = await response.json();
        if(callback === this.budget){
            callback(data, true , 'USD');
        } else if(callback === this.allBankBudget){
            callback(data, 'USD');
        }
    }

    budget(data: Data[], isActive: boolean, currency: string){
        let sum: number = 0;
        let rate: number = 1;
        for(let item of this.clients){
            if(item.is_active === isActive) {
                for (let i = 0; i < item.bills.length; i++) {
                    if(item.bills[i].type === 'credit'){
                        for(let element of data){
                            rate = parseInt(element.buy);
                            if(element.ccy === currency){
                            }
                        }
                        sum += item.bills[i].amount / rate;
                    }
                }
            }
        }

    }

    allBankBudget(data: Data[], currency: string){
        let sum: number = 0;
        let rate: number = 1;
        for(let item of this.clients){
            for (let i = 0; i < item.bills.length; i++) {
                if(item.bills[i].type === 'debit'){
                    for(let element of data){
                        if(element.ccy === currency){
                            rate = parseInt(element.buy);
                        }
                    }
                    sum += item.bills[i].amount / rate;
                } else if(item.bills[i].type === 'credit'){
                    sum += item.bills[i].amount;
                }
            }

        }
    }

    countDebtor(isActive: boolean): number{
        let counter: number = 0;
        for(let item of this.clients){
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
