


//Spread Operator 
let text =["a","b","c","d"]
console.log(...text);

//Destructuring
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

//Sample Hoc Functions Program
const sample = val => val * (val/100);
const sampleHocFunc = (data,fn)=>{
  let d = data*3;
  return fn(d);
}
let da = sampleHocFunc(4,sample);
console.log(da);

//ArrayManupulation
const arrayMannupulations = () =>{
let colors = ['green', 'yellow', 'blue'];
console.log(colors.toString()); // green,yellow,blue
console.log(colors.join('-')); // green-yellow-blue
let firstNumbers = [1, 2, 3];
let secondNumbers = [4, 5, 6];
let merged = firstNumbers.concat(secondNumbers);
console.log(merged); // [1, 2, 3, 4, 5, 6]
let schedule = ['I', 'have', 'a', 'meeting', 'tommorrow'];
// removes 4 first elements and replace them with another
schedule.splice(0, 4, 'we', 'are', 'going', 'to', 'swim');
console.log(schedule);
let numbers = [1, 2, 3, 4]
numbers.slice(0, 3)
// returns [1, 2, 3]
console.log(numbers) // returns the original array
return null;
}

const Student = [
  {
    Studentid: "1",
    StudentName: "loki",
    Address: {'address1':"asdfswdf", 'pincode':600023 },
    city: "abc",
    marks: 100,
  },
  {
    Studentid: "2",
    StudentName: "sdfasfasdf",
    Address: {'address1':"asdfswdf", 'pincode':600023 },
    city: "abc",
    marks: 50,
  },
  {
    Studentid: "3",
    StudentName: "sdafasdfasfd",
    Address: {'address1' : "asdfswdf", 'pincode':600021 },
    city: "Chennai",
    marks: 50,
  },
  {
    Studentid: "4",
    StudentName: "dfsdafsadf",
    Address: {'address1' : "asdfswdf", 'pincode' : 600022 },
    city: "abc",
    marks: 60,
  },
  {
    Studentid: "5",
    StudentName: "asfdasfdasfas",
    Address: {address1 :"asdfswdf", 'pincode': 600025 },
    city: "abc",
    marks: 40,
  },
];
   
const filterFunctions = () => {
  const x = Student.sort((a, b) => a.StudentName - b.StudentName);
  console.log(x);
  const y = Student.sort((a, b) => a.StudentName - b.StudentName).sort(
    (a, b) => a.city - b.city
  );
  console.log(y);

  const z = Student.filter(
    (a) => (a.city != "Chennai") & (a.city != "Banglore")
  );
  console.log(z);
  const a = Student.map((d) => {
    return d.marks + 20;
  });
  console.log(a);
//   const s = a.filter(c => c.Address.pincode == 600023);
//   console.log(s)
//   return null;
// };
}
//Remove the Matched Values
const index =val=>Student.map((a,idx)=>
{
  if(a.StudentName==val)
  {
    Student.splice(idx,1)
  }
  return console.log(a);  
})
//Looping The Sequence of Number
const sendNumber = () => {
  const number = parseInt(prompt("Enter a positive number: "));
  for (let i = 0; i <= number; i++) {
    primeNumber(i);
  }
};

//Find The Prime Number For the Sequence
const primeNumber = (number) => {
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
};
//Printing the Array In a Corrected Format
const printArray = () => {
  var x = ["Lokesh", "Magi", "Prem", "Bertin"];
  let z = x.map((val, idx) => {
    if (idx % 2 == 0) {
      return `Er. ${val}`;
    } else {
      return `Dr. San${val}`;
    }
  });
  console.log(z);
  let y = z
    .filter((a) => a.startsWith("Dr"))
    .map((sdf) => {
      return `${y}-San`;
    });
  console.log(y);
  return null;
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
      return display(val1 * (val2 / 100));
    } else {
      return display(val1 * (val2 / 100));
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
