// Small Student Management System 

// Array
let students = [];
// Object 

function addStudent(id , name, age, marks) {
    let s = { id, name, age, marks };
    students.push(s);
}

addStudent(1, "hi", 25, 88);
addStudent(2, "hi", 25, 98);
addStudent(3, "hi", 25, 78);
addStudent(4, "hi", 25, 75);
addStudent(5, "hi", 25, 90);

function displayStudents() {
    students.forEach(show => {
        console.log(show);
    })
}
// displayStudents();

function searchStudent(id) {
let result = students.find(i => i.id === id)
if(result) {
    console.log(result);
    }else{
        console.log("data does not exist")
    }
}
searchStudent(1);
searchStudent(8);

function calculateAverage(id) {
    let total = 0;
    students.forEach(i => {
    total += i.marks;
});
   console.log(total/ students.length)
}

calculateAverage()