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
    /*let divDepartment = document.createElement('DIV');
    divDepartment.className = 'department';
    divDepartment.setAttribute('id', 'divDepartment');
    divDepartmentsList.appendChild(divDepartment);
    let h3 = document.createElement('H3');
    divDepartment.appendChild(h3);*/
 /*   let h4 = document.createElement('H4');
    divDepartment.appendChild(h4);
    let cardsEmployee = document.createElement('DIV');
    cardsEmployee.className = 'cards';
    divDepartment.appendChild(cardsEmployee);*/
   /* let cardEmployer = document.createElement('DIV');
    cardEmployer.className = 'employerStyleNull';
    cardEmployer.setAttribute('id', 'cardEmployer');
    cardsEmployee.appendChild(cardEmployer);
    console.log(cardEmployer);
    let pName = document.createElement('P');
    pName.setAttribute('id','pName');
    cardEmployer.appendChild(pName);
    let pSurname = document.createElement('P');
    pSurname.setAttribute('id','pSurname');
    cardEmployer.appendChild(pSurname);
    let pAge = document.createElement('P');
    pAge.setAttribute('id', 'pAge');
    cardEmployer.appendChild(pAge);
    let pEmploymentDate = document.createElement('P');
    pEmploymentDate.setAttribute('id', 'pEmploymentDate');
    cardEmployer.appendChild(pEmploymentDate);
    let pDismissalDate = document.createElement('P');
    pDismissalDate.setAttribute('id', 'pDismissalDate');
    cardEmployer.appendChild(pDismissalDate);
    let button = document.createElement('DIV');
    button.className = 'buttonNull';
    button.setAttribute('id', 'button');
    cardEmployer.appendChild(button);*/

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
    let chooseAction = document.createElement('select');
    chooseAction.setAttribute('id', 'chooseAction');
    chooseAction.className = 'select';
    divWorkSpace.appendChild(chooseAction);
    let optionSelectAction = document.createElement('option');
    optionSelectAction.setAttribute('id', '');
    optionSelectAction.innerHTML = 'Выберите действие';
    chooseAction.appendChild(optionSelectAction);
   /* let optionCreateNewCustomer = document.createElement('option');
    optionCreateNewCustomer.setAttribute('id', '1');
    optionCreateNewCustomer.innerHTML = 'Добавить нового сотрудника';
    chooseAction.appendChild(optionCreateNewCustomer);*/
    let optionCreateNewDepartment = document.createElement('option');
    optionCreateNewDepartment.setAttribute('id', '2');
    optionCreateNewDepartment.innerHTML = 'Добавить новый отдел';
    chooseAction.appendChild(optionCreateNewDepartment);
   /* let optionCreateNewPosition = document.createElement('option');
    optionCreateNewPosition.setAttribute('id', '3');
    optionCreateNewPosition.innerHTML = 'Добавить новую должность';
    chooseAction.appendChild(optionCreateNewPosition);*/
    let formAdd = document.createElement('FORM');
    formAdd.setAttribute('id', 'formAdd');
    formAdd.setAttribute('onsubmit', 'return false');
    divWorkSpace.appendChild(formAdd);
}
showFormAddEmployee();
/*let cardEmployer = document.getElementById('cardEmployer');
cardEmployer.className = 'employerStyle';
button.className = 'button';
button.innerHTML = 'Редактировать'
console.log(cardEmployer);*/
let chooseAction = document.querySelector('select');
chooseAction.addEventListener('change', function (){
console.log(chooseAction);

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
        let buttonForm = document.createElement('button');
        buttonForm.className = 'button';
        buttonForm.innerHTML = 'Добавить';
        formAdd.appendChild(buttonForm);
        buttonForm.addEventListener('click', function () {
            let department = new DepartmentRestaurant(inputDepartmentId.value, inputTitle.value);
            let divDepartment = document.createElement('DIV');
            divDepartment.setAttribute('id', inputTitle.value);
            console.log(divDepartment);
            divDepartment.className = 'department';
            let divDepartmentsList = document.getElementById('divDepartmentsList');
            divDepartmentsList.appendChild(divDepartment);
            let h3 = document.createElement('H3');
            divDepartment.appendChild(h3);
            h3.innerHTML = inputTitle.value;
            let chooseAction = document.getElementById('chooseAction');
            let optionCreateNewPosition = document.getElementById('3');
            console.log(optionCreateNewPosition);
            if(optionCreateNewPosition === null){
            let optionCreateNewPosition = document.createElement('option');
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
        console.log(restaurant);
        let chooseDepartment = document.createElement('select');
        formAdd.appendChild(chooseDepartment);
        for(let element of restaurant){
            let optionInput = document.createElement('option');
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
        /*let inputIsHead = document.createElement('INPUT');
        inputIsHead.setAttribute('placeholder', 'Руководящая должность? да/нет');
        inputIsHead.setAttribute('id', 'inputIsHead');
        inputIsHead.className = 'input';
        formAdd.appendChild(inputIsHead);*/
        let buttonForm = document.createElement('button');
        buttonForm.className = 'button';
        buttonForm.innerHTML = 'Добавить';
        formAdd.appendChild(buttonForm);
        buttonForm.addEventListener('click', function (){
           /* let head;
            if (inputIsHead.value === 'да'){
                head = true;
            }
            head = false;*/
            let position = new Positions(chooseDepartment.value, inputPositionId.value, inputTitlePosition.value, inputSalary.value, selectIsHead.value);
                for(let item of restaurant){
                    if(item.title === chooseDepartment.value){
                        item.arrayPositions.push(position);
                    }
                }
            let divDepartment = document.getElementById(chooseDepartment.value);
                let h4 = document.createElement('H4');
            h4.innerHTML = inputTitlePosition.value;
            /*h4.setAttribute('id', inputTitlePosition.value);*/
            divDepartment.appendChild(h4);
            let divCards = document.createElement('DIV');
            divCards.setAttribute('id', inputTitlePosition.value);
            divDepartment.appendChild(divCards);
            let chooseAction = document.getElementById('chooseAction');
            let optionCreateNewCustomer = document.getElementById('4');
            if(optionCreateNewCustomer === null){
            let optionCreateNewCustomer = document.createElement('option');
            optionCreateNewCustomer.setAttribute('id', '4');
            optionCreateNewCustomer.innerHTML = 'Добавить нового сотрудника';
            chooseAction.appendChild(optionCreateNewCustomer);
            };
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
        let chooseDepartment = document.createElement('select');
        let optionInput = document.createElement('option');
        optionInput.innerHTML = 'Выбрать отдел';
        chooseDepartment.appendChild(optionInput);
        for(let element of restaurant){
            console.log(element);
            let optionInput = document.createElement('option');
            optionInput.innerHTML = element.title;
            chooseDepartment.appendChild(optionInput);
        }

        formAdd.appendChild(chooseDepartment);

        chooseDepartment.addEventListener('change', function (){
            let choosePosition = document.createElement('select');
            let optionInputPosition = document.createElement('option');
            optionInputPosition.innerHTML = 'Выбрать должность';
            optionInput.innerHTML = 'Выбрать отдел';
            choosePosition.appendChild(optionInputPosition);
            for(let element of restaurant){
                if(element.title === chooseDepartment.value){
            for(let item of element.arrayPositions){
                console.log(item);
                let optionInputPosition = document.createElement('option');
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
                let buttonForm = document.createElement('button');
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
                    /*cardEmployer.setAttribute('id', inputEployeeId.value);*/
                    divDepartment.appendChild(cardEmployer);
                    let pName = document.createElement('P');
                    pName.innerHTML = inputNameEmployee.value;
                    cardEmployer.appendChild(pName);
                    let pSurname = document.createElement('P');
                    pSurname.innerHTML = inputSurnameEmployee.value;
                    cardEmployer.appendChild(pSurname);
                    let pAge = document.createElement('P');
                    pAge.innerHTML = inputAgeEmployee.value;
                    cardEmployer.appendChild(pAge);
                    let pEmploymentDate = document.createElement('P');
                    pEmploymentDate.innerHTML = inputEmploymentDate.value;
                    cardEmployer.appendChild(pEmploymentDate);
                    let button = document.createElement('DIV');
                    button.innerHTML = 'Редактировать';
                    button.setAttribute('id', inputEployeeId.value);
                    button.className = 'redact';
                    cardEmployer.appendChild(button);
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

})
/*let buttonArray = document.querySelector('div');
console.log(buttonArray);
buttonArray.forEach(div => div.addEventListener('click', function (){
    let formAdd = document.querySelector('form');
    let inputNameEmployee = document.createElement('INPUT');
    inputNameEmployee.innerHTML = this.pName;
    inputNameEmployee.className = 'input';
    formAdd.appendChild(inputNameEmployee);
    /!*let inputSurnameEmployee = document.createElement('INPUT');
    inputSurnameEmployee.setAttribute('placeholder', 'Фамилия');
    inputSurnameEmployee.setAttribute('id', 'inputSurnameEmployee');
    inputSurnameEmployee.className = 'input';
    formAdd.appendChild(inputSurnameEmployee);
    let inputAgeEmployee = document.createElement('INPUT');
    inputAgeEmployee.setAttribute('placeholder', 'Возраст');
    inputAgeEmployee.setAttribute('id', 'inputAgeEmployee');
    inputAgeEmployee.className = 'input';
    formAdd.appendChild(inputAgeEmployee);*!/
}));*/

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

    })
})
console.log(restaurant);
