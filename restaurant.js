let restaurant = [];
class DepartmentRestaurant {
    arrayPositions = [];
    constructor(departmentId, title){
        this.departmentId = departmentId;
        this.title = title;
    }
    getArrayPositions(){
        return this.arrayPositions;
    }
}

class Positions {
    arrayEmployee = [];
    constructor(department, id, title, salary, head) {
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
    constructor(department, position, employeeId, name, surname, age, employmentDate, dismissalDate) {
        this.employeeId = employeeId;
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.employmentDate = employmentDate;
        this.position = position;
        this.dismissalDate = dismissalDate || '';
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
    body.appendChild(divContainer);
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
    divContainer.appendChild(divWorkSpace);
    let h2WorkSpace = document.createElement('H2');
    h2WorkSpace.className = 'headingH2';
    h2WorkSpace.innerHTML = 'Инструментарий';
    divWorkSpace.appendChild(h2WorkSpace);
    let chooseAction = document.createElement('SELECT');
    chooseAction.setAttribute('id', 'chooseAction');
    chooseAction.className = 'select';
    divWorkSpace.appendChild(chooseAction);
    let optionSelectAction = document.createElement('OPTION');
    optionSelectAction.setAttribute('id', '');
    optionSelectAction.innerHTML = 'Выберите действие';
    chooseAction.appendChild(optionSelectAction);
    let optionCreateNewDepartment = document.createElement('OPTION');
    optionCreateNewDepartment.setAttribute('id', '2');
    optionCreateNewDepartment.innerHTML = 'Добавить новый отдел';
    chooseAction.appendChild(optionCreateNewDepartment);
    let formAdd = document.createElement('FORM');
    formAdd.setAttribute('id', 'formAdd');
    formAdd.setAttribute('onsubmit', 'return false');
    divWorkSpace.appendChild(formAdd);
}
showFormAddEmployee();

let chooseAction = document.querySelector('select');
    if (chooseAction.value === 'Добавить новый отдел'){
        let formAdd = document.getElementById('formAdd');
        let inputDepartmentId = document.createElement('INPUT');
        inputDepartmentId.setAttribute('id', 'inputDepartmentId');
        inputDepartmentId.setAttribute('placeholder', 'ID');
        inputDepartmentId.className = 'input';
        formAdd.appendChild(inputDepartmentId);
        let inputTitle = document.createElement('INPUT');
        inputTitle.setAttribute('placeholder', 'Название отдела');
        inputTitle.setAttribute('id', 'inputTitle');
        inputTitle.className = 'input';
        formAdd.appendChild(inputTitle);
        let buttonForm = document.createElement('BUTTON');
        buttonForm.className = 'button';
        buttonForm.innerHTML = 'Добавить';
        formAdd.appendChild(buttonForm);
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
            if(optionCreateNewPosition === null){
                let optionCreateNewPosition = document.createElement('OPTION');
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
    } else if(chooseAction.value === 'Добавить новую должность'){
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
        selectIsHead.appendChild(optionYes);
        let optionNo = document.createElement('OPTION');
        optionNo.innerHTML = 'нет';
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

    } else if(chooseAction.value === 'Добавить нового сотрудника'){
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
                        optionCreateDeliteCustomer.setAttribute('id', '5');
                        optionCreateDeliteCustomer.innerHTML = 'Уволить сотрудника';
                        chooseAction.appendChild(optionCreateDeliteCustomer);
                    }
                    let optionEditCustomer = document.getElementById('6');
                    if(optionEditCustomer === null){
                        let optionEditCustomer = document.createElement('OPTION');
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
    } else if(chooseAction.value === 'Уволить сотрудника'){
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
                })

            })
        })
    } else if(chooseAction.value === 'Редактировать сотрудника'){
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

let workSpase = document.getElementById('workSpace');
let selectСalculations = document.createElement('SELECT')
selectСalculations.className = 'input';
workSpase.appendChild(selectСalculations);
let version = document.createElement('OPTION');
version.innerHTML = 'Выбрать рассчет';
selectСalculations.appendChild(version);
let sumAllSalary = document.createElement('OPTION');
sumAllSalary.innerHTML = 'Сумма всех зарплат по отделу';
selectСalculations.appendChild(sumAllSalary);
let avarageSalary = document.createElement('OPTION');
avarageSalary.innerHTML = 'Средняя зарплата по отделу';
selectСalculations.appendChild(avarageSalary);
let minSalary = document.createElement('OPTION');
minSalary.innerHTML = 'Минимальная зарплата по отделу';
selectСalculations.appendChild(minSalary);
let maxSalary = document.createElement('OPTION');
maxSalary.innerHTML = 'Максимальная зарплата по отделу';
selectСalculations.appendChild(maxSalary);
let amountDimiss = document.createElement('OPTION');
amountDimiss.innerHTML = 'Количество уволенных';
selectСalculations.appendChild(amountDimiss);
let amountWhithoutHead = document.createElement('OPTION');
amountWhithoutHead.innerHTML = 'Отделы без хеда';
selectСalculations.appendChild(amountWhithoutHead);
selectСalculations.addEventListener('change', function (){
    let selectDepart = document.createElement('SELECT');
    selectDepart.className = 'input';
    workSpase.appendChild(selectDepart);
    let versionDepart = document.createElement('OPTION');
    versionDepart.innerHTML = 'Выбрать отдел';
    selectDepart.appendChild(versionDepart);
    console.log(restaurant);
    for(let item of restaurant){
        console.log(item);
        let chooseDepartment = document.createElement('OPTION');
        chooseDepartment.innerHTML = item.title;
        selectDepart.appendChild(chooseDepartment);
    }
    selectDepart.addEventListener('change', function (){
        if(selectСalculations.value === 'Сумма всех зарплат по отделу'){
            let sum = 0;
            for(let i = 0; i < restaurant.length; i++){
                if(restaurant[i].title === selectDepart.value){
                    for(let j = 0; j < restaurant[i].arrayPositions.length; j++){
                        sum += restaurant[i].arrayPositions[j].salaryAmount() * restaurant[i].arrayPositions[j].currentEmployee();
                    }
                }
            }
            let answer = document.createElement('DIV');
            answer.className = 'input';
            answer.innerHTML = sum;
            workSpase.appendChild(answer);
        } else if(selectСalculations.value === 'Средняя зарплата по отделу'){
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
            answer.className = 'input';
            answer.innerHTML = sum/amountPositions;
            workSpase.appendChild(answer);


        }  else if(selectСalculations.value === 'Минимальная зарплата по отделу'){
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
            answer.className = 'input';
            answer.innerHTML = minSalary;
            workSpase.appendChild(answer);

        } else if(selectСalculations.value === 'Максимальная зарплата по отделу'){
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
            answer.className = 'input';
            answer.innerHTML = maxSalary;
            workSpase.appendChild(answer);
        } else if(selectСalculations.value === 'Количество уволенных') {
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
            answer.className = 'input';
            answer.innerHTML = counter;
            workSpase.appendChild(answer);
        } else if(selectСalculations.value === 'Отделы без хеда') {
            let arrayPosition = [];
            let arrEmployee = [];
            let arrayDepartmentWithoutHead = [];
            for(let i = 0; i < restaurant.length; i++){
                arrayPosition = restaurant[i].getArrayPositions();
                for(let j = 0; j < arrayPosition.length; j++){
                    arrEmployee = arrayPosition[j].getArrayEmployee();
                    if(arrayPosition[j].head){
                        for(let k = 0; k < arrEmployee.length; k++){
                            if(arrEmployee[k].dismiss() !== "" || arrEmployee.length === 0){
                                arrayDepartmentWithoutHead.push(restaurant[i].title);
                            }
                        }
                    }
                }
            }
            let answer = document.createElement('DIV');
            answer.className = 'input';
            answer.innerHTML = arrayDepartmentWithoutHead.join(', ');
            workSpase.appendChild(answer);
        }

    })

})
