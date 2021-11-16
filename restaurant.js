class Restaurant {
    constructor(){

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
let departmentsRestaurant = new Restaurant();
let currentId;
function takeId(id){
    let currentId = id[0];
    id = id.filter((function(item) {
        return item !== id[0];
    }))
    console.log(id);
    return currentId;
}


class RestaurantDepartments {
positions = [];
    constructor(title) {
this.title = title;
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


function addDepartment(title){
    let department = new RestaurantDepartments(title);
    let key = title;
    departmentsRestaurant[key] = department;
    return departmentsRestaurant;
}

addDepartment("Кухня");
addDepartment("Зал");
addDepartment("Финансовый");

class Positions {
    employee = [];
    constructor(department, id, title, salary, head) {
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
    amountEmployee(){
        return employee.length;
    }
    positionSalary(){
        return this.salary;
    }

}




function addPositions(department, id, title, salary, head) {
   let position = new Positions(department, id, title, salary, head);
    departmentsRestaurant[department].positions.push(position);
return departmentsRestaurant;
}
addPositions("Кухня", 19, "Повар", 30000, false );
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
    constructor(position, employeeId, name, surname, age, employmentDate, dismissalDate) {
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
function addEmployee(employeeId, name, surname, age, employmentDate, position, dismissalDate) {
    let employer = new Employee(position, employeeId, name, surname, age, employmentDate, dismissalDate);
    for(let item of departmentsRestaurant){
        for(let element of item){
            for(let value of element) {
                if(value.title === position) {
                    value.employee.push(employer);
                }
            }
        }
    }
    return departmentsRestaurant;
}
addEmployee(111, 'Нина', 'Малыгина', 43, '20.07.2021', "Шеф-повар", "");
addEmployee(112, 'Ольга', 'Савенкова', 35, '03.06.2021', "Повар", "");
addEmployee(113, 'Марина', 'Митина', 25, '14.06.2021', "Помощник повара", "");
addEmployee(211, 'Александра', 'Синицина', 35, '20.06.2021', "Официант", "");
addEmployee(212, 'Ольга', 'Валова', 25, '14.06.2021', "Официант", "");
addEmployee(213, 'Антонина', 'Сидорова', 25, '21.06.2021', "Администратор", "");
addEmployee(214, 'Елизавета', 'Кукушкина', 31, '18.06.2021', "Уборщик", "");
addEmployee(215, 'Максим', 'Ветров', 28, '16.06.2021', "Охранник", "");
addEmployee(215, 'Петр', 'Соломатин', 24, '14.06.2021', "Охранник", '20.06.2021');
addEmployee(311, 'Елена', 'Попова', 28, '20.06.2021', "Главный бухгалтер", "" );
addEmployee(312, 'Ольга', 'Иванова', 29, '03.06.2021', "Бухгалтер", "" );
addEmployee(313, 'Марина', 'Петрова', 37, '11.06.2021', "Помощник бухгалтера", '14.06.2021' );
addEmployee(314, 'Наталия', 'Сачкова', 32, '15.06.2021', "Помощник бухгалтера", "" );
console.log(departmentsRestaurant);

function salary(argument) {
    let sum = 0;
    let allsalary = 0;
    for(let item of departmentsRestaurant) {
        console.log(item.positions);
        for (let i = 0; i < item.positions.length; i++) {
            console.log(item.positions[i].employee.length);
            console.log(item.positions[i].positionSalary());
            allsalary = item.positions[i].employee.length * item.positions[i].positionSalary()
            sum += allsalary;
        }
    }
    return sum;
}
salary(departmentsRestaurant);
