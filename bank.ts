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
    constructor(type: string, amount: number, currency: string, limit: number){
       this.type = type;
       this.amount = amount;
       this.currency = currency;
       this.limit = limit;

    }
    set typeBill(value: string){
        this.type = value;
    }
    set amountBill(value: number){
        this.amount = value;
    }
    set currencyBill(value: string){
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

    async getCurrencyToCallback(callback: Bank["budget"] | Bank["allBankBudget"]){
        let response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
        let data: Data[] = await response.json();
        if(callback === myBank.budget){
            callback(data, true , 'USD');
        } else if(callback === myBank.allBankBudget){
            callback(data, 'USD');
        }
    }

    budget(data: Data[], isActive: boolean, currency: string): number{
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
        return sum;
    }

    allBankBudget(data: Data[], currency: string): number {
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
        return sum;
    }

    countDebtor(isActive: boolean): number{
        let counter: number = 0;
        for(let item of this.clients){
            if(item.is_active === isActive) {
                for (let i = 0; i < item.bills.length; i++){
                    let value = item.bills[i].limit;
                    if(typeof value === 'number'){
                        if(item.bills[i].amount < value)
                            counter++;
                            }
                       }
                    
            }
        }
        return counter;
    }
}
