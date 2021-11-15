class Department {
    constructor(departmentId, title, numberEmployees){
        this.departmentId = departmentId;
        this.title = title;
        this.numberEmployees = numberEmployees;
    }
  

}

let kitchen = new Department(1, "Кухня", 5);
/*console.log(kitchen);*/
let hall = new Department(2, "Зал", 7);
let financial = new Department(3, "Финансовый отдел", 2);
/*console.log(kitchen);
console.log(hall);
console.log(financial);*/

class Positions {
    constructor(id, title, salary, head) {
        this.id = id;
        this.title = title;
        this.salary = salary;
        this.head = head;
    }

}

let adminHall = new Positions(21, "Администратор", 30000, true);
let waiter = new Positions(22, "Официант", 20000, false);
let security = new Positions(23, "Охранник", 25000, false);
let cook = new Positions(11, "Повар", 30000, false);
let cookHelper = new Positions(12, "Повар", 15000,  false);
let cookHead = new Positions(13, "Шеф-повар", 30000,  true);
let cleaner = new Positions(24, "Уборщик", 12000, false);
let accountant = new Positions(32, "Бухгалтер", 12000,  false);
let accountantHead = new Positions(31, "Главный бухгалтер", 12000, true);
let accountantHelper = new Positions(33, "Помошник бухгалтера", 10000, false);

let departments = [
    {kitchen: {departmentId: 1, title: 'Кухня',  employees: [
                {employeeId: 111, name: 'Нина', surname: 'Малыгина', age: 43, employmentDate: '20.07.2021', position: cookHead, dismissalDate: null},
                {employeeId: 112, name: 'Ольга', surname: 'Савенкова', age: 35, employmentDate: '03.06.2021', position: cook, dismissalDate: null},
                {employeeId: 113, name: 'Марина', surname: 'Митина', age: 25, employmentDate: '14.06.2021', position: cookHelper, dismissalDate: null}]}},
    {hall:{departmentId: 2, title: 'Зал', employees: [
                {employeeId: 211, name: 'Александра', surname: 'Синицина', age: 21, employmentDate: '20.06.2021', position: waiter, dismissalDate: null},
                {employeeId: 212, name: 'Ольга', surname: 'Валова', age: 35, employmentDate: '20.06.2021', position: waiter, dismissalDate: null},
                {employeeId: 213, name: 'Антонина', surname: 'Сидорова', age: 25, employmentDate: '21.06.2021', position: adminHall, dismissalDate: null},
                {employeeId: 214, name: 'Елизавета', surname: 'Кукушкина', age: 31, employmentDate: '18.06.2021', position: cleaner, dismissalDate: null},
                {employeeId: 215, name: 'Максим', surname: 'Ветров', age: 28, employmentDate: '16.06.2021', position: security, dismissalDate: null},
                {employeeId: 215, name: 'Петр', surname: 'Соломатин', age: 24, employmentDate: '14.06.2021', position: security, dismissalDate: '20.06.2021'}]}},
    {financial: {departmentId: 3, title: 'Финансовый отдел', employees: [
                {employeeId: 311, name: 'Елена', surname: 'Попова', age: 28, employmentDate: '20.06.2021', position: accountantHead, dismissalDate: null},
                {employeeId: 312, name: 'Ольга', surname: 'Иванова', age: 28, employmentDate: '03.06.2021', position: accountant, dismissalDate: null},
                {employeeId: 313, name: 'Марина', surname: 'Петрова', age: 28, employmentDate: '11.06.2021', position: accountantHelper, dismissalDate: '14.06.2021'},
                {employeeId: 314, name: 'Наталия', surname: 'Сачкова', age: 28, employmentDate: '15.06.2021', position: accountantHelper, dismissalDate: null}]}}
  ];

console.log(departments);
function allSalaries(argument){
    for (let item of argument){

    let valueItem = Object.values(item);

let valueSecond = Object.values(valueItem);
        console.log(valueSecond);
        let valueTree = Object.values(financial);
        console.log(valueTree);
    }
}
console.log(allSalaries(departments));

let positionsAll = [
    adminHall,
    waiter,
    security,
    cook,
    cookHead,
    cleaner,
    accountant,
    accountantHead,
]

class Employee {
    constructor(employeeId, name, surname, age, employmentDate, position, dismissalDate) {
        this.employeeId = employeeId;
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.employmentDate = employmentDate;
        this.position = position;
        this.dismissalDate = dismissalDate;

    }
    getInfoPosition(position){
        for(let item of positionsAll) {
        if(this.position === item.title){
            return item;
        }
        }
    }

}

let employer = new Employee(30,"Елена", "Попова", 28, "20.06.2021", "Официант", null);

/*
console.log(employer);
console.log(employer.getInfoPosition("Официант"));
*/

let employees = [
    {employeeId: 30, name: 'Елена', surname: 'Попова', age: 28, employmentDate: '20.06.2021', position: waiter, dismissalDate: null},
    {employeeId: 31, name: 'Ольга', surname: 'Иванова', age: 28, employmentDate: '03.06.2021', position: waiter, dismissalDate: null},
    {employeeId: 32, name: 'Марина', surname: 'Петрова', age: 28, employmentDate: '14.06.2021', position: waiter, dismissalDate: null}
];
/*console.log(employees);*/

