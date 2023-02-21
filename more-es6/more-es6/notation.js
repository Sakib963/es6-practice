const student = {
    name: 'kolim uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 80,
        chemistry: 88,
        english: 91,
    }
}

const marks = student.marks.math;
const math = student.marks.math;

const chemistry = student['marks']['chemistry'];
const subject = 'math';
const subjectMarks = student.marks[subject];
console.log(subjectMarks)

const className = 'class';
const class2 = student[className];
console.log(class2)