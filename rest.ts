interface HTMLElementTagNameMap{
    "DIV": HTMLElement;
    "BODY": HTMLElement;
    "H2": HTMLElement;

}
interface HTMLElement{
    value: string | number;
}
let restaurant: DepartmentRestaurant[] = [];
class DepartmentRestaurant {
    arrayPositions: Positions[] = [];
    departmentId;
    title;
    constructor(departmentId: number, title: string){
        this.departmentId = departmentId;
        this.title = title;
    }
    getArrayPositions(){
        return this.arrayPositions;
    }
}

class Positions {
    arrayEmployee: Employee[] = [];
    department: string;
    id: number;
    title: string;
    salary: number;
    head: boolean


    constructor(department: string, id: number, title: string, salary: number, head: boolean) {
        this.department = department;
        this.id = id;
        this.title = title;
        this.salary = salary;
        this.head = head;
    }
    salaryAmount(){
        return this.salary;
    }
    currentEmployee(){
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
    dismissalDate?: Date | string;
    department: string;
    employeeId: number;
    name: string;
    surname: string;
    age:number;
    employmentDate: Date;
    position: string;
    constructor(department: string, position: string, employeeId: number, name: string, surname: string, age:number, employmentDate: Date, dismissalDate: Date | string) {
        this.employeeId = employeeId;
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.employmentDate = employmentDate;
        this.position = position;
        this.dismissalDate = dismissalDate;
        this.department = department;
    }
    dismiss(){
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
    let divWorkSpace = document.createElement('DIV');
    divWorkSpace.className = 'workSpace';
    divWorkSpace.setAttribute('id', 'workSpace');
 
    let divContainer = document.getElementById('container');
       if(divContainer){
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
    optionCreateNewDepartment.setAttribute('value', "addDepartment");
    optionCreateNewDepartment.innerHTML = 'Добавить новый отдел';
    chooseAction.appendChild(optionCreateNewDepartment);
    let formAdd = document.createElement('FORM');
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
    selectСalculations.appendChild(amountWhithoutHead);
}
showFormAddEmployee();

function addDepartment() {
    let formAdd = document.getElementById('formAdd');
    let inputDepartmentId = document.createElement('INPUT');
    inputDepartmentId.setAttribute('id', 'inputDepartmentId');
    inputDepartmentId.setAttribute('placeholder', 'ID');
    inputDepartmentId.className = 'input';
    if(formAdd){
        formAdd.appendChild(inputDepartmentId);
    }
    
    let inputTitle = document.createElement('INPUT');
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
        let divDepartment = document.createElement('DIV');
        divDepartment.setAttribute('id', inputTitle.value);
        divDepartment.className = 'department';
        let divDepartmentsList = document.getElementById('divDepartmentsList');
        divDepartmentsList.appendChild(divDepartment);
        let h3 = document.createElement('H3');
        divDepartment.appendChild(h3);
        h3.innerHTML = inputTitle.value;
        let chooseAction = document.getElementById('chooseAction');
        let optionCreateNewPosition = document.getElementById('3');
        if (optionCreateNewPosition === null) {
            let optionCreateNewPosition = document.createElement('OPTION');
            optionCreateNewPosition.setAttribute('value', 'addPosition');
            optionCreateNewPosition.setAttribute('id', '3');
            optionCreateNewPosition.innerHTML = 'Добавить новую должность';
            chooseAction.appendChild(optionCreateNewPosition);
        }
        inputDepartmentId.remove();
        inputTitle.remove();
        buttonForm.remove();
        chooseAction.value = 'Выберите действие';
        restaurant.push(department);
        return department;
    })
}

function addPosition(){
    let formAdd = document.getElementById('formAdd');
    let chooseDepartment = document.createElement('SELECT');
    formAdd.appendChild(chooseDepartment);
    for(let element of restaurant){
        let optionInput = document.createElement('OPTION');
        optionInput.innerHTML = element.title;
        chooseDepartment.appendChild(optionInput);
    }
    let inputPositionId = document.createElement('INPUT');
    inputPositionId.setAttribute('id', 'inputPositionId');
    inputPositionId.setAttribute('placeholder', 'ID');
    inputPositionId.className = 'input';
    formAdd.appendChild(inputPositionId);
    let inputTitlePosition = document.createElement('INPUT');
    inputTitlePosition.setAttribute('placeholder', 'Название должности');
    inputTitlePosition.setAttribute('id', 'inputTitlePosition');
    inputTitlePosition.className = 'input';
    formAdd.appendChild(inputTitlePosition);
    let inputSalary = document.createElement('INPUT');
    inputSalary.setAttribute('placeholder', 'Зарплата');
    inputSalary.setAttribute('id', 'inputSalary');
    inputSalary.className = 'input';
    formAdd.appendChild(inputSalary);
    let selectIsHead = document.createElement('SELECT');
    selectIsHead.className = 'input';
    let choise = document.createElement('OPTION');
    choise.innerHTML = 'Должность руководящая?';
    selectIsHead.appendChild(choise);
    let optionYes = document.createElement('OPTION');
    optionYes.innerHTML = 'да';
    optionYes.setAttribute('value', 'true');
    selectIsHead.appendChild(optionYes);
    let optionNo = document.createElement('OPTION');
    optionNo.innerHTML = 'нет';
    optionNo.setAttribute('value', 'false');
    selectIsHead.appendChild(optionNo);
    formAdd.appendChild(selectIsHead);
    let buttonForm = document.createElement('BUTTON');
    buttonForm.className = 'button';
    buttonForm.innerHTML = 'Добавить';
    formAdd.appendChild(buttonForm);
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
        divDepartment.appendChild(h4);
        let divCards = document.createElement('DIV');
        divCards.setAttribute('id', inputTitlePosition.value);
        divDepartment.appendChild(divCards);
        let chooseAction = document.getElementById('chooseAction');
        let optionCreateNewCustomer = document.getElementById('4');
        if(optionCreateNewCustomer === null){
            let optionCreateNewCustomer = document.createElement('OPTION');
            optionCreateNewCustomer.setAttribute('id', '4');
            optionCreateNewCustomer.setAttribute('value', 'addEmployee');
            optionCreateNewCustomer.innerHTML = 'Добавить нового сотрудника';
            chooseAction.appendChild(optionCreateNewCustomer);
        }
        chooseDepartment.remove();
        inputPositionId.remove();
        inputTitlePosition.remove();
        inputSalary.remove();
        selectIsHead.remove();
        buttonForm.remove();
        chooseAction.value = 'Выберите действие';
    })
}

function addEmployee(){
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
    formAdd.appendChild(chooseDepartment);
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
        formAdd.appendChild(choosePosition);

        choosePosition.addEventListener('change', function (){
            let inputEployeeId = document.createElement('INPUT');
            inputEployeeId.setAttribute('id', 'inputEployeeId');
            inputEployeeId.setAttribute('placeholder', 'ID');
            inputEployeeId.className = 'input';
            formAdd.appendChild(inputEployeeId);
            let inputNameEmployee = document.createElement('INPUT');
            inputNameEmployee.setAttribute('placeholder', 'Имя сотрудника');
            inputNameEmployee.setAttribute('id', 'inputNameEmployee');
            inputNameEmployee.className = 'input';
            formAdd.appendChild(inputNameEmployee);
            let inputSurnameEmployee = document.createElement('INPUT');
            inputSurnameEmployee.setAttribute('placeholder', 'Фамилия');
            inputSurnameEmployee.setAttribute('id', 'inputSurnameEmployee');
            inputSurnameEmployee.className = 'input';
            formAdd.appendChild(inputSurnameEmployee);
            let inputAgeEmployee = document.createElement('INPUT');
            inputAgeEmployee.setAttribute('placeholder', 'Возраст');
            inputAgeEmployee.setAttribute('id', 'inputAgeEmployee');
            inputAgeEmployee.className = 'input';
            formAdd.appendChild(inputAgeEmployee);
            let inputEmploymentDate = document.createElement('INPUT');
            inputEmploymentDate.setAttribute('placeholder', 'Дата принятия');
            inputEmploymentDate.setAttribute('type', 'date');
            inputEmploymentDate.className = 'input';
            formAdd.appendChild(inputEmploymentDate);
            let buttonForm = document.createElement('BUTTON');
            buttonForm.className = 'button';
            buttonForm.innerHTML = 'Добавить';
            formAdd.appendChild(buttonForm);
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
                let cardEmployer = document.createElement('DIV');
                cardEmployer.className = 'employerStyle';
                cardEmployer.setAttribute('id', inputEployeeId.value);
                divDepartment.appendChild(cardEmployer);
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
                if(optionCreateNewCustomer === null){
                    let optionCreateDeliteCustomer = document.createElement('OPTION');
                    optionCreateDeliteCustomer.setAttribute('value', 'dissmissEmployee');
                    optionCreateDeliteCustomer.setAttribute('id', '5');
                    optionCreateDeliteCustomer.innerHTML = 'Уволить сотрудника';
                    chooseAction.appendChild(optionCreateDeliteCustomer);
                }
                let optionEditCustomer = document.getElementById('6');
                if(optionEditCustomer === null){
                    let optionEditCustomer = document.createElement('OPTION');
                    optionEditCustomer.setAttribute('value', 'editEmployee');
                    optionEditCustomer.setAttribute('id', '6');
                    optionEditCustomer.innerHTML = 'Редактировать сотрудника';
                    chooseAction.appendChild(optionEditCustomer);
                }
                chooseDepartment.remove();
                choosePosition.remove();
                inputEployeeId.remove();
                inputNameEmployee.remove();
                inputSurnameEmployee.remove();
                inputAgeEmployee.remove();
                inputEmploymentDate.remove();
                buttonForm.remove();
                chooseAction.value = 'Выберите действие';
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
    formAdd.appendChild(chooseDepartment);
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
        formAdd.appendChild(choosePosition);
        choosePosition.addEventListener('change', function () {
            let inputEployeeId = document.createElement('INPUT');
            inputEployeeId.setAttribute('id', 'inputEployeeId');
            inputEployeeId.setAttribute('placeholder', 'ID');
            inputEployeeId.className = 'input';
            formAdd.appendChild(inputEployeeId);
            let inputDismissDate = document.createElement('INPUT');
            inputDismissDate.setAttribute('placeholder', 'Дата увольнения');
            inputDismissDate.setAttribute('type', 'date');
            inputDismissDate.className = 'input';
            formAdd.appendChild(inputDismissDate);
            let buttonForm = document.createElement('BUTTON');
            buttonForm.className = 'button';
            buttonForm.innerHTML = 'Уволить';
            formAdd.appendChild(buttonForm);
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
                divDepartment.remove();
                chooseDepartment.remove();
                choosePosition.remove();
                inputEployeeId.remove();
                inputDismissDate.remove();
                buttonForm.remove();
                chooseAction.value = 'Выберите действие';
            })

        })
    })
}

function editEmployee(){
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

    formAdd.appendChild(chooseDepartment);

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
        formAdd.appendChild(choosePosition);
        choosePosition.addEventListener('change', function () {
            let selectId = document.createElement('SELECT');
            formAdd.appendChild(selectId);
            let optionEpmty = document.createElement('OPTION');
            optionEpmty.innerHTML = 'Выбрать id';
            selectId.appendChild(optionEpmty);
            for (let item of restaurant){
                if(item.title === chooseDepartment.value){
                    for(let element of item.arrayPositions){
                        if(element.title === choosePosition.value){
                            for(let el of element.arrayEmployee){
                                let optionId = document.createElement('OPTION');
                                optionId.innerHTML = el.employeeId;
                                selectId.appendChild(optionId);
                            }
                        }
                    }
                }
            }

            selectId.addEventListener('change', function(){
                let nameEmpoyee;
                let surnameEmployee;
                let ageEmployee;
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
                let inputNameEmployee = document.createElement('INPUT');
                inputNameEmployee.value = nameEmpoyee;
                inputNameEmployee.className = 'input';
                formAdd.appendChild(inputNameEmployee);
                let inputSurnameEmployee = document.createElement('INPUT');
                inputSurnameEmployee.value = surnameEmployee;
                inputSurnameEmployee.className = 'input';
                formAdd.appendChild(inputSurnameEmployee);
                let inputAgeEmployee = document.createElement('INPUT');
                inputAgeEmployee.value = ageEmployee;
                inputAgeEmployee.className = 'input';
                formAdd.appendChild(inputAgeEmployee);
                let buttonForm = document.createElement('BUTTON');
                buttonForm.className = 'button';
                buttonForm.innerHTML = 'Подтвердить';
                formAdd.appendChild(buttonForm);
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
                    pName.innerHTML = inputNameEmployee.value;
                    pSurname.innerHTML = inputSurnameEmployee.value;
                    pAge.innerHTML = inputAgeEmployee.value;
                    chooseDepartment.remove();
                    choosePosition.remove();
                    selectId.remove();
                    inputNameEmployee.remove();
                    inputSurnameEmployee.remove();
                    inputAgeEmployee.remove();
                    buttonForm.remove();
                    chooseAction.value = 'Выберите действие';
                })
            })
        })
    })
}

function getSumAllSalaries(){
    let selectDepart = document.createElement('SELECT');
    selectDepart.className = 'select';
    let workSpase = document.getElementById('workSpace');
    workSpase.appendChild(selectDepart);
    let versionDepart = document.createElement('OPTION');
    versionDepart.innerHTML = 'Выбрать отдел';
    selectDepart.appendChild(versionDepart);
    for(let item of restaurant){
        let chooseDepartment = document.createElement('OPTION');
        chooseDepartment.innerHTML = item.title;
        selectDepart.appendChild(chooseDepartment);
    }
    selectDepart.addEventListener('change', function (){
        let sum = 0;
        for(let i = 0; i < restaurant.length; i++){
            if(restaurant[i].title === selectDepart.value){
                for(let j = 0; j < restaurant[i].arrayPositions.length; j++){
                    sum += restaurant[i].arrayPositions[j].salaryAmount() * restaurant[i].arrayPositions[j].currentEmployee();
                }
            }
        }
        let answer = document.createElement('DIV');
        answer.className = 'divAnswer';
        answer.innerHTML = sum;
        workSpase.appendChild(answer);
        let button = document.createElement('DIV');
        button.className = 'buttonOk';
        button.innerHTML = 'OK';
        workSpase.appendChild(button);
        button.addEventListener('click', function (){
            selectDepart.remove();
            answer.remove();
            button.remove();
            let select = document.getElementById('choose');
            select.value = 'Выбрать рассчет';
        })
    })
    return sum;
}

function getAvarageSalary(){
    let selectDepart = document.createElement('SELECT');
    selectDepart.className = 'select';
    let workSpase = document.getElementById('workSpace');
    workSpase.appendChild(selectDepart);
    let versionDepart = document.createElement('OPTION');
    versionDepart.innerHTML = 'Выбрать отдел';
    selectDepart.appendChild(versionDepart);
    for(let item of restaurant){
        let chooseDepartment = document.createElement('OPTION');
        chooseDepartment.innerHTML = item.title;
        selectDepart.appendChild(chooseDepartment);
    }
    selectDepart.addEventListener('change', function (){
        let sum = 0;
        let amountPositions = 0;
        for(let i = 0; i < restaurant.length; i++){
            if(restaurant[i].title === selectDepart.value){
                amountPositions = restaurant[i].arrayPositions.length;
                for(let j = 0; j < amountPositions; j++){
                    sum += restaurant[i].arrayPositions[j].salaryAmount();
                }
            }
        }
        let answer = document.createElement('DIV');
        answer.className = 'divAnswer';
        answer.innerHTML = sum/amountPositions;
        workSpase.appendChild(answer);
        let button = document.createElement('DIV');
        button.className = 'buttonOk';
        button.innerHTML = 'OK';
        workSpase.appendChild(button);
        button.addEventListener('click', function (){
            selectDepart.remove();
            answer.remove();
            button.remove();
            let select = document.getElementById('choose');
            select.value = 'Выбрать рассчет';
        })

    })
    return sum/amountPositions;
}

function getMinSalary(){
    let selectDepart = document.createElement('SELECT');
    selectDepart.className = 'select';
    let workSpase = document.getElementById('workSpace');
    workSpase.appendChild(selectDepart);
    let versionDepart = document.createElement('OPTION');
    versionDepart.innerHTML = 'Выбрать отдел';
    selectDepart.appendChild(versionDepart);
    for(let item of restaurant){
        let chooseDepartment = document.createElement('OPTION');
        chooseDepartment.innerHTML = item.title;
        selectDepart.appendChild(chooseDepartment);
    }
    selectDepart.addEventListener('change', function (){
        let arraySalary = [];
        let minSalary = 0;
        for(let i = 0; i < restaurant.length; i++){
            if(restaurant[i].title === selectDepart.value){
                for(let j = 0; j < restaurant[i].arrayPositions.length; j++){
                    arraySalary.push(restaurant[i].arrayPositions[j].salaryAmount())
                    arraySalary.sort();
                    minSalary = arraySalary[0];
                }
            }
        }
        let answer = document.createElement('DIV');
        answer.className = 'divAnswer';
        answer.innerHTML = minSalary;
        workSpase.appendChild(answer);
        let button = document.createElement('DIV');
        button.className = 'buttonOk';
        button.innerHTML = 'OK';
        workSpase.appendChild(button);
        button.addEventListener('click', function (){
            selectDepart.remove();
            answer.remove();
            button.remove();
            let select = document.getElementById('choose');
            select.value = 'Выбрать рассчет';
        })

    })
    return minSalary;
}

function getMaxSalary(){
    let selectDepart = document.createElement('SELECT');
    selectDepart.className = 'select';
    let workSpase = document.getElementById('workSpace');
    workSpase.appendChild(selectDepart);
    let versionDepart = document.createElement('OPTION');
    versionDepart.innerHTML = 'Выбрать отдел';
    selectDepart.appendChild(versionDepart);
    for(let item of restaurant){
        let chooseDepartment = document.createElement('OPTION');
        chooseDepartment.innerHTML = item.title;
        selectDepart.appendChild(chooseDepartment);
    }
    selectDepart.addEventListener('change', function (){
        let arraySalary = [];
        let maxSalary = 0;
        for(let i = 0; i < restaurant.length; i++){
            if(restaurant[i].title === selectDepart.value){
                for(let j = 0; j < restaurant[i].arrayPositions.length; j++){
                    arraySalary.push(restaurant[i].arrayPositions[j].salaryAmount())
                    arraySalary.sort();
                    maxSalary = arraySalary[arraySalary.length - 1];
                }
            }
        }
        let answer = document.createElement('DIV');
        answer.className = 'divAnswer';
        answer.innerHTML = maxSalary;
        workSpase.appendChild(answer);
        let button = document.createElement('DIV');
        button.className = 'buttonOk';
        button.innerHTML = 'OK';
        workSpase.appendChild(button);
        button.addEventListener('click', function (){
            selectDepart.remove();
            answer.remove();
            button.remove();
            let select = document.getElementById('choose');
            select.value = 'Выбрать рассчет';
        })

    })
    return maxSalary;
}

function getAmountDismiss(){
    let selectDepart = document.createElement('SELECT');
    selectDepart.className = 'select';
    let workSpase = document.getElementById('workSpace');
    workSpase.appendChild(selectDepart);
    let versionDepart = document.createElement('OPTION');
    versionDepart.innerHTML = 'Выбрать отдел';
    selectDepart.appendChild(versionDepart);
    for(let item of restaurant){
        let chooseDepartment = document.createElement('OPTION');
        chooseDepartment.innerHTML = item.title;
        selectDepart.appendChild(chooseDepartment);
    }
    selectDepart.addEventListener('change', function (){
        let currentArr = [];
        let counter = 0;
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
        let answer = document.createElement('DIV');
        answer.className = 'divAnswer';
        answer.innerHTML = counter;
        workSpase.appendChild(answer);
        let button = document.createElement('DIV');
        button.className = 'buttonOk';
        button.innerHTML = 'OK';
        workSpase.appendChild(button);
        button.addEventListener('click', function (){
            selectDepart.remove();
            answer.remove();
            button.remove();
            let select = document.getElementById('choose');
            select.value = 'Выбрать рассчет';
        })

    })
    return counter;
}

function getDepartmentsWithoutHead(){
    let arrayDepartmentWithoutHead = [];
    let result;
    for(let i = 0; i < restaurant.length; i++){
        for(let j = 0; j < restaurant[i].arrayPositions.length; j++){
            if(restaurant[i].arrayPositions[j].head){
                if(restaurant[i].arrayPositions[j].arrayEmployee.dismissalDate !== "" || restaurant[i].arrayPositions[j].arrayEmployee[k].length === '0'){
                    arrayDepartmentWithoutHead.push(restaurant[i].title);
                    result = arrayDepartmentWithoutHead.join(', ');
                }

            }
        }
    }
    let answer = document.createElement('DIV');
    answer.className = 'divAnswer';
    answer.innerHTML = result;
    let workSpase = document.getElementById('workSpace');
    workSpase.appendChild(answer);
    let button = document.createElement('DIV');
    button.className = 'buttonOk';
    button.innerHTML = 'OK';
    workSpase.appendChild(button);
    button.addEventListener('click', function (){
        answer.remove();
        button.remove();
        let select = document.getElementById('choose');
        select.value = 'Выбрать рассчет';
    })
    return arrayDepartmentWithoutHead;
}

let selects = document.querySelectorAll('.select');

selects.forEach(function(select){
    select.addEventListener('change', function(event){
        let act = event.target.value;
        window[act]();
    })
})
'
