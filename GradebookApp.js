/* A gradebook app. mini project showcasing the basics of JavaScript;
within 4 functions, with variables, conditionals and more.*/


function getAverage(scores) {   //This function gives the average score.//
    let sum = 0;
    for(let i = 0; i < scores.length; i++) {
      sum += scores[i];
    }
    let mean = sum / scores.length
    return mean
  
  }
  console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

  
  function getGrade(score) { //This function calculates the grade//
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }

  //Enter a score between (0) and (100) to get a Grade.//
  console.log(getGrade(96)); 
  console.log(getGrade(82));
  console.log(getGrade(56));

  /*A function allowing teachers to check if a student has a
  passing grade.  It returns 'true' if a student passed.*/
  function hasPassingGrade(score) {
    return getGrade(score) !== "F";
  }

  console.log(hasPassingGrade(100));
  console.log(hasPassingGrade(53));
  console.log(hasPassingGrade(87));


 //This function sends a message to the students.//
  function studentMsg(totalScores, studentScore) {
    if (getGrade(studentScore) !== "F") {
        return "Class average: " + getAverage(totalScores) + "." +
         " Your grade: " + getGrade(studentScore) + "." + " You passed the course.";
 }
 else {
    return "Class average: " + getAverage(totalScores) + "." +
     " Your grade: " + getGrade(studentScore) + "." + " You failed the course.";

 }

}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 100));