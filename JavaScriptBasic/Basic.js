//Looping The Sequence of Number
const sendNumber= () =>{
    const number = parseInt(prompt("Enter a positive number: "));
    for(let i=0;i<=number;i++)
    {
        primeNumber(i);
    }
}


//Find The Prime Number For the Sequence
const primeNumber = number =>{
// take input from the user
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}
}


//Printing the Array In a Corrected Format
const printArray = () => {
  // var x = ["Lokesh", "Magi", "Prem", "Bertin"];
  // const y = x.map((val, idx) => {
  //   if (idx % 2 == 1) {
  //     return `Dr. ${val}`;
  //   }
  // });
  // const z = x.map((val, idx) => {
  //   if (idx % 2 == 0) {
  //     return `Er. ${val}`;
  //   }
  // });
  // const xy = x.map((val, idx) => {
  //   if (idx % 2 == 1) {
  //     return `Dr. San${val}`;
  //   }
  // });
  // console.log(xy);
  // console.log(z);
  // console.log(y)
  // return null;
};

//for Printing Date in a Format
const printDate = () => {
  const now = new Date();
  var dateStringWithTime = moment(now).format("DD-MM-YYYY HH:MM:SS");
  document.getElementById("printDate").innerHTML = dateStringWithTime;

  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  return (document.getElementById("yesterdayDate").innerHTML = moment(
    yesterday
  ).format("DD-MM-YYYY HH:MM:SS"));
};

// For Checking the String
const checkString = () => {
  var val1 = document.getElementById("valueText").value;
  var val2 = parseInt(document.getElementById("valueText1").value);
  if (typeof val1 === "string") {
    alert(val1 + " is String");
  }
  if (typeof val2 === "number") {
    alert("Value Is Converted to String" + val2.toString());
  }
};

//For Calculations
const calc = (val) => {
  let val1 = parseInt(document.getElementById("txt1").value);
  let val2 = parseInt(document.getElementById("txt2").value);

  if (val == "add") display(val1 + val2);
  if (val == "sub") display(val1 - val2);
  if (val == "multiply") display(val1 * val2);
  if (val == "divide") display(val1 / val2);
  if (val == "modulus") display(val1 % val2);
  if (val == "percentage") {
    if (val2 >= 100) {
      display(val1 * (val2 / 100));
    } else {
      display(val1 * (val2 / 100));
    }
  }
  if (val == "cube") {
    if ((val1 != 0) | (val2 > 0)) {
      display(val1 * val1 * val1);
    } else if ((val2 != 0) | (val1 > 0)) {
      display(val2 * val2 * val2);
    } else {
      display("Enter Any One Value");
    }
  }
  if (val == "square") {
    if ((val1 != 0) | (val2 >= 0)) {
      display(val1 * val1);
    } else if ((val2 != 0) | (val1 >= 0)) {
      display(val2 * val2);
    } else {
      display("Enter Any One Value");
    }
  }
  return null;
};

const display = (val) => {
  return (document.getElementById("answer").innerHTML = val);
};
