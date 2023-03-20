let firstNum = document.querySelector('.firstNum');
let secondNum = document.querySelector('.secondNum');
let result = document.querySelector('#result');
function add(){
  let first = Number(firstNum.value.trim());
  let second = Number(secondNum.value.trim());
  let sum = first + second;
  result.innerText = sum;
}

function sub(){
  let first = Number(firstNum.value.trim());
  let second = Number(secondNum.value.trim());
  let sum = first - second;
  result.innerText = sum;
}


function multiple(){
  let first = Number(firstNum.value.trim());
  let second = Number(secondNum.value.trim());
  let sum = first * second;
  result.innerText = sum;
}


function division(){
  let first = Number(firstNum.value.trim());
  let second = Number(secondNum.value.trim());
  let sum = first / second;
  result.innerText = sum;
}





