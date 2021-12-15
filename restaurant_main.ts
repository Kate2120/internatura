

function createAllElements() {
    let divContainer = document.createElement('DIV') as HTMLDivElement;
    divContainer.className = 'container';
    divContainer.setAttribute('id', 'container');
    let body = document.querySelector('body');
    if (body) {
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
    let divWorkSpace = document.createElement('DIV');
    divWorkSpace.className = 'workSpace';
    divWorkSpace.setAttribute('id', 'workSpace');
    let divContainer = document.getElementById('container');
    if (divContainer) {
        divContainer.appendChild(divWorkSpace);
    }
    let h2WorkSpace = document.createElement('H2');
    h2WorkSpace.className = 'headingH2';
    h2WorkSpace.innerHTML = 'Инструментарий';
    divWorkSpace.appendChild(h2WorkSpace);
    let chooseAction = document.createElement('SELECT');
    chooseAction.setAttribute('id', 'chooseAction');
    chooseAction.className = 'select';
    divWorkSpace.appendChild(chooseAction);
    let optionSelectAction = document.createElement('OPTION');
    optionSelectAction.innerHTML = 'Выберите действие';
    chooseAction.appendChild(optionSelectAction);
    let optionCreateNewDepartment = document.createElement('OPTION');
    optionCreateNewDepartment.setAttribute('data-action', "addDepartment");
    optionCreateNewDepartment.innerHTML = 'Добавить новый отдел';
    chooseAction.appendChild(optionCreateNewDepartment);
    let formAdd = document.createElement('FORM');
    formAdd.setAttribute('id', 'formAdd');
    formAdd.setAttribute('onsubmit', 'return false');
    divWorkSpace.appendChild(formAdd);
    let sumAllSalary = document.createElement('OPTION');
    sumAllSalary.innerHTML = 'Сумма всех зарплат по отделу';
    sumAllSalary.setAttribute('data-action', 'getSumAllSalaries');
    chooseAction.appendChild(sumAllSalary);
    let avarageSalary = document.createElement('OPTION');
    avarageSalary.innerHTML = 'Средняя зарплата по отделу';
    avarageSalary.setAttribute('data-action', 'getAvarageSalary');
    chooseAction.appendChild(avarageSalary);
    let minSalary = document.createElement('OPTION');
    minSalary.innerHTML = 'Минимальная зарплата по отделу';
    minSalary.setAttribute('data-action', 'getMinSalary');
    chooseAction.appendChild(minSalary);
    let maxSalary = document.createElement('OPTION');
    maxSalary.innerHTML = 'Максимальная зарплата по отделу';
    maxSalary.setAttribute('data-action', 'getMaxSalary');
    chooseAction.appendChild(maxSalary);
    let amountDimiss = document.createElement('OPTION');
    amountDimiss.innerHTML = 'Количество уволенных';
    amountDimiss.setAttribute('data-action', 'getAmountDismiss');
    chooseAction.appendChild(amountDimiss);
    let amountWhithoutHead = document.createElement('OPTION');
    amountWhithoutHead.innerHTML = 'Отделы без хеда';
    amountWhithoutHead.setAttribute('data-action', 'getDepartmentsWithoutHead');
    chooseAction.appendChild(amountWhithoutHead);
}
showFormAddEmployee();

interface Positions {
    arrayEmployee: Employee[];
    id: number;
    title: string;
    salary: number;
    head: string;
}
interface Department{
    arrayPositions: Positions[];
    departmentId: number;
    title: string;
}
interface Employee{
    dismissalDate?: Date | string;
    employeeId: number;
    name: string;
    surname: string;
    age:number;
    employmentDate: string;
}
class Restaurant {
    departments: Department[];
    id: number;
    select!: HTMLSelectElement;
    [action: string]: any;
    [action: number]: Function;
    contextBank: this;
    constructor() {
        this.departments = [];
        this.id = 0;
        this.select = (document.querySelector('.select')) as HTMLSelectElement;
        this.select.addEventListener('change', this.onEvent.bind(this));
        this.contextBank = this;
    }

    onEvent(event: Event) {
        let element = event.target as HTMLSelectElement;
        let action = element.children[element.selectedIndex].getAttribute("data-action");
        if (action !== null) {
            this[action]();
        }
    }

    getThis() {
        return this;
    }

    getArrayDepartments(){
        return this.departments;
    }

    currentEmployee() {
        let counter: number = 0;
        let arrayDepartments: Department[] = this.getArrayDepartments();
        for (let i = 0; i < arrayDepartments.length; i++) {
            if(arrayDepartments[i] !== undefined){
            for(let j = 0; j < arrayDepartments[i].arrayPositions.length; j++){
                for(let k = 0; k < arrayDepartments[i].arrayPositions[j].arrayEmployee.length; k++){
                    if(arrayDepartments[i].arrayPositions[j].arrayEmployee[k].dismissalDate === ""){
                        counter++;
                    }
                }
            }
            }
        }
        return counter;
    }

    addDepartment() {
        
        let currentContext = this.getThis();
        
        let formAdd = document.createElement('FORM') as HTMLFormElement;
        let inputDepartmentId = document.createElement('INPUT') as HTMLInputElement;
        inputDepartmentId.setAttribute('id', 'inputDepartmentId');
        inputDepartmentId.setAttribute('placeholder', 'ID');
        inputDepartmentId.className = 'input';
        if (formAdd) {
            formAdd.appendChild(inputDepartmentId);
        }
        let inputTitle = document.createElement('INPUT') as HTMLInputElement;
        inputTitle.setAttribute('placeholder', 'Название отдела');
        inputTitle.setAttribute('id', 'inputTitle');
        inputTitle.className = 'input';
        if (formAdd) {
            formAdd.appendChild(inputTitle);
        }
        let buttonForm = document.createElement('BUTTON') as HTMLButtonElement;
        buttonForm.className = 'button';
        buttonForm.innerHTML = 'Добавить';
        if (formAdd) {
            formAdd.appendChild(buttonForm);
        }
        buttonForm.addEventListener('click', function () {
            let department: Department = {
                arrayPositions: [],
                departmentId: ++currentContext.id,
                title: inputTitle.value,
            };
            currentContext.departments.push(department);
            let divDepartment = document.createElement('DIV');
            divDepartment.setAttribute('id', inputTitle.value);
            divDepartment.className = 'department';
            let divDepartmentsList = document.getElementById('divDepartmentsList');
            if (divDepartmentsList) {
                divDepartmentsList.appendChild(divDepartment);
            }
            let h3 = document.createElement('H3');
            divDepartment.appendChild(h3);
            h3.innerHTML = inputTitle.value;
            let chooseAction = document.getElementById('chooseAction');
            let optionCreateNewPosition = document.getElementById('3');
            if (optionCreateNewPosition === null) {
                let optionCreateNewPosition = document.createElement('OPTION');
                optionCreateNewPosition.setAttribute('data-action', 'addPosition');
                optionCreateNewPosition.setAttribute('id', '3');
                optionCreateNewPosition.innerHTML = 'Добавить новую должность';
                if (chooseAction) {
                    chooseAction.appendChild(optionCreateNewPosition);
                }
            }
            inputDepartmentId.remove();
            inputTitle.remove();
            buttonForm.remove();
            if (chooseAction) {
                (chooseAction as HTMLSelectElement).value = 'Выберите действие';
            }
        });
        formAdd.setAttribute('id', 'formAdd');
        formAdd.setAttribute('onsubmit', 'return false');
        let divWorkSpace = document.getElementById('workSpace');
        if (divWorkSpace) {
            divWorkSpace.appendChild(formAdd);
        }
    }

    addPosition() {
        let chooseDepartment = document.createElement('SELECT') as HTMLSelectElement;
        let makeChoice = document.createElement('OPTION') as HTMLOptionElement;
        makeChoice.innerHTML = 'Выберите отдел';
        chooseDepartment.appendChild(makeChoice);
        let formAdd = document.getElementById('formAdd');
        if (formAdd) {
            formAdd.appendChild(chooseDepartment);
        }
        let arrayDepartments = this.getArrayDepartments();
        for (let i = 0; i < arrayDepartments.length; i++) {
            let optionInput = document.createElement('OPTION') as HTMLOptionElement;
            if(optionInput){
            optionInput.innerHTML = arrayDepartments[i].title;
            chooseDepartment.appendChild(optionInput);
            }
        }
        let inputPositionId = document.createElement('INPUT') as HTMLInputElement;
        inputPositionId.setAttribute('id', 'inputPositionId');
        inputPositionId.setAttribute('placeholder', 'ID');
        inputPositionId.className = 'input';
        if (formAdd) {
            formAdd.appendChild(inputPositionId);
        }
        let inputTitlePosition = document.createElement('INPUT') as HTMLInputElement;
        inputTitlePosition.setAttribute('placeholder', 'Название должности');
        inputTitlePosition.setAttribute('id', 'inputTitlePosition');
        inputTitlePosition.className = 'input';
        if (formAdd) {
            formAdd.appendChild(inputTitlePosition);
        }
        let inputSalary = document.createElement('INPUT') as HTMLInputElement;
        inputSalary.setAttribute('placeholder', 'Зарплата');
        inputSalary.setAttribute('id', 'inputSalary');
        inputSalary.className = 'input';
        if (formAdd) {
            formAdd.appendChild(inputSalary);
        }
        let selectIsHead = document.createElement('SELECT') as HTMLSelectElement;
        selectIsHead.className = 'input';
        let choise = document.createElement('OPTION');
        choise.innerHTML = 'Должность руководящая?';
        selectIsHead.appendChild(choise);
        let optionYes = document.createElement('OPTION');
        optionYes.innerHTML = 'да';
        optionYes.setAttribute('class', 'true');
        selectIsHead.appendChild(optionYes);
        let optionNo = document.createElement('OPTION');
        optionNo.innerHTML = 'нет';
        optionNo.setAttribute('class', 'false');
        selectIsHead.appendChild(optionNo);
        if (formAdd) {
            formAdd.appendChild(selectIsHead);
        }
        let buttonForm = document.createElement('BUTTON');
        buttonForm.className = 'button';
        buttonForm.innerHTML = 'Добавить';
        if (formAdd) {
            formAdd.appendChild(buttonForm);
        }
        buttonForm.addEventListener('click', function () {
            let position: Positions = {
                id: Number(inputPositionId.value),
                title: inputTitlePosition.value,
                salary: Number(inputSalary.value),
                head: selectIsHead.value,
                arrayEmployee: [],
            };
            for (let j = 0; j < arrayDepartments.length; j++) {
                if (arrayDepartments[j].title === chooseDepartment.value) {
                    arrayDepartments[j].arrayPositions.push(position);
                }
            }
            let divDepartment = document.getElementById(chooseDepartment.value);
            let h4 = document.createElement('H4');
            h4.innerHTML = inputTitlePosition.value;
            if (divDepartment) {
                divDepartment.appendChild(h4);
            }
            let divCards = document.createElement('DIV');
            divCards.setAttribute('id', inputTitlePosition.value);
            if (divDepartment) {
                divDepartment.appendChild(divCards);
            }
            let chooseAction = document.getElementById('chooseAction');
            let optionCreateNewCustomer = document.getElementById('4');
            if (optionCreateNewCustomer === null) {
                let optionCreateNewCustomer = document.createElement('OPTION');
                optionCreateNewCustomer.setAttribute('id', '4');
                optionCreateNewCustomer.setAttribute('data-action', 'addEmployee');
                optionCreateNewCustomer.innerHTML = 'Добавить нового сотрудника';
                if (chooseAction) {
                    chooseAction.appendChild(optionCreateNewCustomer);
                }
            }
            chooseDepartment.remove();
            inputPositionId.remove();
            inputTitlePosition.remove();
            inputSalary.remove();
            selectIsHead.remove();
            buttonForm.remove();
            if (chooseAction) {
                (chooseAction as HTMLSelectElement).value = 'Выберите действие';
            }
        });
    }

    addEmployee() {
        
        let formAdd = document.getElementById('formAdd');
        let chooseDepartment = document.createElement('SELECT') as HTMLSelectElement;
        let optionInput = document.createElement('OPTION');
        optionInput.innerHTML = 'Выбрать отдел';
        chooseDepartment.appendChild(optionInput);
        let arrayDepartments = this.getArrayDepartments();
        for (let i = 0; i < arrayDepartments.length; i++) {
            let optionInput = document.createElement('OPTION');
            optionInput.innerHTML = arrayDepartments[i].title;
            chooseDepartment.appendChild(optionInput);
        }
        if (formAdd) {
            formAdd.appendChild(chooseDepartment);
        }
        chooseDepartment.addEventListener('change', function () {
            let choosePosition = document.createElement('SELECT') as HTMLSelectElement;
            let optionInputPosition = document.createElement('OPTION');
            optionInputPosition.innerHTML = 'Выбрать должность';
            optionInput.innerHTML = 'Выбрать отдел';
            choosePosition.appendChild(optionInputPosition);
            for (let i = 0; i < arrayDepartments.length; i++) {
                if (arrayDepartments[i].title === chooseDepartment.value) {
                    for (let item of arrayDepartments[i].arrayPositions) {
                        let optionInputPosition = document.createElement('OPTION');
                        optionInputPosition.innerHTML = item.title;
                        choosePosition.appendChild(optionInputPosition);
                    }
                }
            }
            if (formAdd) {
                formAdd.appendChild(choosePosition);
            }
            choosePosition.addEventListener('change', function () {
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
                let buttonForm = document.createElement('BUTTON');
                buttonForm.className = 'button';
                buttonForm.innerHTML = 'Добавить';
                if (formAdd) {
                    formAdd.appendChild(inputEployeeId);
                    formAdd.appendChild(inputNameEmployee);
                    formAdd.appendChild(inputSurnameEmployee);
                    formAdd.appendChild(inputAgeEmployee);
                    formAdd.appendChild(inputEmploymentDate);
                    formAdd.appendChild(buttonForm);
                }
                buttonForm.addEventListener('click', function () {
                    let employer: Employee = {
                        employeeId: Number(inputEployeeId.value),
                        name: inputNameEmployee.value,
                        surname: inputSurnameEmployee.value,
                        age: Number(inputAgeEmployee.value),
                        employmentDate: inputEmploymentDate.value,
                        dismissalDate: '',
                    };

                    for (let i = 0; i < arrayDepartments.length; i++) {
                        if (arrayDepartments[i].title === chooseDepartment.value) {
                            for (let element of arrayDepartments[i].arrayPositions) {
                                if (element.title === choosePosition.value) {
                                    element.arrayEmployee.push(employer);
                                }
                            }
                        }
                    }
                    let divDepartment = document.getElementById(choosePosition.value);
                    let cardEmployer = document.createElement('DIV');
                    cardEmployer.className = 'employerStyle';
                    cardEmployer.setAttribute('id', inputEployeeId.value);
                    if (divDepartment) {
                        divDepartment.appendChild(cardEmployer);
                    }
                    let pId = document.createElement('P');
                    pId.innerHTML = "ID: " + inputEployeeId.value;
                    cardEmployer.appendChild(pId);
                    let pName = document.createElement('P');
                    pName.setAttribute('id', 'pName' + inputEployeeId.value);
                    pName.innerHTML = inputNameEmployee.value;
                    cardEmployer.appendChild(pName);
                    let pSurname = document.createElement('P');
                    pSurname.innerHTML = inputSurnameEmployee.value;
                    pSurname.setAttribute('id', 'pSurname' + inputEployeeId.value);
                    cardEmployer.appendChild(pSurname);
                    let pAge = document.createElement('P');
                    pAge.innerHTML = inputAgeEmployee.value;
                    pAge.setAttribute('id', 'pAge' + inputEployeeId.value);
                    cardEmployer.appendChild(pAge);
                    let pEmploymentDate = document.createElement('P');
                    pEmploymentDate.innerHTML = inputEmploymentDate.value;
                    cardEmployer.appendChild(pEmploymentDate);
                    let optionCreateNewCustomer = document.getElementById('5');
                    let chooseAction = document.getElementById('chooseAction');
                    if (optionCreateNewCustomer === null) {
                        let optionCreateDeliteCustomer = document.createElement('OPTION');
                        optionCreateDeliteCustomer.setAttribute('data-action', 'dissmissEmployee');
                        optionCreateDeliteCustomer.setAttribute('id', '5');
                        optionCreateDeliteCustomer.innerHTML = 'Уволить сотрудника';
                        if (chooseAction) {
                            chooseAction.appendChild(optionCreateDeliteCustomer);
                        }
                    }
                    let optionEditCustomer = document.getElementById('6');
                    if (optionEditCustomer === null) {
                        let optionEditCustomer = document.createElement('OPTION');
                        optionEditCustomer.setAttribute('data-action', 'editEmployee');
                        optionEditCustomer.setAttribute('id', '6');
                        optionEditCustomer.innerHTML = 'Редактировать сотрудника';
                        if (chooseAction) {
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
                    if (chooseAction) {
                        (chooseAction as HTMLSelectElement).value = 'Выберите действие';
                    }
                });
            });
            return choosePosition;
        });
    }

    dissmissEmployee() {
        let formAdd = document.getElementById('formAdd');
        let chooseDepartment = document.createElement('SELECT') as HTMLSelectElement;
        let optionInput = document.createElement('OPTION');
        optionInput.innerHTML = 'Выбрать отдел';
        chooseDepartment.appendChild(optionInput);
        let arrayDepartments = this.getArrayDepartments();
        for (let i = 0; i < arrayDepartments.length; i++) {
            let optionInput = document.createElement('OPTION');
            optionInput.innerHTML = arrayDepartments[i].title;
            chooseDepartment.appendChild(optionInput);
        }
        if (formAdd) {
            formAdd.appendChild(chooseDepartment);
        }
        chooseDepartment.addEventListener('change', function () {
            let choosePosition = document.createElement('SELECT') as HTMLSelectElement;
            let optionInputPosition = document.createElement('OPTION');
            optionInputPosition.innerHTML = 'Выбрать должность';
            optionInput.innerHTML = 'Выбрать отдел';
            choosePosition.appendChild(optionInputPosition);
            for (let i = 0; i < arrayDepartments.length; i++) {
                if (arrayDepartments[i].title === chooseDepartment.value) {
                    for (let item of arrayDepartments[i].arrayPositions) {
                        let optionInputPosition = document.createElement('OPTION');
                        optionInputPosition.innerHTML = item.title;
                        choosePosition.appendChild(optionInputPosition);
                    }
                }
            }
            if (formAdd) {
                formAdd.appendChild(choosePosition);
            }
            choosePosition.addEventListener('change', function () {
                let inputEployeeId = document.createElement('INPUT') as HTMLInputElement;
                inputEployeeId.setAttribute('id', 'inputEployeeId');
                inputEployeeId.setAttribute('placeholder', 'ID');
                inputEployeeId.className = 'input';
                if (formAdd) {
                    formAdd.appendChild(inputEployeeId);
                }
                let inputDismissDate = document.createElement('INPUT') as HTMLInputElement;
                inputDismissDate.setAttribute('placeholder', 'Дата увольнения');
                inputDismissDate.setAttribute('type', 'date');
                inputDismissDate.className = 'input';
                if (formAdd) {
                    formAdd.appendChild(inputDismissDate);
                }
                let buttonForm = document.createElement('BUTTON');
                buttonForm.className = 'button';
                buttonForm.innerHTML = 'Уволить';
                if (formAdd) {
                    formAdd.appendChild(buttonForm);
                }
                buttonForm.addEventListener('click', function () {
                    for (let i = 0; i < arrayDepartments.length; i++) {
                        if (arrayDepartments[i].title === chooseDepartment.value) {
                            for (let element of arrayDepartments[i].arrayPositions) {
                                if (element.title === choosePosition.value) {
                                    for (let el of element.arrayEmployee) {
                                        if (el.employeeId === Number(inputEployeeId.value)) {
                                            el.dismissalDate = inputDismissDate.value;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    let divDepartment = document.getElementById(inputEployeeId.value);
                    if (divDepartment) {
                        divDepartment.remove();
                    }
                    chooseDepartment.remove();
                    choosePosition.remove();
                    inputEployeeId.remove();
                    inputDismissDate.remove();
                    buttonForm.remove();
                    let chooseAction = document.getElementById('chooseAction');
                    if (chooseAction) {
                        (chooseAction as HTMLSelectElement).value = 'Выберите действие';
                    }
                });
            });
        });
    }

    editEmployee() {
        let formAdd = document.getElementById('formAdd');
        let chooseDepartment = document.createElement('SELECT') as HTMLSelectElement;
        let optionInput = document.createElement('OPTION');
        optionInput.innerHTML = 'Выбрать отдел';
        chooseDepartment.appendChild(optionInput);
        let arrayDepartments = this.getArrayDepartments();
        for (let i = 0; i < arrayDepartments.length; i++) {
            let optionInput = document.createElement('OPTION');
            optionInput.innerHTML = arrayDepartments[i].title;
            chooseDepartment.appendChild(optionInput);
        }
        if (formAdd) {
            formAdd.appendChild(chooseDepartment);
        }
        chooseDepartment.addEventListener('change', function () {
            let choosePosition = document.createElement('SELECT') as HTMLSelectElement;
            let optionInputPosition = document.createElement('OPTION');
            optionInputPosition.innerHTML = 'Выбрать должность';
            optionInput.innerHTML = 'Выбрать отдел';
            choosePosition.appendChild(optionInputPosition);
            for (let element of arrayDepartments) {
                if (element.title === chooseDepartment.value) {
                    for (let item of element.arrayPositions) {
                        let optionInputPosition = document.createElement('OPTION');
                        optionInputPosition.innerHTML = item.title;
                        choosePosition.appendChild(optionInputPosition);
                    }
                }
            }
            if (formAdd) {
                formAdd.appendChild(choosePosition);
            }
            choosePosition.addEventListener('change', function () {
                let selectId = document.createElement('SELECT') as HTMLSelectElement;
                if (formAdd) {
                    formAdd.appendChild(selectId);
                }
                let optionEpmty = document.createElement('OPTION');
                optionEpmty.innerHTML = 'Выбрать id';
                selectId.appendChild(optionEpmty);
                for (let item of arrayDepartments) {
                    if (item.title === chooseDepartment.value) {
                        for (let element of item.arrayPositions) {
                            if (element.title === choosePosition.value) {
                                for (let el of element.arrayEmployee) {
                                    let optionId = document.createElement('OPTION');
                                    optionId.innerHTML = String(el.employeeId);
                                    selectId.appendChild(optionId);
                                }
                            }
                        }
                    }
                }
                let nameEmpoyee: string;
                let surnameEmployee: string;
                let ageEmployee: string;
                selectId.addEventListener('change', function () {
                    for (let i = 0; i < arrayDepartments.length; i++) {
                        if (arrayDepartments[i].title === chooseDepartment.value) {
                            for (let element of arrayDepartments[i].arrayPositions) {
                                if (element.title === choosePosition.value) {
                                    for (let el of element.arrayEmployee) {
                                        if (el.employeeId === Number(selectId.value)) {
                                            nameEmpoyee = el.name;
                                            surnameEmployee = el.surname;
                                            ageEmployee = String(el.age);
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
                    let buttonForm = document.createElement('BUTTON');
                    buttonForm.className = 'button';
                    buttonForm.innerHTML = 'Подтвердить';
                    if (formAdd) {
                        formAdd.appendChild(inputNameEmployee);
                        formAdd.appendChild(inputSurnameEmployee);
                        formAdd.appendChild(inputAgeEmployee);
                        formAdd.appendChild(buttonForm);
                    }
                    buttonForm.addEventListener('click', function () {
                        for (let i = 0; i < arrayDepartments.length; i++) {
                            if (arrayDepartments[i].title === chooseDepartment.value) {
                                for (let element of arrayDepartments[i].arrayPositions) {
                                    if (element.title === choosePosition.value) {
                                        for (let el of element.arrayEmployee) {
                                            if (el.employeeId === Number(selectId.value)) {
                                                el.name = inputNameEmployee.value;
                                                el.surname = inputSurnameEmployee.value;
                                                el.age = Number(inputAgeEmployee.value);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        let pName = document.getElementById('pName' + selectId.value);
                        let pSurname = document.getElementById('pSurname' + selectId.value);
                        let pAge = document.getElementById('pAge' + selectId.value);
                        if (pName) {
                            pName.innerHTML = inputNameEmployee.value;
                        }
                        if (pSurname) {
                            pSurname.innerHTML = inputSurnameEmployee.value;
                        }
                        if (pAge) {
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
                        if (chooseAction) {
                            (chooseAction as HTMLSelectElement).value = 'Выберите действие';
                        }
                    });
                });
            });
        });
    }

    getSumAllSalaries() {
        let currentContext = this.getThis();
        let selectDepart = document.createElement('SELECT') as HTMLSelectElement;
        selectDepart.className = 'select';
        let workSpase = document.getElementById('workSpace');
        if (workSpase) {
            workSpase.appendChild(selectDepart);
        }
        let versionDepart = document.createElement('OPTION');
        versionDepart.innerHTML = 'Выбрать отдел';
        selectDepart.appendChild(versionDepart);
        let arrayDepartments = this.getArrayDepartments();
        for (let i = 0; i < arrayDepartments.length; i++) {
            let chooseDepartment = document.createElement('OPTION');
            chooseDepartment.innerHTML = arrayDepartments[i].title;
            selectDepart.appendChild(chooseDepartment);
        }
        let sum = 0;
        selectDepart.addEventListener('change', function () {
            for (let i = 0; i < arrayDepartments.length; i++) {
                if (arrayDepartments[i].title === selectDepart.value) {
                    for (let j = 0; j < arrayDepartments[i].arrayPositions.length; j++) {
                        sum += arrayDepartments[i].arrayPositions[j].salary * currentContext.currentEmployee();
                    }
                }
            }
            let answer = document.createElement('DIV');
            answer.className = 'divAnswer';
            answer.innerHTML = sum.toString();
            let button = document.createElement('DIV');
            button.className = 'buttonOk';
            button.innerHTML = 'OK';
            if (workSpase) {
                workSpase.appendChild(answer);
                workSpase.appendChild(button);
            }
            button.addEventListener('click', function () {
                selectDepart.remove();
                answer.remove();
                button.remove();
                let select = document.getElementById('choose');
                if (select) {
                    (select as HTMLSelectElement).value = 'Выбрать рассчет';
                }
            });
        });
        return sum;
    }
    getAvarageSalary() {
        let selectDepart = document.createElement('SELECT') as HTMLSelectElement;
        selectDepart.className = 'select';
        let workSpase = document.getElementById('workSpace');
        if (workSpase) {
            workSpase.appendChild(selectDepart);
        }
        let versionDepart = document.createElement('OPTION');
        versionDepart.innerHTML = 'Выбрать отдел';
        selectDepart.appendChild(versionDepart);
        let arrayDepartments = this.getArrayDepartments();
        for (let i = 0; i < arrayDepartments.length; i++) {
            let chooseDepartment = document.createElement('OPTION');
            chooseDepartment.innerHTML = arrayDepartments[i].title;
            selectDepart.appendChild(chooseDepartment);
        }
        let sum = 0;
        let amountPositions = 0;
        selectDepart.addEventListener('change', function () {
            for (let i = 0; i < arrayDepartments.length; i++) {
                if (arrayDepartments[i].title === selectDepart.value) {
                    amountPositions = arrayDepartments[i].arrayPositions.length;
                    for (let j = 0; j < arrayDepartments[i].arrayPositions.length; j++) {
                        sum += arrayDepartments[i].arrayPositions[j].salary;
                    }
                }
            }
            let answer = document.createElement('DIV');
            answer.className = 'divAnswer';
            if (answer) {
                answer.innerHTML = (sum / amountPositions).toString();
            }
            let button = document.createElement('DIV');
            button.className = 'buttonOk';
            button.innerHTML = 'OK';
            if (workSpase) {
                workSpase.appendChild(answer);
                workSpase.appendChild(button);
            }
            button.addEventListener('click', function () {
                selectDepart.remove();
                answer.remove();
                button.remove();
                let select = document.getElementById('choose');
                if (select) {
                    (select as HTMLSelectElement).value = 'Выбрать рассчет';
                }
            });
        });
        return sum / amountPositions;
    }

    getMinSalary() {
        let selectDepart = document.createElement('SELECT') as HTMLSelectElement;
        selectDepart.className = 'select';
        let workSpase = document.getElementById('workSpace');
        if (workSpase) {
            workSpase.appendChild(selectDepart);
        }
        let versionDepart = document.createElement('OPTION');
        versionDepart.innerHTML = 'Выбрать отдел';
        selectDepart.appendChild(versionDepart);
        let arrayDepartments = this.getArrayDepartments();
        for (let i = 0; i < arrayDepartments.length; i++) {
            let chooseDepartment = document.createElement('OPTION');
            chooseDepartment.innerHTML = arrayDepartments[i].title;
            selectDepart.appendChild(chooseDepartment);
        }
        let arraySalary: number[] = [];
        let minSalary = 0;
        selectDepart.addEventListener('change', function () {
            for (let i = 0; i < arrayDepartments.length; i++) {
                if (arrayDepartments[i].title === selectDepart.value) {
                    for (let j = 0; j < arrayDepartments[i].arrayPositions.length; j++) {
                        arraySalary.push(arrayDepartments[i].arrayPositions[j].salary);
                        arraySalary.sort();
                        minSalary = arraySalary[0];
                    }
                }
            }
            let answer = document.createElement('DIV');
            answer.className = 'divAnswer';
            answer.innerHTML = minSalary.toString();
            let button = document.createElement('DIV');
            button.className = 'buttonOk';
            button.innerHTML = 'OK';
            if (workSpase) {
                workSpase.appendChild(answer);
                workSpase.appendChild(button);
            }
            button.addEventListener('click', function () {
                selectDepart.remove();
                answer.remove();
                button.remove();
                let select = document.getElementById('choose');
                if (select) {
                    (select as HTMLSelectElement).value = 'Выбрать рассчет';
                }
            });
        });
        return minSalary;
    }

    getMaxSalary() {
        let selectDepart = document.createElement('SELECT') as HTMLSelectElement;
        selectDepart.className = 'select';
        let workSpase = document.getElementById('workSpace');
        if (workSpase) {
            workSpase.appendChild(selectDepart);
        }
        let versionDepart = document.createElement('OPTION');
        versionDepart.innerHTML = 'Выбрать отдел';
        selectDepart.appendChild(versionDepart);
        let arrayDepartments = this.getArrayDepartments();
        for (let i = 0; i < arrayDepartments.length; i++) {
            let chooseDepartment = document.createElement('OPTION');
            chooseDepartment.innerHTML = arrayDepartments[i].title;
            selectDepart.appendChild(chooseDepartment);
        }
        let arraySalary: number[] = [];
        let maxSalary = 0;
        selectDepart.addEventListener('change', function () {
            for (let i = 0; i < arrayDepartments.length; i++) {
                if (arrayDepartments[i].title === selectDepart.value) {
                    for (let j = 0; j < arrayDepartments[i].arrayPositions.length; j++) {
                        arraySalary.push(arrayDepartments[i].arrayPositions[j].salary);
                        arraySalary.sort();
                        maxSalary = arraySalary[arraySalary.length - 1];
                    }
                }
            }
            let answer = document.createElement('DIV');
            answer.className = 'divAnswer';
            answer.innerHTML = maxSalary.toString();
            if (workSpase) {
                workSpase.appendChild(answer);
            }
            let button = document.createElement('DIV');
            button.className = 'buttonOk';
            button.innerHTML = 'OK';
            if (workSpase) {
                workSpase.appendChild(button);
            }
            button.addEventListener('click', function () {
                selectDepart.remove();
                answer.remove();
                button.remove();
                let select = document.getElementById('choose');
                if (select) {
                    (select as HTMLSelectElement).value = 'Выбрать рассчет';
                }
            });
        });
        return maxSalary;
    }

    getAmountDismiss() {
        let selectDepart = document.createElement('SELECT') as HTMLSelectElement;
        selectDepart.className = 'select';
        let workSpase = document.getElementById('workSpace');
        if (workSpase) {
            workSpase.appendChild(selectDepart);
        }
        let versionDepart = document.createElement('OPTION');
        versionDepart.innerHTML = 'Выбрать отдел';
        selectDepart.appendChild(versionDepart);
        let arrayDepartments = this.getArrayDepartments();
        for (let i = 0; i < arrayDepartments.length; i++) {
            let chooseDepartment = document.createElement('OPTION');
            chooseDepartment.innerHTML = arrayDepartments[i].title;
            selectDepart.appendChild(chooseDepartment);
        }
        let counter = 0;
        selectDepart.addEventListener('change', function () {
            for (let i = 0; i < arrayDepartments.length; i++) {
                if (arrayDepartments[i].title === selectDepart.value) {
                    for (let j = 0; j < arrayDepartments[i].arrayPositions.length; j++) {
                        for (let k = 0; k < arrayDepartments[i].arrayPositions[j].arrayEmployee.length; k++) {
                            if (arrayDepartments[i].arrayPositions[j].arrayEmployee[k].dismissalDate !== "") {
                                counter++;
                            }
                        }
                    }
                }
            }
            let answer = document.createElement('DIV');
            answer.className = 'divAnswer';
            answer.innerHTML = counter.toString();
            if (workSpase) {
                workSpase.appendChild(answer);
            }
            let button = document.createElement('DIV');
            button.className = 'buttonOk';
            button.innerHTML = 'OK';
            if (workSpase) {
                workSpase.appendChild(button);
            }
            button.addEventListener('click', function () {
                selectDepart.remove();
                answer.remove();
                button.remove();
                let select = document.getElementById('choose');
                if (select) {
                    (select as HTMLSelectElement).value = 'Выбрать рассчет';
                }
            });
        });
        return counter;
    }

    getDepartmentsWithoutHead() {
        let arrayDepartmentWithoutHead = [];
        let result: string ='';
        let counter = 0;
        let arrayDepartments = this.getArrayDepartments();
        for (let i = 0; i < arrayDepartments.length; i++) {
            for (let j = 0; j < arrayDepartments[i].arrayPositions.length; j++) {
                if (arrayDepartments[i].arrayPositions[j].head) {
                    counter++;
                    if(arrayDepartments[i].arrayPositions[j].arrayEmployee.length === 0){
                        arrayDepartmentWithoutHead.push(arrayDepartments[i].title);
                        if(counter === arrayDepartments.length){
                            result = arrayDepartmentWithoutHead.join(', ');
                        }
                    }
                    for (let k = 0; k < arrayDepartments[i].arrayPositions[j].arrayEmployee.length; k++) {
                        if (arrayDepartments[i].arrayPositions[j].arrayEmployee[k].dismissalDate !== "") {
                            arrayDepartmentWithoutHead.push(arrayDepartments[i].title);
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
        if (workSpase) {
            workSpase.appendChild(answer);
            workSpase.appendChild(button);
        }
        button.addEventListener('click', function () {
            answer.remove();
            button.remove();
            let select = document.getElementById('choose');
            if (select) {
                (select as HTMLSelectElement).value = 'Выбрать рассчет';
            }
        });
        return arrayDepartmentWithoutHead;
    }
}
