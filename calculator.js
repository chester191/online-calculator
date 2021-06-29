let runningTotal = 0;
let outputString = "0";
let firstOperand = "0";
let secondOperand = "0";
let previousOperator;
const result = document.querySelector(".result");
document.querySelector('.keypad').addEventListener("click", function(event){
  buttonClick(event.target.innerText);
});

function buttonClick(value){
  if(isNaN(parseInt(value))){
    handleSymbol(value);
  }else{
    handleNumber(value);
  }
}
function handleNumber(value){
  if(outputString ==='0' || runningTotal !== 0){
    outputString = value;
  } 
  else{
    outputString += value;
  }
  refresh();
}
function handleSymbol(value){
  
  if(value === '='){
    if(secondOperand === undefined){
      secondOperand = runningTotal;
    }

    secondOperand = parseInt(outputString);
    if(previousOperator === 'x'){
      outputString = firstOperand*secondOperand;
    }
    if(previousOperator === '-'){
      outputString = firstOperand-secondOperand;
    }
    if(previousOperator === '+'){
      outputString = firstOperand+secondOperand;
    }
    else if(previousOperator ==="÷"){
      outputString = firstOperand/secondOperand;
    }
    firstOperand = undefined;
    secondOperand = undefined;
    runningTotal = outputString;
  }

  else{
    firstOperand = parseInt(outputString);
    outputString = "0";
    if(value ==='x'){
      previousOperator = "x";
    }
    else if(value ==='-'){
      previousOperator = "-";
    }
    else if(value ==='+'){
      previousOperator = "+";
    }
    else if(value ==='÷'){
      previousOperator = "÷";
    }
  }
  refresh();
}
function refresh(){
  result.innerText = outputString;
}

// var keys = document.getElementsByClassName("key");
// var outputString = "";
// for(let i = 0; i < keys.length; i++){
//   keys[i].addEventListener("click", function() {
//     alert(i);
//   });
// }
