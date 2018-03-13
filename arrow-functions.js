var fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Ryan', 'Stapleton'));
// type-specific
var gradeGenerator = function (grade) {
    if (grade >= 90) {
        return "A";
    }
    else if (grade >= 80 && grade < 90) {
        return "B";
    }
    else if (grade >= 70 && grade < 80) {
        return "C";
    }
    else if (grade >= 60 && grade < 70) {
        return "D";
    }
    else {
        return "F";
    }
};
console.log(gradeGenerator(23));
console.log(gradeGenerator(95));
console.log(gradeGenerator(84));
// F
// A
// B
