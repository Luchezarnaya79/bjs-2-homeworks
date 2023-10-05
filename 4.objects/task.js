"use strict"

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksAdd) {
  if (!this.marks){
        console.log('Студент был исключен');
        return;
  }
    this.marks.push(...marksAdd);
}

Student.prototype.getAverage = function () {
  if (!this.marks || !this.marks.length){
    return 0;
  }
  const sum = this.marks.reduce((acc, curr) => acc + curr);
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.exclude = reason;
}
