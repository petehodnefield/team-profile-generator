const Employee = require("../lib/Employee")

test("checks that employee data works", () => {
    const employee = new Employee("Dave", 69, "dave@gmail.com")
    console.table(employee)
    expect(employee).toEqual(expect.any(Object))
})

test("checks that name entry works", () => {
    const employee = new Employee("Dave", 69, "dave@gmail.com")

    expect(employee.getName()).toEqual(expect.any(String))

})
test("checks that id entry works", () => {
    const employee = new Employee("Dave", 69, "dave@gmail.com")

    expect(employee.getId()).toEqual(expect.any(String))

})
test("checks that email entry works", () => {
    const employee = new Employee("Dave", 69, "dave@gmail.com")

    expect(employee.getEmail()).toEqual(expect.any(String))

})
test("checks that getRole = employee", () => {
    const employee = new Employee("Dave", 69, "dave@gmail.com")

    expect(employee.getRole()).toEqual("Employee")

})
