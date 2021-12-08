interface HTMLElementTagNameMap{
    "DIV": HTMLDivElement;
    "BODY": HTMLBodyElement;
    "H2": HTMLHeadingElement;
    "INPUT": HTMLInputElement;
    "FORM": HTMLFormElement;

}

interface HTMLElement{
    value: string,
    id: string,
    name: string,
    class: string,
}
let restaurant: DepartmentRestaurant[] = [];
class DepartmentRestaurant {
    arrayPositions: Positions[] = [];
    departmentId;
    title;
    constructor(departmentId: string, title: string){
        this.departmentId = departmentId;
        this.title = title;
    }
    getArrayPositions(): Positions[]{
        return this.arrayPositions;
    }
}

class Positions {
    arrayEmployee: Employee[] = [];
    department: string;
    id: string;
    title: string;
    salary: string;
    head: string


    constructor(department: string, id: string, title: string, salary: string, head: string) {
        this.department = department;
        this.id = id;
        this.title = title;
        this.salary = salary;
        this.head = head;
    }
    salaryAmount(): number{
        return parseInt(this.salary);
    }
    currentEmployee(): number{
        let counter = 0;
        for(let i = 0; i < this.arrayEmployee.length; i++){
            if(this.arrayEmployee[i].dismissalDate === ""){
                counter++;
            }
        }
        return counter;
    }
    getArrayEmployee(){
        return this.arrayEmployee;
    }
}

class Employee {
    dismissalDate: string;
    department: string;
    employeeId: string;
    name: string;
    surname: string;
    age:string;
    employmentDate: string;
    position: string;
    constructor(department: string, position: string, employeeId: string, name: string, surname: string, age:string, employmentDate: string, dismissalDate: string) {
        this.employeeId = employeeId;
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.employmentDate = employmentDate;
        this.position = position;
        this.dismissalDate = dismissalDate;
        this.department = department;
    }
    dismiss(): string {
        return this.dismissalDate;
    }
}

function createAllElements() {
    let divContainer = document.createElement('DIV');
    divContainer.className = 'container';
    divContainer.setAttribute('id', 'container');
    let body = document.querySelector('body');
    if(body){
      body.appendChild(divContainer);
    }
    let divDepartmentsList = document.createElement('DIV');
    divDepartmentsList.setAttribute('id', 'divDepartmentsList');
    divDepartmentsList.className = 'list';
    divContainer.appendChild(divDepartmentsList);
    let h2 = document.createElement('H2');
    h2.className = 'headingH2';
    h2.innerHTML = 'Отделы и сотрудники';
    divDepartmentsList.appendChild(h2);
}
createAllElements();

function showFormAddEmployee() {
    let divWorkSpace: HTMLElement = document.createElement('DIV');
    divWorkSpace.className = 'workSpace';
    divWorkSpace.setAttribute('id', 'workSpace');
 
    let divContainer = document.getElementById('container');
       if(divContainer){
         divContainer.appendChild(divWorkSpace);
    }
   
    let h2WorkSpace = document.createElement('H2') as HTMLHeadingElement;
    h2WorkSpace.className = 'headingH2';
    h2WorkSpace.innerHTML = 'Инструментарий';
    divWorkSpace.appendChild(h2WorkSpace);
    let chooseAction = document.createElement('SELECT') as HTMLSelectElement;
    chooseAction.setAttribute('id', 'chooseAction');
    chooseAction.className = 'select';
    divWorkSpace.appendChild(chooseAction);
    let optionSelectAction = document.createElement('OPTION') as HTMLOptionElement;
    optionSelectAction.innerHTML = 'Выберите действие';
    chooseAction.appendChild(optionSelectAction);
    let optionCreateNewDepartment = document.createElement('OPTION') as HTMLOptionElement;
    optionCreateNewDepartment.setAttribute('class', "addDepartment");
    optionCreateNewDepartment.innerHTML = 'Добавить новый отдел';
    chooseAction.appendChild(optionCreateNewDepartment);
    let formAdd = document.createElement('FORM') as HTMLFormElement;
    formAdd.setAttribute('id', 'formAdd');
    formAdd.setAttribute('onsubmit', 'return false');
    divWorkSpace.appendChild(formAdd);
    let selectСalculations = document.createElement('SELECT') as HTMLSelectElement;
    selectСalculations.setAttribute('id', 'choose');
    divWorkSpace.appendChild(selectСalculations);
    let version = document.createElement('OPTION') as HTMLOptionElement;
    version.innerHTML = 'Выбрать рассчет';
    selectСalculations.appendChild(version);
    let sumAllSalary = document.createElement('OPTION') as HTMLOptionElement;
    sumAllSalary.innerHTML = 'Сумма всех зарплат по отделу';
    sumAllSalary.setAttribute('class', 'getSumAllSalaries');
    selectСalculations.appendChild(sumAllSalary);
    let avarageSalary = document.createElement('OPTION') as HTMLOptionElement;
    avarageSalary.innerHTML = 'Средняя зарплата по отделу';
    avarageSalary.setAttribute('class','getAvarageSalary');
    selectСalculations.appendChild(avarageSalary);
    let minSalary = document.createElement('OPTION') as HTMLOptionElement;
    minSalary.innerHTML = 'Минимальная зарплата по отделу';
    minSalary.setAttribute('class', 'getMinSalary');
    selectСalculations.appendChild(minSalary);
    let maxSalary = document.createElement('OPTION') as HTMLOptionElement;
    maxSalary.innerHTML = 'Максимальная зарплата по отделу';
    maxSalary.setAttribute('class', 'getMaxSalary');
    selectСalculations.appendChild(maxSalary);
    let amountDimiss = document.createElement('OPTION') as HTMLOptionElement;
    amountDimiss.innerHTML = 'Количество уволенных';
    amountDimiss.setAttribute('class', 'getAmountDismiss');
    selectСalculations.appendChild(amountDimiss);
    let amountWhithoutHead = document.createElement('OPTION') as HTMLOptionElement;
    amountWhithoutHead.innerHTML = 'Отделы без хеда';
    amountWhithoutHead.setAttribute('class', 'getDepartmentsWithoutHead');
    selectСalculations.appendChild(amountWhithoutHead);
}
showFormAddEmployee();

function addDepartment() {
    let formAdd = document.getElementById('formAdd') as HTMLFormElement;
    let inputDepartmentId = document.createElement('INPUT') as HTMLInputElement;
    inputDepartmentId.setAttribute('id', 'inputDepartmentId');
    inputDepartmentId.setAttribute('placeholder', 'ID');
    inputDepartmentId.className = 'input';
    if(formAdd){
        formAdd.appendChild(inputDepartmentId);
    }
    
    let inputTitle = document.createElement('INPUT') as HTMLInputElement;
    inputTitle.setAttribute('placeholder', 'Название отдела');
    inputTitle.setAttribute('id', 'inputTitle');
    inputTitle.className = 'input';
    if(formAdd){
        formAdd.appendChild(inputTitle);
    }
    let buttonForm = document.createElement('BUTTON');
    buttonForm.className = 'button';
    buttonForm.innerHTML = 'Добавить';
    if(formAdd){
        formAdd.appendChild(buttonForm);
    }
    
    buttonForm.addEventListener('click', function () {
        let department = new DepartmentRestaurant(inputDepartmentId.value, inputTitle.value);
        let divDepartment = document.createElement('DIV') as HTMLDivElement;
        divDepartment.setAttribute('id', inputTitle.value);
        divDepartment.className = 'department';
        let divDepartmentsList = document.getElementById('divDepartmentsList');
        if(divDepartmentsList){
            divDepartmentsList.appendChild(divDepartment);
        }
        
        let h3 = document.createElement('H3');
        divDepartment.appendChild(h3);
        h3.innerHTML = inputTitle.value;
        let chooseAction = document.getElementById('chooseAction');
        let optionCreateNewPosition = document.getElementById('3');
        if (optionCreateNewPosition === null) {
            let optionCreateNewPosition = document.createElement('OPTION');
            optionCreateNewPosition.setAttribute('class', 'addPosition');
            optionCreateNewPosition.setAttribute('id', '3');
            optionCreateNewPosition.innerHTML = 'Добавить новую должность';
            if(chooseAction){
                chooseAction.appendChild(optionCreateNewPosition);
            }
        }
        inputDepartmentId.remove();
        inputTitle.remove();
        buttonForm.remove();
        if(chooseAction){
           chooseAction.value = 'Выберите действие';
        }
         restaurant.push(department);
        return department;
    })
}

function addPosition(){
    let formAdd = document.getElementById('formAdd');
    let chooseDepartment = document.createElement('SELECT') as HTMLSelectElement;
    if(formAdd){
      formAdd.appendChild(chooseDepartment);
    }
    for(let element of restaurant){
        let optionInput = document.createElement('OPTION') as HTMLOptionElement;
        optionInput.innerHTML = element.title;
        chooseDepartment.appendChild(optionInput);
    }
    let inputPositionId = document.createElement('INPUT') as HTMLInputElement;
    inputPositionId.setAttribute('id', 'inputPositionId');
    inputPositionId.setAttribute('placeholder', 'ID');
    inputPositionId.className = 'input';
    if(formAdd){
        formAdd.appendChild(inputPositionId);
    }
    let inputTitlePosition = document.createElement('INPUT') as HTMLInputElement;
    inputTitlePosition.setAttribute('placeholder', 'Название должности');
    inputTitlePosition.setAttribute('id', 'inputTitlePosition');
    inputTitlePosition.className = 'input';
    if(formAdd){
        formAdd.appendChild(inputTitlePosition);
    }
    let inputSalary = document.createElement('INPUT') as HTMLInputElement;
    inputSalary.setAttribute('placeholder', 'Зарплата');
    inputSalary.setAttribute('id', 'inputSalary');
    inputSalary.className = 'input';
    if(formAdd){
        formAdd.appendChild(inputSalary);
    }
    let selectIsHead = document.createElement('SELECT') as HTMLSelectElement;
    selectIsHead.className = 'input';
    let choise = document.createElement('OPTION') as  HTMLOptionElement;
    choise.innerHTML = 'Должность руководящая?';
    selectIsHead.appendChild(choise);
    let optionYes = document.createElement('OPTION') as  HTMLOptionElement;
    optionYes.innerHTML = 'да';
    optionYes.setAttribute('class', 'true');
    selectIsHead.appendChild(optionYes);
    let optionNo = document.createElement('OPTION') as  HTMLOptionElement;
    optionNo.innerHTML = 'нет';
    optionNo.setAttribute('class', 'false');
    selectIsHead.appendChild(optionNo);
    if(formAdd){
        formAdd.appendChild(selectIsHead);
    }
    let buttonForm = document.createElement('BUTTON') as HTMLButtonElement;
    buttonForm.className = 'button';
    buttonForm.innerHTML = 'Добавить';
    if(formAdd){
        formAdd.appendChild(buttonForm);
    }
    buttonForm.addEventListener('click', function (){
        let position = new Positions(chooseDepartment.value, inputPositionId.value, inputTitlePosition.value, inputSalary.value, selectIsHead.value);
        for(let item of restaurant){
            if(item.title === chooseDepartment.value){
                item.arrayPositions.push(position);
            }
        }
        let divDepartment = document.getElementById(chooseDepartment.value);
        let h4 = document.createElement('H4');
        h4.innerHTML = inputTitlePosition.value;
        if(divDepartment){
            divDepartment.appendChild(h4);
        }
        let divCards = document.createElement('DIV');
        divCards.setAttribute('id', inputTitlePosition.value);
        if(divDepartment){
            divDepartment.appendChild(divCards);
        }
        let chooseAction = document.getElementById('chooseAction');
        let optionCreateNewCustomer = document.getElementById('4');
        if(optionCreateNewCustomer === null){
            let optionCreateNewCustomer = document.createElement('OPTION');
            optionCreateNewCustomer.setAttribute('id', '4');
            optionCreateNewCustomer.setAttribute('class', 'addEmployee');
            optionCreateNewCustomer.innerHTML = 'Добавить нового сотрудника';
            if(chooseAction){
                chooseAction.appendChild(optionCreateNewCustomer);
            }
        }
        chooseDepartment.remove();
        inputPositionId.remove();
        inputTitlePosition.remove();
        inputSalary.remove();
        selectIsHead.remove();
        buttonForm.remove();
        if(chooseAction){
            chooseAction.value = 'Выберите действие';
        }
    })
}

function addEmployee(){
    let formAdd = document.getElementById('formAdd');
    let chooseDepartment = document.createElement('SELECT') as HTMLSelectElement;
    let optionInput = document.createElement('OPTION') as HTMLOptionElement;
    optionInput.innerHTML = 'Выбрать отдел';
    chooseDepartment.appendChild(optionInput);
    for(let element of restaurant){
        let optionInput = document.createElement('OPTION') as HTMLOptionElement;
        optionInput.innerHTML = element.title;
        chooseDepartment.appendChild(optionInput);
    }
    if(formAdd){
        formAdd.appendChild(chooseDepartment);
    }
    chooseDepartment.addEventListener('change', function (){
        let choosePosition = document.createElement('SELECT') as HTMLSelectElement;
        let optionInputPosition = document.createElement('OPTION') as HTMLOptionElement;
        optionInputPosition.innerHTML = 'Выбрать должность';
        optionInput.innerHTML = 'Выбрать отдел';
        choosePosition.appendChild(optionInputPosition);
        for(let element of restaurant){
            if(element.title === chooseDepartment.value){
                for(let item of element.arrayPositions){
                    let optionInputPosition = document.createElement('OPTION') as HTMLOptionElement;
                    optionInputPosition.innerHTML = item.title;
                    choosePosition.appendChild(optionInputPosition);
                }
            }
        }
        if(formAdd){
            formAdd.appendChild(choosePosition);
        }

        choosePosition.addEventListener('change', function (){
            let inputEployeeId = document.createElement('INPUT') as HTMLInputElement;
            inputEployeeId.setAttribute('id', 'inputEployeeId');
            inputEployeeId.setAttribute('placeholder', 'ID');
            inputEployeeId.className = 'input';
            let inputNameEmployee = document.createElement('INPUT') as HTMLInputElement;
            inputNameEmployee.setAttribute('placeholder', 'Имя сотрудника');
            inputNameEmployee.setAttribute('id', 'inputNameEmployee');
            inputNameEmployee.className = 'input';
            let inputSurnameEmployee = document.createElement('INPUT') as HTMLInputElement;
            inputSurnameEmployee.setAttribute('placeholder', 'Фамилия');
            inputSurnameEmployee.setAttribute('id', 'inputSurnameEmployee');
            inputSurnameEmployee.className = 'input';
            let inputAgeEmployee = document.createElement('INPUT') as HTMLInputElement;
            inputAgeEmployee.setAttribute('placeholder', 'Возраст');
            inputAgeEmployee.setAttribute('id', 'inputAgeEmployee');
            inputAgeEmployee.className = 'input';
            let inputEmploymentDate = document.createElement('INPUT') as HTMLInputElement;
            inputEmploymentDate.setAttribute('placeholder', 'Дата принятия');
            inputEmploymentDate.setAttribute('type', 'date');
            inputEmploymentDate.className = 'input';
            let buttonForm = document.createElement('BUTTON') as HTMLButtonElement;
            buttonForm.className = 'button';
            buttonForm.innerHTML = 'Добавить';
             if(formAdd){
                formAdd.appendChild(inputEployeeId);
                formAdd.appendChild(inputNameEmployee);
                formAdd.appendChild(inputSurnameEmployee);
                formAdd.appendChild(inputAgeEmployee);
                formAdd.appendChild(inputEmploymentDate);
                formAdd.appendChild(buttonForm);
            }
            buttonForm.addEventListener('click', function (){
                let employer = new Employee(chooseDepartment.value, choosePosition.value, inputEployeeId.value, inputNameEmployee.value, inputSurnameEmployee.value, inputAgeEmployee.value, inputEmploymentDate.value, '');

                for(let item of restaurant){
                    if(item.title === chooseDepartment.value){
                        for(let element of item.arrayPositions){
                            if(element.title === choosePosition.value){
                                element.arrayEmployee.push(employer);
                            }
                        }
                    }
                }
                let divDepartment = document.getElementById(choosePosition.value);
                let cardEmployer = document.createElement('DIV') as HTMLDivElement;
                cardEmployer.className = 'employerStyle';
                cardEmployer.setAttribute('id', inputEployeeId.value);
                if(divDepartment){
                    divDepartment.appendChild(cardEmployer);
                }
                let pId = document.createElement('P') as HTMLParagraphElement;
                pId.innerHTML = "ID: " + inputEployeeId.value;
                cardEmployer.appendChild(pId);
                let pName = document.createElement('P') as HTMLParagraphElement;
                pName.setAttribute('id', 'pName' + inputEployeeId.value);
                pName.innerHTML = inputNameEmployee.value;
                cardEmployer.appendChild(pName);
                let pSurname = document.createElement('P') as HTMLParagraphElement;
                pSurname.innerHTML = inputSurnameEmployee.value;
                pSurname.setAttribute('id', 'pSurname' + inputEployeeId.value);
                cardEmployer.appendChild(pSurname);
                let pAge = document.createElement('P') as HTMLParagraphElement;
                pAge.innerHTML = inputAgeEmployee.value;
                pAge.setAttribute('id', 'pAge' + inputEployeeId.value);
                cardEmployer.appendChild(pAge);
                let pEmploymentDate = document.createElement('P') as HTMLParagraphElement;
                pEmploymentDate.innerHTML = inputEmploymentDate.value;
                cardEmployer.appendChild(pEmploymentDate);
                let optionCreateNewCustomer = document.getElementById('5');
                let chooseAction = document.getElementById('chooseAction');
                if(optionCreateNewCustomer === null){
                    let optionCreateDeliteCustomer = document.createElement('OPTION') as HTMLOptionElement;
                    optionCreateDeliteCustomer.setAttribute('class', 'dissmissEmployee');
                    optionCreateDeliteCustomer.setAttribute('id', '5');
                    optionCreateDeliteCustomer.innerHTML = 'Уволить сотрудника';
                   if(chooseAction){
                        chooseAction.appendChild(optionCreateDeliteCustomer);
                    }
                 }
                let optionEditCustomer = document.getElementById('6');
                if(optionEditCustomer === null){
                    let optionEditCustomer = document.createElement('OPTION');
                    optionEditCustomer.setAttribute('class', 'editEmployee');
                    optionEditCustomer.setAttribute('id', '6');
                    optionEditCustomer.innerHTML = 'Редактировать сотрудника';
                    if(chooseAction){
                        chooseAction.appendChild(optionEditCustomer);
                    }
                }
                chooseDepartment.remove();
                choosePosition.remove();
                inputEployeeId.remove();
                inputNameEmployee.remove();
                inputSurnameEmployee.remove();
                inputAgeEmployee.remove();
                inputEmploymentDate.remove();
                buttonForm.remove();
                if(chooseAction){
                    chooseAction.value = 'Выберите действие';
                }
            })
        })
        return choosePosition;
    })
}

function dissmissEmployee(){
    let formAdd = document.getElementById('formAdd');
    let chooseDepartment = document.createElement('SELECT');
    let optionInput = document.createElement('OPTION');
    optionInput.innerHTML = 'Выбрать отдел';
    chooseDepartment.appendChild(optionInput);
    for(let element of restaurant){
        let optionInput = document.createElement('OPTION');
        optionInput.innerHTML = element.title;
        chooseDepartment.appendChild(optionInput);
    }
    if(formAdd){
        formAdd.appendChild(chooseDepartment);
    }
    chooseDepartment.addEventListener('change', function (){
        let choosePosition = document.createElement('SELECT');
        let optionInputPosition = document.createElement('OPTION');
        optionInputPosition.innerHTML = 'Выбрать должность';
        optionInput.innerHTML = 'Выбрать отдел';
        choosePosition.appendChild(optionInputPosition);
        for(let element of restaurant){
            if(element.title === chooseDepartment.value){
                for(let item of element.arrayPositions){
                    let optionInputPosition = document.createElement('OPTION');
                    optionInputPosition.innerHTML = item.title;
                    choosePosition.appendChild(optionInputPosition);
                }
            }
        }
        if(formAdd){
            formAdd.appendChild(choosePosition);
        }
         choosePosition.addEventListener('change', function () {
            let inputEployeeId = document.createElement('INPUT');
            inputEployeeId.setAttribute('id', 'inputEployeeId');
            inputEployeeId.setAttribute('placeholder', 'ID');
            inputEployeeId.className = 'input';
            if(formAdd){
                formAdd.appendChild(inputEployeeId);
            }
            let inputDismissDate = document.createElement('INPUT');
            inputDismissDate.setAttribute('placeholder', 'Дата увольнения');
            inputDismissDate.setAttribute('type', 'date');
            inputDismissDate.className = 'input';
            if(formAdd){
                formAdd.appendChild(inputDismissDate);
                }
            let buttonForm = document.createElement('BUTTON');
            buttonForm.className = 'button';
            buttonForm.innerHTML = 'Уволить';
            if(formAdd){
                formAdd.appendChild(buttonForm);
            }
             buttonForm.addEventListener('click', function(){
                for(let item of restaurant){
                    if(item.title === chooseDepartment.value){
                        for(let element of item.arrayPositions){
                            if(element.title === choosePosition.value){
                                for(let el of element.arrayEmployee){
                                    if(el.employeeId === inputEployeeId.value){
                                        el.dismissalDate = inputDismissDate.value;
                                    }
                                }
                            }
                        }
                    }
                }
                let divDepartment = document.getElementById(inputEployeeId.value);
                if(divDepartment){
                    divDepartment.remove();
                }
                
                chooseDepartment.remove();
                choosePosition.remove();
                inputEployeeId.remove();
                inputDismissDate.remove();
                buttonForm.remove();
                let chooseAction = document.getElementById('chooseAction');
                if(chooseAction){
                    chooseAction.value = 'Выберите действие';
                }
                
            })

        })
    })
}

function editEmployee(){
    let formAdd = document.getElementById('formAdd');
    let chooseDepartment = document.createElement('SELECT') as HTMLSelectElement;
    let optionInput = document.createElement('OPTION') as HTMLOptionElement;
    optionInput.innerHTML = 'Выбрать отдел';
    chooseDepartment.appendChild(optionInput);
    for(let element of restaurant){
        let optionInput = document.createElement('OPTION') as HTMLOptionElement;
        optionInput.innerHTML = element.title;
        chooseDepartment.appendChild(optionInput);
    }
    if(formAdd){
     formAdd.appendChild(chooseDepartment);
    }

    chooseDepartment.addEventListener('change', function (){
        let choosePosition = document.createElement('SELECT') as HTMLSelectElement;
        let optionInputPosition = document.createElement('OPTION') as HTMLOptionElement;
        optionInputPosition.innerHTML = 'Выбрать должность';
        optionInput.innerHTML = 'Выбрать отдел';
        choosePosition.appendChild(optionInputPosition);
        for(let element of restaurant){
            if(element.title === chooseDepartment.value){
                for(let item of element.arrayPositions){
                    let optionInputPosition = document.createElement('OPTION') as HTMLOptionElement;
                    optionInputPosition.innerHTML = item.title;
                    choosePosition.appendChild(optionInputPosition);
                }
            }
        }
        if(formAdd){
            formAdd.appendChild(choosePosition);
        }
         choosePosition.addEventListener('change', function () {
            let selectId = document.createElement('SELECT') as HTMLSelectElement;
            if(formAdd){
                formAdd.appendChild(selectId);
            }
            let optionEpmty = document.createElement('OPTION') as HTMLOptionElement;
            optionEpmty.innerHTML = 'Выбрать id';
            selectId.appendChild(optionEpmty);
            for (let item of restaurant){
                if(item.title === chooseDepartment.value){
                    for(let element of item.arrayPositions){
                        if(element.title === choosePosition.value){
                            for(let el of element.arrayEmployee){
                                let optionId = document.createElement('OPTION') as HTMLOptionElement;
                                optionId.innerHTML = el.employeeId;
                                selectId.appendChild(optionId);
                            }
                        }
                    }
                }
            }
                let nameEmpoyee: string;
                let surnameEmployee: string;
                let ageEmployee: string;
            selectId.addEventListener('change', function(){
                for (let item of restaurant){
                    if(item.title === chooseDepartment.value){
                        for(let element of item.arrayPositions){
                            if(element.title === choosePosition.value){
                                for(let el of element.arrayEmployee){
                                    if(el.employeeId === selectId.value){
                                        nameEmpoyee = el.name;
                                        surnameEmployee = el.surname;
                                        ageEmployee = el.age;

                                    }
                                }
                            }
                        }
                    }
                }
                let inputNameEmployee = document.createElement('INPUT') as HTMLInputElement;
                inputNameEmployee.value = nameEmpoyee;
                inputNameEmployee.className = 'input';
                let inputSurnameEmployee = document.createElement('INPUT') as HTMLInputElement;
                inputSurnameEmployee.value = surnameEmployee;
                inputSurnameEmployee.className = 'input';
                 let inputAgeEmployee = document.createElement('INPUT') as HTMLInputElement;
                inputAgeEmployee.value = ageEmployee;
                inputAgeEmployee.className = 'input';
                let buttonForm = document.createElement('BUTTON') as HTMLButtonElement;
                buttonForm.className = 'button';
                buttonForm.innerHTML = 'Подтвердить';
                if(formAdd){
                    formAdd.appendChild(inputNameEmployee);
                    formAdd.appendChild(inputSurnameEmployee);
                    formAdd.appendChild(inputAgeEmployee);
                    formAdd.appendChild(buttonForm);
                }
                
                buttonForm.addEventListener('click', function(){
                    for(let item of restaurant){
                        if(item.title === chooseDepartment.value){
                            for(let element of item.arrayPositions){
                                if(element.title === choosePosition.value){
                                    for(let el of element.arrayEmployee){
                                        if(el.employeeId === selectId.value){
                                            el.name = inputNameEmployee.value;
                                            el.surname = inputSurnameEmployee.value;
                                            el.age = inputAgeEmployee.value;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    let pName = document.getElementById('pName' + selectId.value);
                    let pSurname = document.getElementById('pSurname' + selectId.value);
                    let pAge = document.getElementById('pAge' + selectId.value);
                    if(pName){
                        pName.innerHTML = inputNameEmployee.value;
                    }
                    if(pSurname){
                        pSurname.innerHTML = inputSurnameEmployee.value;
                    }
                    if(pAge){
                        pAge.innerHTML = inputAgeEmployee.value;
                    }
                    chooseDepartment.remove();
                    choosePosition.remove();
                    selectId.remove();
                    inputNameEmployee.remove();
                    inputSurnameEmployee.remove();
                    inputAgeEmployee.remove();
                    buttonForm.remove();
                    let chooseAction = document.getElementById('chooseAction');
                    if(chooseAction){
                        chooseAction.value = 'Выберите действие';
                    }
                 })
            })
        })
    })
}

function getSumAllSalaries(): number{
    let selectDepart = document.createElement('SELECT') as HTMLSelectElement;
    selectDepart.className = 'select';
    let workSpase = document.getElementById('workSpace');
    if(workSpase){
        workSpase.appendChild(selectDepart);
    }
    let versionDepart = document.createElement('OPTION') as HTMLOptionElement;
    versionDepart.innerHTML = 'Выбрать отдел';
    selectDepart.appendChild(versionDepart);
    for(let item of restaurant){
        let chooseDepartment = document.createElement('OPTION') as HTMLOptionElement;
        chooseDepartment.innerHTML = item.title;
        selectDepart.appendChild(chooseDepartment);
    }
    let sum: number = 0;
    selectDepart.addEventListener('change', function (){
        for(let i = 0; i < restaurant.length; i++){
            if(restaurant[i].title === selectDepart.value){
                for(let j = 0; j < restaurant[i].arrayPositions.length; j++){

                    sum += restaurant[i].arrayPositions[j].salaryAmount() * restaurant[i].arrayPositions[j].currentEmployee();
                }
            }
        }
        let answer = document.createElement('DIV') as HTMLDivElement;
        answer.className = 'divAnswer';
        answer.innerHTML = sum. toString();
        let button = document.createElement('DIV')  as HTMLDivElement;
        button.className = 'buttonOk';
        button.innerHTML = 'OK';
          if(workSpase){
            workSpase.appendChild(answer);
            workSpase.appendChild(button);
        }
        button.addEventListener('click', function (){
            selectDepart.remove();
            answer.remove();
            button.remove();
            let select = document.getElementById('choose');
            if(select){
                select.value = 'Выбрать рассчет';
            }
            
        })
    })
    return sum;
}

function getAvarageSalary(): number{
    let selectDepart = document.createElement('SELECT') as HTMLSelectElement;
    selectDepart.className = 'select';
    let workSpase = document.getElementById('workSpace');
    if(workSpase){
        workSpase.appendChild(selectDepart);
    }
    let versionDepart = document.createElement('OPTION');
    versionDepart.innerHTML = 'Выбрать отдел';
    selectDepart.appendChild(versionDepart);
    for(let item of restaurant){
        let chooseDepartment = document.createElement('OPTION');
        chooseDepartment.innerHTML = item.title;
        selectDepart.appendChild(chooseDepartment);
    }
    let sum = 0;
    let amountPositions = 0;
    selectDepart.addEventListener('change', function (){
        for(let i = 0; i < restaurant.length; i++){
            if(restaurant[i].title === selectDepart.value){
                amountPositions = restaurant[i].arrayPositions.length;
                for(let j = 0; j < amountPositions; j++){
                    sum += restaurant[i].arrayPositions[j].salaryAmount();
                }
            }
        }
        let answer = document.createElement('DIV') as HTMLDivElement;
        answer.className = 'divAnswer';
        if(answer){
            answer.innerHTML = (sum/amountPositions).toString();
        }
        let button = document.createElement('DIV') as HTMLDivElement;
        button.className = 'buttonOk';
        button.innerHTML = 'OK';
        if(workSpase){
            workSpase.appendChild(answer);
            workSpase.appendChild(button);
        }
        button.addEventListener('click', function (){
            selectDepart.remove();
            answer.remove();
            button.remove();
            let select = document.getElementById('choose');
            if(select){
                select.value = 'Выбрать рассчет';
            }
            
        })

    })
    return sum/amountPositions;
}

function getMinSalary(): number{
    let selectDepart = document.createElement('SELECT') as HTMLSelectElement;
    selectDepart.className = 'select';
    let workSpase = document.getElementById('workSpace');
    if(workSpase){
        workSpase.appendChild(selectDepart);
    }
    let versionDepart = document.createElement('OPTION') as HTMLOptionElement;
    versionDepart.innerHTML = 'Выбрать отдел';
    selectDepart.appendChild(versionDepart);
    for(let item of restaurant){
        let chooseDepartment = document.createElement('OPTION') as HTMLOptionElement;
        chooseDepartment.innerHTML = item.title;
        selectDepart.appendChild(chooseDepartment);
    }
    let arraySalary: number[] = [];
    let minSalary: number = 0;
    selectDepart.addEventListener('change', function (){
         for(let i = 0; i < restaurant.length; i++){
            if(restaurant[i].title === selectDepart.value){
                for(let j = 0; j < restaurant[i].arrayPositions.length; j++){
                    arraySalary.push(restaurant[i].arrayPositions[j].salaryAmount())
                    arraySalary.sort();
                    minSalary = arraySalary[0];
                }
            }
        }
        let answer = document.createElement('DIV') as HTMLDivElement;
        answer.className = 'divAnswer';
        answer.innerHTML = minSalary.toString();
        let button = document.createElement('DIV') as HTMLDivElement;
        button.className = 'buttonOk';
        button.innerHTML = 'OK';
        if(workSpase){
            workSpase.appendChild(answer);
            workSpase.appendChild(button);
        }
        button.addEventListener('click', function (){
            selectDepart.remove();
            answer.remove();
            button.remove();
            let select = document.getElementById('choose');
            if(select){
                select.value = 'Выбрать рассчет';
            }
         })

    })
    return minSalary;
}

function getMaxSalary(): number{
    let selectDepart = document.createElement('SELECT') as HTMLSelectElement;
    selectDepart.className = 'select';
    let workSpase = document.getElementById('workSpace');
    if(workSpase){
        workSpase.appendChild(selectDepart);
    }
    let versionDepart = document.createElement('OPTION') as HTMLOptionElement;
    versionDepart.innerHTML = 'Выбрать отдел';
    selectDepart.appendChild(versionDepart);
    for(let item of restaurant){
        let chooseDepartment = document.createElement('OPTION') as HTMLOptionElement;
        chooseDepartment.innerHTML = item.title;
        selectDepart.appendChild(chooseDepartment);
    }
    let arraySalary: number[] = [];
    let maxSalary: number = 0;
    selectDepart.addEventListener('change', function (){
        for(let i = 0; i < restaurant.length; i++){
            if(restaurant[i].title === selectDepart.value){
                for(let j = 0; j < restaurant[i].arrayPositions.length; j++){
                    arraySalary.push(restaurant[i].arrayPositions[j].salaryAmount())
                    arraySalary.sort();
                    maxSalary = arraySalary[arraySalary.length - 1];
                }
            }
        }
        let answer = document.createElement('DIV') as HTMLDivElement;
        answer.className = 'divAnswer';
        answer.innerHTML = maxSalary.toString();
        if(workSpase){
            workSpase.appendChild(answer);
        }
        let button = document.createElement('DIV') as HTMLDivElement;
        button.className = 'buttonOk';
        button.innerHTML = 'OK';
        if(workSpase){
            workSpase.appendChild(button);
        }
        button.addEventListener('click', function (){
            selectDepart.remove();
            answer.remove();
            button.remove();
            let select = document.getElementById('choose');
            if(select){
                select.value = 'Выбрать рассчет';
            }
        })

    })
    return maxSalary;
}

function getAmountDismiss(): number{
    let selectDepart = document.createElement('SELECT') as HTMLSelectElement;
    selectDepart.className = 'select';
    let workSpase = document.getElementById('workSpace');
    if(workSpase){
        workSpase.appendChild(selectDepart);
    }
    let versionDepart = document.createElement('OPTION') as HTMLOptionElement;
    versionDepart.innerHTML = 'Выбрать отдел';
    selectDepart.appendChild(versionDepart);
    for(let item of restaurant){
        let chooseDepartment = document.createElement('OPTION') as HTMLOptionElement;
        chooseDepartment.innerHTML = item.title;
        selectDepart.appendChild(chooseDepartment);
    }
     let currentArr: Employee[] = [];
     let counter: number = 0;
    selectDepart.addEventListener('change', function (){
        for(let i = 0; i < restaurant.length; i++){
            if(restaurant[i].title === selectDepart.value){
                for(let j = 0; j < restaurant[i].arrayPositions.length; j++){
                    currentArr = restaurant[i].arrayPositions[j].getArrayEmployee();
                    for(let k = 0; k < currentArr.length; k++){
                        if(currentArr[k].dismissalDate !== ""){
                            counter++;
                        }
                    }
                }
            }
        }
        let answer = document.createElement('DIV') as HTMLDivElement;
        answer.className = 'divAnswer';
        answer.innerHTML = counter.toString();
        if(workSpase){
            workSpase.appendChild(answer);
        }
        let button = document.createElement('DIV') as HTMLDivElement;
        button.className = 'buttonOk';
        button.innerHTML = 'OK';
        if(workSpase){
            workSpase.appendChild(button);
        }
        button.addEventListener('click', function (){
            selectDepart.remove();
            answer.remove();
            button.remove();
            let select = document.getElementById('choose');
            if(select){
                select.value = 'Выбрать рассчет';
            }
       })

    })
    return counter;
}
 let arrayDepartmentWithoutHead: string[] = [];
 let result: string;
function getDepartmentsWithoutHead(): string[]{
    for(let i = 0; i < restaurant.length; i++){
        for(let j = 0; j < restaurant[i].arrayPositions.length; j++){
            if(restaurant[i].arrayPositions[j].head){
                for(let k = 0; k < restaurant[i].arrayPositions[j].arrayEmployee.length; k++){
                if(restaurant[i].arrayPositions[j].arrayEmployee[k].dismissalDate !== "" || restaurant[i].arrayPositions[j].arrayEmployee.length === 0){
                    arrayDepartmentWithoutHead.push(restaurant[i].title);
                    result = arrayDepartmentWithoutHead.join(', ');
                }
                }

            }
        }
    }
    let answer = document.createElement('DIV') as HTMLDivElement;
    answer.className = 'divAnswer';

    answer.innerHTML = result;
    let workSpase = document.getElementById('workSpace');
    let button = document.createElement('DIV');
    button.className = 'buttonOk';
    button.innerHTML = 'OK';
        if(workSpase){
        workSpase.appendChild(answer);
        workSpase.appendChild(button);
    }
    button.addEventListener('click', function (){
        answer.remove();
        button.remove();
        let select = document.getElementById('choose');
        if(select){
            select.value = 'Выбрать рассчет';
        }
    })
    return arrayDepartmentWithoutHead;
}

let selects = document.querySelectorAll('.select');

selects.forEach(function(select){
    select.addEventListener('change', function(event){
        if(event.target){
          let act = (event.target as HTMLHtmlElement).class;
          this[act]();
        }
        
    })
})

