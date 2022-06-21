// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade. Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
    let grades = [];
    grades.push(s1, s2, s3);
    let total = 0;
    
    for (let i = 0; i < grades.length; i++){
      total += grades[i];
    }
    
    let avg = total / grades.length;
    
    if (avg >= 90 && avg <= 100){
      return 'A'
    }
    else if (avg >= 80 && avg < 90){
      return 'B'
    }
    else if (avg >= 70 && avg < 80){
      return 'C'
    }
    else if (avg >= 60 && avg < 70) {
      return 'D'
    } else {
      return 'F'
    }
  }
    