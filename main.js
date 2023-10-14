// practice
//---------------------------1)

let age = 25;
if (true) {
  age = 30;
}
age; // ?

const myName = "John";
if (true) {
  const myName = "Jane";
}
myName; // john

//---------------------------2)

let number = 10;
const func1 = function () {
  let number = 15;

  if (true) {
    let number = 24;
  }

  return number;
};

func1(); // ?

const func2 = function (age) {
  age = 10;
  if (true) {
    let age = 24;
    age = 20;
  }

  return age;
};

func2(26); // 10

//---------------------------3)
let counter= 5;
const countDown = function () {
 
  if (counter>=0) {
    counter=counter-1;
  return counter;
  }
  else{
    return "count down is over"
  }
};

countDown(); // => 4
countDown(); // => 3
countDown(); // => 2
countDown(); // => 1
countDown(); // => 0
countDown(); // => "count down is over"
//---------------------------4)
const countUp = function () {
  counter=counter+1;
  return counter;};

countUp(); // => 4
countUp(); // => 5
countUp(); // => 6
countUp(); // => 7
countUp(); // => 8

//---------------------------5)

const resetCount = function (start) {
counter=start;
return "the count has been reset";
};

resetCount(0); // => "the count has been reset"
countUp(); // => 1
resetCount(10); // => "the count has been reset"
countUp(); // => 11

//---------------------------6)
let allList ="";
const addToList = function (toDo) {
  allList =allList +" "+toDo;
  return allList;
};

addToList("Eat"); // => 'Eat'
addToList("Play"); // => 'Eat Play'
addToList("Sleep"); // => 'Eat Play Sleep'
addToList("repeat"); // => 'Eat Play Sleep repeat'

//---------------------------7)

const createToDoList = function () {
  let allList ="";
return function (toDo) {
  allList =allList +" "+toDo;
  return allList;
};
};

const toDoListOne = createToDoList();
toDoListOne("Eat"); // => 'Eat'
toDoListOne("Play"); // => 'Eat Play'
toDoListOne("Sleep"); // => 'Eat Play Sleep'
toDoListOne("repeat"); // => 'Eat Play Sleep repeat'

//--------------------------------------------------8)
let currentBalance =0
const deposit = function (amount) {
  currentBalance =currentBalance+amount;
  return currentBalance
};

deposit(100); // => 100
deposit(50); // => 150

//----------------------------------------------------------9)

const withdraw = function (amount) {
  if (currentBalance-amount>=0) {
    
    currentBalance =currentBalance-amount;
    
    return currentBalance
  } else {
    return "insufficient funds, current balance: "+ currentBalance
  }
 
};

deposit(100); // => 100
deposit(50); // => 150
withdraw(70); // => 80
deposit(50); // => 130
withdraw(100); // => 30
withdraw(100); // => "insufficient funds, current balance: 30"

//---------------------------------------------------------10)

const createAccount = function (initialValue) {
  let CurrentBalance  = 0;
  
  CurrentBalance=initialValue;
  // this anonymous function is a closure function that has access to its own closure variable
  return function (transactionTypeand,amount) {
    if (transactionTypeand === "deposit") {
      CurrentBalance=CurrentBalance+amount
      return CurrentBalance
    } else if (transactionTypeand === "withdraw") {
      if (CurrentBalance-amount>=0) {
         CurrentBalance=CurrentBalance-amount
        return CurrentBalance

      }
      else{
return "insufficient funds, current balance: "+ CurrentBalance
      }
    }
  }
};

const accountOne = createAccount(0);
accountOne("withdraw", 10); // => "insufficient funds, current balance: 0"
accountOne("deposit", 50); // => 50
accountOne("deposit", 70); // => 120
accountOne("withdraw", 10); // => 110

const accountTwo = createAccount(500);
accountTwo("withdraw", 100); // => 400
accountTwo("withdraw", 100); // => 300
accountTwo("deposit", 50); // => 350
accountTwo("withdraw", 500); // => "insufficient funds, current balance: 350"

//-----------Advanced Practice
//---------------------------------------------------------1)

// every time the function is called it must check if the passed argument is the maximum number, minimum number, or
// both, and preserve the result for later invocations
let min =0
let max=0
const minMax = function (number) {
if (number>=max) {
  max=number
} else if (number<=min) {
  min=number
}
return "the maximum number is: "+max+" and the minimum number is "+min
}

minMax(5); // => "the maximum number is: 5 and the minimum number is 5"
minMax(2); // => "the maximum number is: 5 and the minimum number is 2"
minMax(3); // => "the maximum number is: 5 and the minimum number is 2"
minMax(7); // => "the maximum number is: 7 and the minimum number is 2"
minMax(0); // => "the maximum number is: 7 and the minimum number is 0"

//---------------------------------------------------------2)
let won=0
let lost=0
// use your previous solution for `randomMove`
const randomMove = function () {
  
x=Math.floor(Math.random() * 3);
if (x===1) {
    return "rock"    

} else if (x===2) {
    return "paper"    

} else {
    return "scissors"    

} 
};

const rockPaperScissors_v03 = function (move) {
  let rMove=randomMove()
  if (rMove==="rock"&& move==="paper") {
    lost++
  } else if (rMove==="rock"&& move==="scissors") {
    won++
  } else if (rMove==="paper"&& move==="scissors") {
    won++
  }else if (rMove==="paper"&& move==="rock") {
    lost++
  }else if (rMove==="scissors"&& move==="rock") {
    won++
  }else if (rMove==="scissors"&& move==="paper") {
    lost++
  }
  
  return "Won: "+won+", Lost:"+lost
};

rockPaperScissors_v03("rock"); // => "Won: 1, Lost:0"
rockPaperScissors_v03("rock"); // => "Won: 1, Lost:1"
rockPaperScissors_v03("paper"); // => "Won: 1, Lost:2"
//---------------------------------------------------------3)

const rockPaperScissors_v04 = function (move) {
  let rMove=randomMove()
  if (rMove==="rock"&& move==="paper") {
    lost++
  } else if (rMove==="rock"&& move==="scissors") {
    won++
  } else if (rMove==="paper"&& move==="scissors") {
    won++
  }else if (rMove==="paper"&& move==="rock") {
    lost++
  }else if (rMove==="scissors"&& move==="rock") {
    won++
  }else if (rMove==="scissors"&& move==="paper") {
    lost++
  }
  if (won===3) {
    won=0
  }
  if (lost===3) {
    lost=0
  }
  return "Won: "+won+", Lost:"+lost
};

rockPaperScissors_v04("rock"); // => "Won: 1, Lost:0"
rockPaperScissors_v04("rock"); // => "Won: 1, Lost:1"
rockPaperScissors_v04("paper"); // => "Won: 1, Lost:2"


//---------------------------------------------------------4)

const rockPaperScissors_v05 = function (move, reset) {
  let rMove=randomMove()
  if (reset===true) {
    won=0
    lost=0
  }
  if (rMove==="rock"&& move==="paper") {
    lost++
  } else if (rMove==="rock"&& move==="scissors") {
    won++
  } else if (rMove==="paper"&& move==="scissors") {
    won++
  }else if (rMove==="paper"&& move==="rock") {
    lost++
  }else if (rMove==="scissors"&& move==="rock") {
    won++
  }else if (rMove==="scissors"&& move==="paper") {
    lost++
  }
  if (won===3) {
    won=0
  }
  if (lost===3) {
    lost=0
  }
  return "Won: "+won+", Lost:"+lost
};

rockPaperScissors_v05("rock"); // => "Won: 1, Lost:0"
rockPaperScissors_v05("", true); // => "the game has been reset"
rockPaperScissors_v05("scissors"); // => "Won: 0, Lost:1"









