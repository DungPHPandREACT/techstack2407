"use strict";
// Bài tập 1:
// Tạo một hàm describePerson nhận đầu vào là các thông tin về một người(name, age, isStudent) và trả về chuỗi mô tả người đó.
// Hàm này sẽ sử dụng các kiểu dữ liệu cơ bản như string, number, và boolean.
// Ví dụ:
// Input: 'Dũng', 15, false
// Output: 'Dũng 15 tuổi và không phải là học sinh'
class Person {
    constructor(nameInput, ageInput, emailInput) {
        this.name = nameInput;
        this.age = ageInput;
        this.email = emailInput;
    }
    greet() {
        console.log('Cái này kế thừa từ interface');
    }
    findAddress() {
        console.log('Tìm địa chỉ');
    }
    greeting() {
        console.log(`Xin chào, tôi là ${this.name}`);
    }
}
class Employee extends Person {
    constructor(nameInput, ageInput, emailInput, employeeIdInput) {
        super(nameInput, ageInput, emailInput);
        this.employeeId = employeeIdInput;
    }
    displayEmployeeInfo() {
        console.log(`Employee ID: ${this.employeeId}`);
        console.log(`Email: ${this.email}`);
    }
}
// let person = new Person('Merry', 20, 'mary@gmail.com');
// person.greeting()
// console.log(person.email);
// console.log(person.age);
let employee = new Employee('John', 20, 'mary@gmail.com', 1234);
employee.displayEmployeeInfo();
