// 3. Map Operations:
//  Create a map to store student names and their corresponding scores.
//  Write functions to add a student, remove a student, and get a student's score.
//  Demonstrate the usage of these functions.
const student=new Map();
function add(name,score){
    student.set(name,score)
    console.log(`student name : ${name}, student score : ${score}`)
}
function remove(name){
    if(student.has(name)){
        student.delete(name)
        console.log(`delete student ${name}`)
    }else{
        return "student not found"
    }
}
function studentscore(name){
    if(student.has(name)){
      return `student name ${name} : ${student.get(name)}`
    }
    else{
        return `student not found`
    }
}

add("Ram",10)
add("jodu",20)
add("shyam",40)
console.log(studentscore("jodu"))
remove("jodu")
console.log(studentscore("jodu"))