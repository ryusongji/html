let plusBtn = document.querySelector('#add')
let minusBtn = document.querySelector('#sub')
let gobBtn = document.querySelector('#multy')
let nanuBtn = document.querySelector('#divid')
let su1 = document.querySelector('#num1')
let su2 = document.querySelector('#num2')
let result = document.querySelector('#result')

plusBtn.onclick = plusFunc;
minusBtn.onclick = minusFunc;
gobBtn.onclick = gobFunc;
nanuBtn.onclick = nanuFunc;

function plusFunc () {
  let p_result = `덧셈 결과는 ${Number(su1.value)+Number(su2.value)}`;
  result.value = p_result;
}

function minusFunc () {
  let p_result = `뺼셈 결과는 ${Number(su1.value)-Number(su2.value)}`;
  result.value = p_result;
}

function gobFunc () {
  let p_result = `곱셈 결과는 ${Number(su1.value)*Number(su2.value)}`;
  console.log(p_result)
  result.value = p_result;
}

function nanuFunc () {
  let p_result = `나눗셈 결과는 ${Number(su1.value)/Number(su2.value)}`;
  result.value = p_result;
}