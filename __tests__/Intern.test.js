const Intern = require("../lib/Intern")

test("checks that manager data works", () => {
    const intern = new Intern("Dave", 69, "dave@gmail.com")
    expect(intern).toEqual(expect.any(Object))
})

test("checks that name entry works", () => {
    const intern = new Intern("Dave", 69, "dave@gmail.com")

    expect(intern.getName()).toEqual(expect.any(String))

})
test("checks that id entry works", () => {
    const intern = new Intern("Dave", 69, "dave@gmail.com")

    expect(intern.getId()).toEqual(expect.any(String))

})
test("checks that email entry works", () => {
    const intern = new Intern("Dave", 69, "dave@gmail.com")

    expect(intern.getEmail()).toEqual(expect.any(String))

})
test("checks that github entry works", () => {
    const intern = new Intern("Dave", 69, "dave@gmail.com", "petehodnefield")

    expect(intern.school).toEqual(expect.any(String))

})
test("checks that getSchool = school", () => {
    const intern = new Intern("Dave", 69, "dave@gmail.com", 'yale')

    expect(intern.getSchool()).toEqual("yale")
    console.log(intern)

})
test("checks that getRole = Intern", () => {
    const intern = new Intern("Dave", 69, "dave@gmail.com", 'yale')

    expect(intern.getRole()).toEqual("Intern")
    console.log(intern)

})
