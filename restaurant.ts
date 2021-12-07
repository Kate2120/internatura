class DepartmentRestaurant {
    arrayPositions: Positions[] = [];
    departmentId;
    title;
    constructor(departmentId: number, title: string){
        this.departmentId = departmentId;
        this.title = title;
    }
    getArrayPositions(): Positions[]{
        return this.arrayPositions;
    }
}

function addDepartment(departmentId: number, title: string): DepartmentRestaurant{
    let department = new DepartmentRestaurant(departmentId, title);
    restaurant.push(department);
    return department;
}

class Positions {
    arrayEmployee: Employee[] = [];
    id;
    title;
    salary;
    head;
    constructor(department: DepartmentRestaurant, id: number, title: string, salary: number, head: boolean) {
        this.id = id;
        this.title = title;
        this.salary = salary;
        this.head = head;
    }
    salaryAmount(): number{
        return this.salary;
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
    getArrayEmployee(): Employee[] {
        return this.arrayEmployee;
    }
}

function addPositions(department: DepartmentRestaurant, id: number, title: string, salary: number, head: boolean): Positions {
    let position: Positions = new Positions(department, id, title, salary, head);
    for(let i: number = 0; i < restaurant.length; i++){
        console.log(restaurant[i]);
        if(restaurant[i].title === department){
            restaurant[i].arrayPositions.push(position);
        }
    }
    return position;
}


class Employee {
    employeeId;
    name;
    surname;
    age;
    employmentDate;
    position;
    dismissalDate;
    department;
    constructor(department: DepartmentRestaurant, position: Positions, employeeId: number, name: string, surname: string, age: number, employmentDate: Date, dismissalDate: string | Date) {
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

function addEmployee(department: DepartmentRestaurant, position: Positions, employeeId: number, name: string, surname: string, age: number, employmentDate: Date, dismissalDate: string | Date): Employee {
    let employer: Employee = new Employee(department, position, employeeId, name, surname, age, employmentDate, dismissalDate);
    for(let i: number = 0; i < restaurant.length; i++){

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


function allSalariesDepartment(department: DepartmentRestaurant): number{
    let sum: number = 0;
    for(let i = 0; i < restaurant.length; i++){
        if(restaurant[i].title === department){
            for(let j = 0; j < restaurant[i].arrayPositions.length; j++){
                sum += restaurant[i].arrayPositions[j].salaryAmount() * restaurant[i].arrayPositions[j].currentEmployee();
            }
        }
    }
    return sum;
}

function averageSalaryDepartment(department: DepartmentRestaurant): number{
    let sum: number = 0;
    let amountPositions: number = 0;
    for(let i: number = 0; i < restaurant.length; i++){
        if(restaurant[i].title === department){
            amountPositions = restaurant[i].arrayPositions.length;
            for(let j = 0; j < amountPositions; j++){
                sum += restaurant[i].arrayPositions[j].salaryAmount();
            }
        }
    }
    return sum/amountPositions;
}

function minSalaryDepartment(department: DepartmentRestaurant): number {
    let arraySalary: number[] = [];
    let minSalary: number = 0;
    for(let i: number = 0; i < restaurant.length; i++){
        if(restaurant[i].title === department){
            for(let j: number = 0; j < restaurant[i].arrayPositions.length; j++){
                arraySalary.push(restaurant[i].arrayPositions[j].salaryAmount())
                arraySalary.sort();
                minSalary = arraySalary[0];
            }
        }
    }
    return minSalary;
}

function maxSalaryDepartment(department: DepartmentRestaurant): number {
    let arraySalary: number[] = [];
    let minSalary: number = 0;
    for(let i: number = 0; i < restaurant.length; i++){
        if(restaurant[i].title === department){
            for(let j: number = 0; j < restaurant[i].arrayPositions.length; j++){
                arraySalary.push(restaurant[i].arrayPositions[j].salaryAmount())
                arraySalary.sort();
                minSalary = arraySalary[arraySalary.length - 1];
            }
        }
    }
    return minSalary;
}

function amountDissmissEmployee(department: DepartmentRestaurant): number{
    let currentArr: Employee[] = [];
    let counter: number = 0;
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

function departmentsWithoutHead(position: string): string[] {
    let arrayPosition: Positions[] = [];
    let arrEmployee: Employee[] = [];
    let arrayDepartmentWithoutHead: string[] = [];
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
