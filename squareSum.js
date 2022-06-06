// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers) {
    let sum = 0;
    for (var i = 0, len = numbers.length; i < len; i++) {
      sum += numbers[i] * numbers[i];
    }
    console.log(sum);
    return sum;
  }
    
//   With forEach method
  function squareSumTwo(numArr) {
    let sum = 0;
    numArr.forEach(function(num) {
        sum += num * num
    });
    return sum;
  }

// With reduce method
function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
  }