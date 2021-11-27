/*let departmentsArray = [{title: '',},{title: '',}{title: '',}];*/
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

function addDepartment(departmentId, title){
    let department = new DepartmentRestaurant(departmentId, title);
    restaurant.push(department);
    return department;
}
addDepartment(1, "Кухня");
addDepartment(2, "Зал");
addDepartment(3, "Финансовый");

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

function addPositions(department, id, title, salary, head) {
    let position = new Positions(department, id, title, salary, head);
    for(let i = 0; i < restaurant.length; i++){
        console.log(restaurant[i]);
        if(restaurant[i].title === department){
            restaurant[i].arrayPositions.push(position);
        }
    }
    return position;
}

addPositions("Зал", 21, "Администратор", 30000, true);
addPositions("Зал", 22, "Официант", 20000, false);
addPositions("Зал", 23, "Охранник", 25000, false);
addPositions("Кухня", 11, "Повар", 30000, false);
addPositions("Кухня", 12, "Помощник повара", 15000,  false);
addPositions("Кухня", 13, "Шеф-повар", 30000,  true);
addPositions("Зал", 24, "Уборщик", 12000, false);
addPositions("Финансовый", 32, "Бухгалтер", 12000,  false);
addPositions("Финансовый", 31, "Главный бухгалтер", 12000, true);
addPositions("Финансовый", 33, "Помощник бухгалтера", 10000, false);

class Employee {
    constructor(department, position, employeeId, name, surname, age, employmentDate, dismissalDate) {
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

function addEmployee(department, position, employeeId, name, surname, age, employmentDate, dismissalDate) {
    let employer = new Employee(department, position, employeeId, name, surname, age, employmentDate, dismissalDate);
    dismissalDate = dismissalDate || '';
    employeeId = employeeId || 455;
    for(let i = 0; i < restaurant.length; i++){

        if(restaurant[i].title === department){
            console.log(restaurant[i]);
            for(let j = 0; j < restaurant[i].arrayPositions.length; j++){
                if(restaurant[i].arrayPositions[j].title === position){
                    restaurant[i].arrayPositions[j].arrayEmployee.push(employer);
                }
            }
        }
    }
    return employer;
}

addEmployee("Кухня", "Шеф-повар",111, 'Нина', 'Малыгина', 43, '20.07.2021', "");
addEmployee("Кухня", "Повар", 112, 'Ольга', 'Савенкова', 35, '03.06.2021', "");
addEmployee("Кухня", "Помощник повара", 113, 'Марина', 'Митина', 25, '14.06.2021', "");
addEmployee("Зал", "Официант", 211, 'Александра', 'Синицина', 35, '20.06.2021', "");
addEmployee("Зал", "Официант", 212, 'Ольга', 'Валова', 25, '14.06.2021', "");
addEmployee("Зал", "Администратор", 213, 'Антонина', 'Сидорова', 25, '21.06.2021', "");
addEmployee("Зал", "Уборщик", 214, 'Елизавета', 'Кукушкина', 31, '18.06.2021', "");
addEmployee("Зал", "Охранник", 215, 'Максим', 'Ветров', 28, '16.06.2021', "");
addEmployee("Зал", "Охранник", 215, 'Петр', 'Соломатин', 24, '14.06.2021', '20.06.2021');
addEmployee("Финансовый", "Главный бухгалтер", 311, 'Елена', 'Попова', 28, '20.06.2021', "15.05.2021" );
addEmployee("Финансовый", "Бухгалтер", 312, 'Ольга', 'Иванова', 29, '03.06.2021', "" );
addEmployee("Финансовый", "Помощник бухгалтера", 313, 'Марина', 'Петрова', 37, '11.06.2021', '14.06.2021' );
addEmployee("Финансовый", "Помощник бухгалтера", 314, 'Наталия', 'Сачкова', 32, '15.06.2021', "" );

function allSalariesDepartment(department){
    let sum = 0;
    for(let i = 0; i < restaurant.length; i++){
        if(restaurant[i].title === department){
            for(let j = 0; j < restaurant[i].arrayPositions.length; j++){
                sum += restaurant[i].arrayPositions[j].salaryAmount() * restaurant[i].arrayPositions[j].currentEmployee();
            }
        }
    }
    return sum;
}
allSalariesDepartment("Финансовый");

function averageSalaryDepartment(department){
    let sum = 0;
    let amountPositions = 0;
    for(let i = 0; i < restaurant.length; i++){
        if(restaurant[i].title === department){
            amountPositions = restaurant[i].arrayPositions.length;
            for(let j = 0; j < amountPositions; j++){
                sum += restaurant[i].arrayPositions[j].salaryAmount();
            }
        }
    }
    return sum/amountPositions;
}
averageSalaryDepartment("Финансовый");

function minSalaryDepartment(department) {
    let arraySalary = [];
    let minSalary = 0;
    for(let i = 0; i < restaurant.length; i++){
        if(restaurant[i].title === department){
            for(let j = 0; j < restaurant[i].arrayPositions.length; j++){
                arraySalary.push(restaurant[i].arrayPositions[j].salaryAmount())
                arraySalary.sort();
                minSalary = arraySalary[0];
            }
        }
    }
    return minSalary;
}
minSalaryDepartment("Финансовый");

function maxSalaryDepartment(department) {
    let arraySalary = [];
    let minSalary = 0;
    for(let i = 0; i < restaurant.length; i++){
        if(restaurant[i].title === department){
            for(let j = 0; j < restaurant[i].arrayPositions.length; j++){
                arraySalary.push(restaurant[i].arrayPositions[j].salaryAmount())
                arraySalary.sort();
                minSalary = arraySalary[arraySalary.length - 1];
            }
        }
    }
    return minSalary;
}
maxSalaryDepartment("Финансовый");

function amountDissmissEmployee(department){
    let currentArr = [];
    let counter = 0;
    for(let i = 0; i < restaurant.length; i++){
        if(restaurant[i].title === department){
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
    return counter;
}
amountDissmissEmployee("Финансовый");

function departmentsWithoutHead(position){
    let arrayPosition = [];
    let arrEmployee = [];
    let arrayDepartmentWithoutHead = [];
    for(let i = 0; i < restaurant.length; i++){
        arrayPosition = restaurant[i].getArrayPositions();
        for(let j = 0; j < arrayPosition.length; j++){
            arrEmployee = arrayPosition[j].getArrayEmployee();
            if(arrayPosition[j][position]){
                for(let k = 0; k < arrEmployee.length; k++){
                    if(arrEmployee[k].dismiss() !== "" || arrEmployee.length === 0){
                        arrayDepartmentWithoutHead.push(restaurant[i].title);
                    }
                }
            }
        }
    }
    return arrayDepartmentWithoutHead;
}
departmentsWithoutHead("head");



function createAllElements(){
    let divContainer = document.createElement('DIV');
    divContainer.className = 'container';
    let body = document.querySelector('body');
    body.appendChild(divContainer);
    let divDepartmentsList = document.createElement('DIV');
    divDepartmentsList.className = 'list';
    divContainer.appendChild(divDepartmentsList);
    let h2 = document.createElement('H2');
    h2.className = 'headingH2';
    h2.innerHTML = 'Отделы и сотрудники';
    divDepartmentsList.appendChild(h2);
    for(let element of restaurant){
        let divDepartment = document.createElement('DIV');
        divDepartment.className = 'department';
        divDepartmentsList.appendChild(divDepartment);
        let nameDepartment = element.title;
        console.log(nameDepartment);
        divDepartment.setAttribute('name',nameDepartment);
        let h3 = document.createElement('H3');
        h3.innerHTML = element.title;
        divDepartment.appendChild(h3);
        console.log(h3.innerHTML);

        for(let i = 0; i < element.arrayPositions.length; i++){
            let h4 = document.createElement('H4');
            h4.innerHTML = element.arrayPositions[i].title;
            divDepartment.appendChild(h4);
            let cardsEmployee = document.createElement('DIV');
            cardsEmployee.className = 'cards';
            divDepartment.appendChild(cardsEmployee);
            for(let j = 0; j < element.arrayPositions[i].arrayEmployee.length; j++){
                let cardEmployer = document.createElement('DIV');
                cardEmployer.className = 'employerStyle';
                cardsEmployee.appendChild(cardEmployer);
                let pName = document.createElement('P');
                pName.innerHTML = element.arrayPositions[i].arrayEmployee[j].name;
                cardEmployer.appendChild(pName);
                let pSurname = document.createElement('P');
                pSurname.innerHTML = element.arrayPositions[i].arrayEmployee[j].surname;
                cardEmployer.appendChild(pSurname);
                let pAge = document.createElement('P');
                pAge.innerHTML = element.arrayPositions[i].arrayEmployee[j].age;
                cardEmployer.appendChild(pAge);
                let pEmploymentDate = document.createElement('P');
                pEmploymentDate.innerHTML = element.arrayPositions[i].arrayEmployee[j].employmentDate;
                cardEmployer.appendChild(pEmploymentDate);
                let pDismissalDate = document.createElement('P');
                pDismissalDate.innerHTML = element.arrayPositions[i].arrayEmployee[j].dismissalDate;
                cardEmployer.appendChild(pDismissalDate);
                let button = document.createElement('DIV');
                button.setAttribute('id',element.arrayPositions[i].arrayEmployee[j].employeeId);
                button.innerHTML = 'Редактировать';
                button.className = 'button';
                cardEmployer.appendChild(button);
            }
        }

    }
    let divWorkSpace = document.createElement('DIV');
    divWorkSpace.className = 'workSpace';
    divContainer.appendChild(divWorkSpace);
    let h2WorkSpace = document.createElement('H2');
    h2WorkSpace.className = 'headingH2';
    h2WorkSpace.innerHTML = 'Инструментарий';
    divWorkSpace.appendChild(h2WorkSpace);
    let chooseAction = document.createElement('select');
    chooseAction.setAttribute('id', 'sectionId');
    chooseAction.setAttribute('name', 'Action');
    chooseAction.setAttribute('change', 'event)');

    chooseAction.className = 'select';
    divWorkSpace.appendChild(chooseAction);
    let optionSelectAction = document.createElement('option');
    optionSelectAction.setAttribute('id', '');
    optionSelectAction.innerHTML = 'Выберите действие';
    chooseAction.appendChild(optionSelectAction);
    let optionCreateNewCustomer = document.createElement('option');
    optionCreateNewCustomer.setAttribute('id', '1');
    optionCreateNewCustomer.innerHTML = 'Добавить нового сотрудника';
    chooseAction.appendChild(optionCreateNewCustomer);
    let optionCreateNewDepartment = document.createElement('option');
    optionCreateNewDepartment.setAttribute('id', '2');
    optionCreateNewDepartment.innerHTML = 'Добавить новый отдел';
    chooseAction.appendChild(optionCreateNewDepartment);
    let optionCreateNewPosition = document.createElement('option');
    optionCreateNewPosition.setAttribute('id', '3');
    optionCreateNewPosition.innerHTML = 'Добавить новую должность';
    chooseAction.appendChild(optionCreateNewPosition);
    chooseAction.addEventListener("change", function createForm(){
        console.log(chooseAction.value);
        if(chooseAction.value === 'Добавить нового сотрудника'){
            let formAddEmployee = document.createElement('FORM');
            divWorkSpace.appendChild(formAddEmployee);
            console.log(divWorkSpace);
            let inputName = document.createElement('INPUT');
            inputName.setAttribute('placeholder', 'Имя');
            inputName.setAttribute('type', 'text');
            inputName.className = 'input';
            formAddEmployee.appendChild(inputName);
            let inputSurname = document.createElement('INPUT');
            inputSurname.setAttribute('placeholder', 'Фамилия');
            inputSurname.setAttribute('type', 'text');
            inputSurname.className = 'input';
            formAddEmployee.appendChild(inputSurname);
            let inputAge = document.createElement('INPUT');
            inputAge.setAttribute('placeholder', 'Возраст');
            inputAge.setAttribute('type', 'text');
            inputAge.className = 'input';
            formAddEmployee.appendChild(inputAge);
            let inputPosition = document.createElement('INPUT');
            inputPosition.setAttribute('placeholder', 'Должность');
            inputPosition.setAttribute('type', 'text');
            inputPosition.className = 'input';
            formAddEmployee.appendChild(inputPosition);
            console.log(inputAge.value);
            let inputDateEmployment = document.createElement('INPUT');
            inputDateEmployment.setAttribute('placeholder', 'Дата принятия');
            inputDateEmployment.setAttribute('type', 'date');
            inputDateEmployment.className = 'input';
            formAddEmployee.appendChild(inputDateEmployment);
            let buttonForm = document.createElement('button');
            buttonForm.className = 'button';
            buttonForm.innerHTML = 'Добавить';
            formAddEmployee.appendChild(buttonForm);
            buttonForm.addEventListener("click", function add(){

                let cardsEmployee = document.getElementById("cards");
                let newcardEmployer = document.createElement('DIV');
                newcardEmployer.className = 'employerStyle';
                cardsEmployee.appendChild(newcardEmployer);
                let newpName = document.createElement('P');

                newpName.innerHTML = inputName.value;
                newcardEmployer.appendChild(newpName);
                alert(newpName);
                let newpSurname = document.createElement('P');
                newpSurname.innerHTML = inputSurname.value;
                newcardEmployer.appendChild(newpSurname);
                let newpAge = document.createElement('P');
                newpAge.innerHTML = inputAge.value;
                newcardEmployer.appendChild(newpAge);
                let newpEmploymentDate = document.createElement('P');
                newpEmploymentDate.innerHTML = inputDateEmployment.value;
                newcardEmployer.appendChild(newpEmploymentDate);
                let newpDismissalDate = document.createElement('P');
                newpDismissalDate.innerHTML = "";
                newcardEmployer.appendChild(newpDismissalDate);
            if(inputPosition.value === 'Повар'){
                let divDepartment = document.getElementsByClassName('department');
                for (let item of divDepartment){

                        let cardsEmployee = document.getElementsByClassName('cards');
                        console.log(item.h4.innerHTML);
                    if(item.h4.innerHTML === inputPosition.value){
                        cardsEmployee.appendChild(newcardEmployer)
                    }
                }
            }

            })
        }
    })
}
createAllElements();

console.log(restaurant);
