import crypto from "crypto"
const token = crypto.randomBytes(64).toString("hex")
console.log(token)
const studentList = [
    { name: "Neza", age: 12, marks: 10 },
    { name: "Niel", age: 14, marks: 10 },
    { name: "Yvan", age: 15, marks: 20 }
]
const studentClippedList = studentList.map(function (student) {
    return { name: student.name, age: student.age }
}
)
const filteredList = studentList.filter((student) => {
    return student.age > 12
})
const occurentList = studentList.find((student) => {
    return student.age >= 12
})
console.log(studentClippedList)
console.log(filteredList)
console.log(occurentList)