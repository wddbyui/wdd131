let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed with in the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block
