let arrayCurrency = ['USD', 'RUB', 'UAH'];

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
            if(client.id == clientId){
                client.bills.push(bill);
            }
        }
    }

    setActiveByClientId(isActive, clientId){
        for(let item of this.clients){
            if(item.id === clientId){
                item.is_active = isActive;
                break;
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

    async getCurrencyToCallback(callback){
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

let myBank = new Bank();

function createAllElements() {
    let divContainer = document.createElement('DIV');
    divContainer.className = 'container';
    divContainer.setAttribute('id', 'container');
    let body = document.querySelector('body');
    body.appendChild(divContainer);
    let divClientsList = document.createElement('DIV');
    divClientsList.setAttribute('id', 'divClientsList');
    divClientsList.className = 'list';
    divContainer.appendChild(divClientsList);
    let h2 = document.createElement('H2');
    h2.className = 'headingH2';
    h2.innerHTML = 'Пользователи';
    divClientsList.appendChild(h2);
}
createAllElements();

function showFormAddEmployee() {
    let divWorkSpace = document.createElement('DIV');
    divWorkSpace.className = 'workSpace';
    divWorkSpace.setAttribute('id', 'workSpace');
    let divContainer = document.getElementById('container');
    divContainer.appendChild(divWorkSpace);
    let h2WorkSpace = document.createElement('H2');
    h2WorkSpace.className = 'headingH2';
    h2WorkSpace.innerHTML = 'Рабочая область';
    divWorkSpace.appendChild(h2WorkSpace);
    let chooseAction = document.createElement('SELECT');
    chooseAction.setAttribute('id', 'chooseAction');
    chooseAction.className = 'select';
    divWorkSpace.appendChild(chooseAction);
    let optionSelectAction = document.createElement('OPTION');
    optionSelectAction.innerHTML = 'Выберите действие';
    optionSelectAction.setAttribute('id', 'chooseAction');
    chooseAction.appendChild(optionSelectAction);
    let optionCreateNewCustomer = document.createElement('OPTION');
    optionCreateNewCustomer.setAttribute('value', "addClient");
    optionCreateNewCustomer.innerHTML = 'Добавить нового клиента';
    optionCreateNewCustomer.setAttribute('id', 'createCustomer');
    chooseAction.appendChild(optionCreateNewCustomer);
  /*  let formAdd = document.createElement('FORM');
    formAdd.setAttribute('id', 'formAdd');
    formAdd.setAttribute('onsubmit', 'return false');
    divWorkSpace.appendChild(formAdd);
    let selectСalculations = document.createElement('SELECT')
    selectСalculations.setAttribute('id', 'choose');
    divWorkSpace.appendChild(selectСalculations);
    let version = document.createElement('OPTION');
    version.innerHTML = 'Выбрать рассчет';
    selectСalculations.appendChild(version);
    let sumAllSalary = document.createElement('OPTION');
    sumAllSalary.innerHTML = 'Сумма всех зарплат по отделу';
    sumAllSalary.setAttribute('value', 'getSumAllSalaries');
    selectСalculations.appendChild(sumAllSalary);
    let avarageSalary = document.createElement('OPTION');
    avarageSalary.innerHTML = 'Средняя зарплата по отделу';
    avarageSalary.setAttribute('value','getAvarageSalary');
    selectСalculations.appendChild(avarageSalary);
    let minSalary = document.createElement('OPTION');
    minSalary.innerHTML = 'Минимальная зарплата по отделу';
    minSalary.setAttribute('value', 'getMinSalary');
    selectСalculations.appendChild(minSalary);
    let maxSalary = document.createElement('OPTION');
    maxSalary.innerHTML = 'Максимальная зарплата по отделу';
    maxSalary.setAttribute('value', 'getMaxSalary');
    selectСalculations.appendChild(maxSalary);
    let amountDimiss = document.createElement('OPTION');
    amountDimiss.innerHTML = 'Количество уволенных';
    amountDimiss.setAttribute('value', 'getAmountDismiss');
    selectСalculations.appendChild(amountDimiss);
    let amountWhithoutHead = document.createElement('OPTION');
    amountWhithoutHead.innerHTML = 'Отделы без хеда';
    amountWhithoutHead.setAttribute('value', 'getDepartmentsWithoutHead');
    selectСalculations.appendChild(amountWhithoutHead);*/
}
showFormAddEmployee();


function addClient(){
    let clientInfo = {};
    let inputName = document.createElement('INPUT')
    let divWorkSpace = document.getElementById('workSpace');
    let formAdd = document.createElement('FORM');
    divWorkSpace.appendChild(formAdd);
    inputName.setAttribute('placeholder', 'Имя клиента*');
    inputName.className = 'input';
    formAdd.appendChild(inputName);
    let inputSurname = document.createElement('INPUT');
    inputSurname.setAttribute('placeholder', 'Фамилия клиента*');
    inputSurname.className = 'input';
    formAdd.appendChild(inputSurname);
    let button = document.createElement('DIV');
    button.className = 'button';
    button.innerHTML = 'Добавить';
    formAdd.appendChild(button);
    button.addEventListener('click', function(){
    let inputs = document.querySelectorAll('.input');
        inputs.forEach(function(input){
            if(input.value === ""){
                alert('Введите ' + input.placeholder);
            } else if(!input.value.match(/[A-zА-яЁё]/)){
                alert(input.placeholder + ' должен содержать только буквы')
            }
        })

            clientInfo.name = inputName.value;
            clientInfo.surname = inputSurname.value;
            myBank.addClients(clientInfo);

            let divInfoClient = document.createElement('DIV');
            divInfoClient.className = 'cards';
        divInfoClient.setAttribute('id', 'divInfoClient' + clientInfo.id);
            let divClientsList = document.getElementById('divClientsList');
        divClientsList.appendChild(divInfoClient);
        divClientsList.setAttribute('id', 'divClientsList');
        let cardClient = document.createElement('DIV');
        cardClient.className = 'clientStyle';
        divInfoClient.appendChild(cardClient);
        let id = document.createElement('P');
        id.innerHTML = 'ID: ' + clientInfo.id;
        cardClient.appendChild(id);
        let name = document.createElement('P');
        name.setAttribute('id', 'name' + clientInfo.id)
        name.innerHTML = 'Имя: ' + inputName.value;
        cardClient.appendChild(name);
        let surname = document.createElement('P');
        surname.setAttribute('id', 'surname' + clientInfo.id);
        surname.innerHTML = 'Фамилия: ' + inputSurname.value;
        cardClient.appendChild(surname);
        inputName.remove();
        inputSurname.remove();
        button.remove();
        let chooseAction = document.getElementById('chooseAction');
        chooseAction.value = 'Выберите действие';

        let editClient = document.getElementById('edit');
        if(editClient === null){
            editClient = document.createElement('OPTION');
            editClient.innerHTML = 'Редактировать клиента';
            editClient.setAttribute('value', 'editClient');
            editClient.setAttribute('id', 'edit');
            chooseAction.appendChild(editClient);
        }
        let changeActivity = document.getElementById('change');
        if(changeActivity === null) {
            changeActivity = document.createElement('OPTION');
            changeActivity.innerHTML = 'Изменить активность клиента';
            changeActivity.setAttribute('value', 'addStatusActivity');
            changeActivity.setAttribute('id', 'change');
            chooseAction.appendChild(changeActivity);
        }
        let addAccounts = document.getElementById('accounts');
        if(addAccounts === null){
            addAccounts = document.createElement('OPTION');
            addAccounts.innerHTML = 'Открыть счет клиенту';
            addAccounts.setAttribute('value', 'addAccount');
            addAccounts.setAttribute('id', 'account');
            chooseAction.appendChild(addAccounts);
        }

    })
    return clientInfo;
}

function editClient(){
    let chooseID = document.createElement('SELECT');
    chooseID.className = 'select';
    let divWorkSpace = document.getElementById('workSpace');
    let formAdd = document.createElement('FORM');
    divWorkSpace.appendChild(formAdd);
    formAdd.appendChild(chooseID);
    let doChoose = document.createElement('OPTION');
    doChoose.innerHTML = 'Выберите ID';
    chooseID.appendChild(doChoose);
   for(let item of myBank.clients){
       let cutomerID = document.createElement('OPTION');
       cutomerID.innerHTML = item.id;
       chooseID.appendChild(cutomerID);
   }
    chooseID.addEventListener('change', function(){
        let id = chooseID.value;
        let name = document.getElementById('name' + id);
        console.log(name);
        let surname = document.getElementById('surname' + id);
        let inputName = document.createElement('INPUT')
        let divWorkSpace = document.getElementById('workSpace');
        let formAdd = document.createElement('FORM');
        divWorkSpace.appendChild(formAdd);
        inputName.setAttribute('placeholder', 'Имя клиента*');
        inputName.className = 'input';
        inputName.value = name.innerHTML;
        formAdd.appendChild(inputName);
        let inputSurname = document.createElement('INPUT');
        inputSurname.setAttribute('placeholder', 'Фамилия клиента*');
        inputSurname.className = 'input';
        inputSurname.value = surname.innerHTML;
        formAdd.appendChild(inputSurname);
        let button = document.createElement('DIV');
        button.className = 'button';
        button.innerHTML = 'Подтвердить';
        formAdd.appendChild(button);
        inputName.addEventListener('click', function(){
            inputName.value = '';
        })
        inputSurname.addEventListener('click', function(){
            inputSurname.value = '';
        })
        button.addEventListener('click', function(){

            let inputs = document.querySelectorAll('.input');
            inputs.forEach(function(input){
                if(input.value === ""){
                    alert('Введите ' + input.placeholder);
                } else if(!input.value.match(/[A-zА-яЁё]/)){
                    alert(input.placeholder + ' должен содержать только буквы')
                }
            })
            name.innerHTML = inputName.value;
            surname.innerHTML = inputSurname.value;
            for(let item of myBank.clients){
              item.name = inputName.value;
              item.surname = inputSurname.value;
            }

            chooseID.remove();
            inputName.remove();
            inputSurname.remove();
            button.remove();
            let chooseAction = document.getElementById('chooseAction');
            chooseAction.value = 'Выберите действие';
        })
    })

}

function addStatusActivity(){
    let chooseID = document.createElement('SELECT');
    chooseID.className = 'select';
    let divWorkSpace = document.getElementById('workSpace');
    let formAdd = document.createElement('FORM');
    divWorkSpace.appendChild(formAdd);
    formAdd.appendChild(chooseID);
    let doChoose = document.createElement('OPTION');
    doChoose.innerHTML = 'Выберите ID';
    chooseID.appendChild(doChoose);
    for(let item of myBank.clients){
        let cutomerID = document.createElement('OPTION');
        cutomerID.innerHTML = item.id;
        chooseID.appendChild(cutomerID);
    }
    chooseID.addEventListener('change', function(){
        let id = chooseID.value;
        let divWorkSpace = document.getElementById('workSpace');
        let formAdd = document.createElement('FORM');
        divWorkSpace.appendChild(formAdd);
        for(let item of myBank.clients){
            if(item.id == id){
                let labelActive = document.createElement('LABEL');
                formAdd.appendChild(labelActive);
                let inputActive = document.createElement('INPUT');
                inputActive.setAttribute('name', 'activity');
                inputActive.setAttribute('type', 'radio');
                inputActive.setAttribute('value', 'true');
                inputActive.className = 'checkbox';
                labelActive.innerHTML = 'Активный';
                labelActive.appendChild(inputActive);
                let labelInactive = document.createElement('LABEL');
                formAdd.appendChild(labelInactive);
                let inputInactive = document.createElement('INPUT');
                inputInactive.setAttribute('name', 'activity');
                inputInactive.value = 'Не активный';
                inputInactive.setAttribute('value', 'false');
                inputInactive.setAttribute('type', 'radio');
                inputInactive.className = 'checkbox';
                labelInactive.innerHTML = 'Не активный';
                labelInactive.appendChild(inputInactive);
                if(item.is_active){
                    inputActive.setAttribute('checked', 'checked');

                } else if(!item.is_active){
                    inputInactive.setAttribute('checked', 'checked');

                }
                let button = document.createElement('DIV');
                button.innerHTML = 'Подтвердить'
                button.className = 'button';
                formAdd.appendChild(button);
                button.addEventListener('click', function(){
                    if(inputActive.checked){
                        item.is_active = true;
                    } else if(inputInactive.checked){
                        item.is_active = false;
                    }
                    formAdd.remove();
                    chooseID.remove();
                    button.remove();
                    let chooseAction = document.getElementById('chooseAction');
                    chooseAction.value = 'Выберите действие';
                })
            }
        }
    })
}



function addAccount(){
    let clientAccount = {};
    let chooseID = document.createElement('SELECT');
    chooseID.className = 'select';
    let divWorkSpace = document.getElementById('workSpace');
    let formAdd = document.createElement('FORM');
    divWorkSpace.appendChild(formAdd);
    formAdd.appendChild(chooseID);
    let doChoose = document.createElement('OPTION');
    doChoose.innerHTML = 'Выберите ID';
    chooseID.appendChild(doChoose);
    for(let item of myBank.clients){
        let cutomerID = document.createElement('OPTION');
        cutomerID.innerHTML = item.id;
        chooseID.appendChild(cutomerID);
    }
    chooseID.addEventListener('change', function(){
        let id = chooseID.value;
        let divWorkSpace = document.getElementById('workSpace');
        let formAdd = document.createElement('FORM');
        divWorkSpace.appendChild(formAdd);
        let currensyBill = document.createElement('SELECT');
        formAdd.appendChild(currensyBill);

        let currencyChoose = document.createElement('OPTION');
        currencyChoose.innerText = 'Выберите валюту';
        currensyBill.appendChild(currencyChoose);
       for(let item of arrayCurrency){
           let currensy = document.createElement('OPTION');
           currensy.setAttribute('value', item);
           currensy.innerHTML = item;
           currensyBill.appendChild(currensy);
       }
        let selectTypeBill = document.createElement('SELECT');
        formAdd.appendChild(selectTypeBill);
        let chooseTypeBill = document.createElement('OPTION');
        chooseTypeBill.innerHTML = 'Выберите тип счета';
        selectTypeBill.appendChild(chooseTypeBill);
        let credit = document.createElement('OPTION');
        credit.innerHTML = 'Кредитный';
        credit.setAttribute('value', 'credit');
        selectTypeBill.appendChild(credit);
        let debet = document.createElement('OPTION');
        debet.innerHTML = 'Дебетовый';
        debet.setAttribute('value', 'debet');
        selectTypeBill.appendChild(debet);
        selectTypeBill.addEventListener('change', function(){
            let inputAmount = document.createElement('INPUT');
            formAdd.appendChild(inputAmount);
            inputAmount.setAttribute('placeholder', 'Введите сумму');
            inputAmount.className = 'input';
            let inputLimit = document.createElement('INPUT');
            if(selectTypeBill.value === 'credit'){
                formAdd.appendChild(inputLimit);
                inputLimit.setAttribute('placeholder', 'Введите лимит');
                inputLimit.className = 'input';
             }
            let button = document.createElement('DIV');
            button.className = 'button';
            button.innerHTML = 'Подтвердить';
            formAdd.appendChild(button);
            button.addEventListener('click', function(){
                console.log('iiiiiiiiiiiiiiii');
                clientAccount.type = selectTypeBill.value;
                clientAccount.currency = currensyBill.value;
                clientAccount.amount = inputAmount.value;
                if(selectTypeBill.value === 'credit'){
                    clientAccount.limit = inputLimit.value;
                }
                myBank.addBills(id, clientAccount);
                let divInfoClient = document.getElementById('divInfoClient' + id);
                let cardBill = document.createElement('DIV');
                cardBill.className = 'clientStyle';
                divInfoClient.appendChild(cardBill);
                let pType = document.createElement('P');
                pType.innerHTML = 'Тип счета: ' + selectTypeBill.value;
                cardBill.appendChild(pType);
                let pCurrensy = document.createElement('P');
                pCurrensy.innerHTML = 'Валюта: ' + currensyBill.value;
                cardBill.appendChild(pCurrensy);
                let pAmount = document.createElement('P');
                pAmount.innerHTML = 'Сумма: ' + inputAmount.value;
                cardBill.appendChild(pAmount);
                
            })
        })
    })

}


let selects = document.querySelectorAll('.select');
selects.forEach(function(select){
    select.addEventListener('change', function(event){
        let act = event.target.value;
        window[act]();
    })
})

console.log(myBank);
