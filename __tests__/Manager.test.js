const Manager = require("../lib/Manager")

test("checks that manager data works", () => {
    const manager = new Manager("Dave", 69, "dave@gmail.com")
    console.table(manager)
    expect(manager).toEqual(expect.any(Object))
})

test("checks that name entry works", () => {
    const manager = new Manager("Dave", 69, "dave@gmail.com")

    expect(manager.getName()).toEqual(expect.any(String))

})
test("checks that id entry works", () => {
    const manager = new Manager("Dave", 69, "dave@gmail.com")

    expect(manager.getId()).toEqual(expect.any(String))

})
test("checks that email entry works", () => {
    const manager = new Manager("Dave", 69, "dave@gmail.com")

    expect(manager.getEmail()).toEqual(expect.any(String))

})
test("checks that officeNumber entry works", () => {
    const manager = new Manager("Dave", 69, "dave@gmail.com", 201)

    expect(manager.officeNumber).toEqual(expect.any(Number))

})
test("checks that getRole = Manager", () => {
    const manager = new Manager("Dave", 69, "dave@gmail.com", 201)

    expect(manager.getRole()).toEqual("Manager")
    console.log(manager)

})
