class Department {
    constructor(departmentId, title, arrayEmployees){
        this.departmentId = departmentId;
        this.title = title;
        this.arrayEmployees = arrayEmployees;
    }
    [Symbol.iterator] () {
        let objKeys = Object.keys(this);
        let limit = objKeys.length;
        let counter = 0;
        let thisDepartment = this;
        return {
            next() {
                if(counter < limit){
               return { done: false,
                    value: thisDepartment[objKeys[counter++]]
               }
                }
                return {
                done: true,
                    value: undefined
                }
            }
        }
    }


}

let kitchen = new Department(1, "Кухня", arrayKitchen = []);

let hall = new Department(2, "Зал", arrayHall = []);
let financial = new Department(3, "Финансовый отдел", arrayFinancial = []);


class Positions {
    constructor(id, title, salary, head) {
        this.id = id;
        this.title = title;
        this.salary = salary;
        this.head = head;
    }
    [Symbol.iterator] () {
        let objKeys = Object.keys(this);
        let limit = objKeys.length;
        let counter = 0;
        let thisPositions = this;
        return {
            next() {
                if(counter < limit){
                    return { done: false,
                        value: thisPositions[objKeys[counter++]]
                    }
                }
                return {
                    done: true,
                    value: undefined
                }
            }
        }
    }

}

let adminHall = new Positions(21, "Администратор", 30000, true);
let waiter = new Positions(22, "Официант", 20000, false);
let security = new Positions(23, "Охранник", 25000, false);
let cook = new Positions(11, "Повар", 30000, false);
let cookHelper = new Positions(12, "Помощник повара", 15000,  false);
let cookHead = new Positions(13, "Шеф-повар", 30000,  true);
let cleaner = new Positions(24, "Уборщик", 12000, false);
let accountant = new Positions(32, "Бухгалтер", 12000,  false);
let accountantHead = new Positions(31, "Главный бухгалтер", 12000, true);
let accountantHelper = new Positions(33, "Помощник бухгалтера", 10000, false);

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
    [Symbol.iterator] () {
        let objKeys = Object.keys(this);
        let limit = objKeys.length;
        let counter = 0;
        let thisEmployee = this;
        return {
            next() {
                if(counter < limit){
                    return { done: false,
                        value: thisEmployee[objKeys[counter++]]
                    }
                }
                return {
                    done: true,
                    value: undefined
                }
            }
        }
    }

}

function makeUsersArray(employeeId, name, surname, age, employmentDate, position, dismissalDate){

    if(position === "Шеф-повар" || position === "Повар" || position === "Помощник повара"){
switch(position){
    case "Шеф-повар": [position] = cookHead;
        break;
    case "Повар": [position] = cook;
        break;
    case "Помощник повара": [position] = cookHelper;
        break;
}
        let employer = new Employee(employeeId, name, surname, age, employmentDate, position, dismissalDate);
        arrayKitchen.push(employer);

        return arrayKitchen;
    } else if(position === "Официант" || position === "Администратор" || position === "Уборщик" || position === "Охранник"){
        switch(position){
            case "Официант": [position] = waiter;
                break;
            case "Администратор": [position] = adminHall;
                break;
            case "Уборщик": [position] = cleaner;
                break;
            case "Охранник": [position] = security;
                break;
        }
        let employer = new Employee(employeeId, name, surname, age, employmentDate, position, dismissalDate);
        arrayHall.push(employer);

        return arrayHall;
    } else if(position === "Главный бухгалтер" || position === "Бухгалтер" || position === "Помощник бухгалтера"){
        switch(position){
            case "Главный бухгалтер": [position] = accountantHead;
                break;
            case "Бухгалтер": [position] = accountant;
                break;
            case "Помощник бухгалтера": [position] = accountantHelper;
                break;

        }

        let employer = new Employee(employeeId, name, surname, age, employmentDate, position, dismissalDate);
        arrayFinancial.push(employer);

        return arrayFinancial;
    }


}
makeUsersArray(111, 'Нина', 'Малыгина', 43, '20.07.2021', "Шеф-повар", "");
makeUsersArray(112, 'Ольга', 'Савенкова', 35, '03.06.2021', "Повар", "");
makeUsersArray(113, 'Марина', 'Митина', 25, '14.06.2021', "Помощник повара", "");
makeUsersArray(211, 'Александра', 'Синицина', 35, '20.06.2021', "Официант", "");
makeUsersArray(212, 'Ольга', 'Валова', 25, '14.06.2021', "Официант", "");
makeUsersArray(213, 'Антонина', 'Сидорова', 25, '21.06.2021', "Администратор", "");
makeUsersArray(214, 'Елизавета', 'Кукушкина', 31, '18.06.2021', "Уборщик", "");
makeUsersArray(215, 'Максим', 'Ветров', 28, '16.06.2021', "Охранник", "");
makeUsersArray(215, 'Петр', 'Соломатин', 24, '14.06.2021', "Охранник", '20.06.2021');
makeUsersArray(311, 'Елена', 'Попова', 28, '20.06.2021', "Главный бухгалтер", "" );
makeUsersArray(312, 'Ольга', 'Иванова', 29, '03.06.2021', "Бухгалтер", "" );
makeUsersArray(313, 'Марина', 'Петрова', 37, '11.06.2021', "Помощник бухгалтера", '14.06.2021' );
makeUsersArray(314, 'Наталия', 'Сачкова', 32, '15.06.2021', "Помощник бухгалтера", "" );

let departments = [kitchen,hall,financial];
console.log(departments);

function allSalaries(argument, sum) {
    console.log(argument);
    sum = sum || 0;
     if(typeof argument === 'object') {
        for(let element of argument){

            if(element.hasOwnProperty("salary")){
                sum += element.salary;

            }
            argument = element;
        }
         return allSalaries(argument, sum);
    }
    if(Array.isArray(argument)) {
      argument.forEach(function (item){
          argument = item;
          return allSalaries(argument, sum);
      })
    }
    return sum;
}
console.log(allSalaries(departments));

class A{
    data;
    constructor() {
        this,data = [];
    }

    add(item){
        if(!validItem(item)){
            throw new Error("item not valid");
        }

        this.push(item);
    }

}
