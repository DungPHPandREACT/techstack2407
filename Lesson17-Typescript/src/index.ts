// Bài tập 1:
// Tạo một hàm describePerson nhận đầu vào là các thông tin về một người(name, age, isStudent) và trả về chuỗi mô tả người đó.
// Hàm này sẽ sử dụng các kiểu dữ liệu cơ bản như string, number, và boolean.
// Ví dụ:
// Input: 'Dũng', 15, false
// Output: 'Dũng 15 tuổi và không phải là học sinh'

// function describePerson(name: string, age: number, isStudent: boolean): string {
//     return `${name} ${age} tuổi và ${isStudent ? '' : 'không phải '}là học sinh`;
// }
// console.log(describePerson('Dũng', 15, false));

// Bài tập 2:
// Viết một hàm sumArray nhận đầu vào là một mảng các số và trả về tổng của các phần tử trong mảng
// Ví dụ:
// Input: [1, 2, 3, 4, 5]
// Output: 15
// const sumArray = (numbers: number[]): number => {
//     let sum: number = 0;
//     for (let number of numbers) {
//         sum += number;
//     }

//     return sum;
// }
// console.log(sumArray([1, 2, 3, 4, 5]))

interface Greetable {
    greet(): void;
}

interface Company {
    findAddress(): void;
}

class Person implements Greetable, Company {
    public name: string;
    private age: number;
    protected email: string;

    constructor(nameInput: string, ageInput: number, emailInput: string) {
        this.name = nameInput;
        this.age = ageInput;
        this.email = emailInput
    }

    greet(): void {
        console.log('Cái này kế thừa từ interface')
    }

    findAddress(): void {
        console.log('Tìm địa chỉ')
    }

    greeting(): void {
        console.log(`Xin chào, tôi là ${this.name}`)
    }
}

class Employee extends Person {
    employeeId: number;

    constructor(nameInput: string, ageInput: number, emailInput: string, employeeIdInput: number) {
        super(nameInput, ageInput, emailInput);
        this.employeeId = employeeIdInput;
    }

    displayEmployeeInfo(): void {
        console.log(`Employee ID: ${this.employeeId}`)
        console.log(`Email: ${this.email}`)
    }
}

// let person = new Person('Merry', 20, 'mary@gmail.com');
// person.greeting()
// console.log(person.email);
// console.log(person.age);

let employee = new Employee('John', 20, 'mary@gmail.com', 1234);

employee.displayEmployeeInfo();