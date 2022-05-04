const Engineer = require("../lib/Engineer")

test("checks that manager data works", () => {
    const engineer = new Engineer("Dave", 69, "dave@gmail.com")
    expect(engineer).toEqual(expect.any(Object))
})

test("checks that name entry works", () => {
    const engineer = new Engineer("Dave", 69, "dave@gmail.com")

    expect(engineer.getName()).toEqual(expect.any(String))

})
test("checks that id entry works", () => {
    const engineer = new Engineer("Dave", 69, "dave@gmail.com")

    expect(engineer.getId()).toEqual(expect.any(String))

})
test("checks that email entry works", () => {
    const engineer = new Engineer("Dave", 69, "dave@gmail.com")

    expect(engineer.getEmail()).toEqual(expect.any(String))

})
test("checks that github entry works", () => {
    const engineer = new Engineer("Dave", 69, "dave@gmail.com", "petehodnefield")

    expect(engineer.github).toEqual(expect.any(String))

})
test("checks that getGitHub = gihub", () => {
    const engineer = new Engineer("Dave", 69, "dave@gmail.com", 'petehodnefield')

    expect(engineer.getGitHub()).toEqual("github: petehodnefield")
    console.log(engineer)

})
test("checks that getRole = Manager", () => {
    const engineer = new Engineer("Dave", 69, "dave@gmail.com", 'petehodnefield')

    expect(engineer.getRole()).toEqual("Engineer")
    console.log(engineer)

})
