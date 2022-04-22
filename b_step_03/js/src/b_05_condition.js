// b_05_condition.js

// 조건문: 삼항연산자/단항/다항

var rel = !false;
var text;
(rel) ? text = '참' : text = '거짓';
console.log( text );

// --------------------------------------------
// if 
/* 
if(조건식) {
  조건이 참인경우 수행
} else {
  조건이 거짓인 경우 수행
}
*/

var result;
if(rel) {
  result = '내용이 참입니다.';
} else {
  result = '내용이 거짓입니다.';
}
console.log( result );

/* 
  if(조건){
    조건이 참인경우 수행
  } else if(다른조건) {
    다른 조건의 내용이 참인경우 수행
  } else if(또 다른조건) {
    또다른 조건의 내용이 참인경우 수행
  } else {
    위 조건과 다른내용인 경우 수행
  }
*/

var n = 80;
var nResult;

if(n >= 90){
  nResult = '점수가 매우 높습니다. 잘하셨어요';
} else if (n >= 75) {
  nResult = '점수가 높은 편입니다. 고생하셨어요.';
} else if (n >= 60) {
  nResult = '점수가 보통입니다. 잘하셨지만 조금은 아쉽네요';
} else {
  nResult = '조금만 더 분발하셔야 겠어요. 화이팅!!!';
}
console.log( nResult );

console.clear();
// -----------------------------
// switch

/*
  switch (매개변수) {
    case 조건1:
      기능구현....
    break;
    
    case 조건2:
      기능 구현....
    break;
    default :
      위기능에 해당하지 않는 기능
  }
*/


var i = 2;
var iResult;
switch (i) {
  case 1:
    iResult = "숫자 1을 선택하였습니다.";
  break;
    
  case 2:
    iResult = "숫자 2을 선택하였습니다.";
  break;

  case 3:
    iResult = "숫자 3을 선택하였습니다.";
  break;

  default:
    iResult = "숫자 1,2,3 이외의 것을 선택하였습니다.";
}
console.log( iResult );

console.clear();
// -------------------------------------------
// 버튼을 클릭시 -> 이벤트발생('click',function(){})
// id="old" value값을 찾아오기
// 20보다 크거나 같으면 성인으로, 작으면 미성년자로 구분하여 처리

// NaN : 숫자의 개념이지만 수치로 표현이 불가능하다 라는 뜻

var btn = document.getElementsByTagName('button')[0];
var input = document.getElementById('old');
var p = document.getElementsByTagName('p')[1];
var span = p.getElementsByTagName('span')[0];


btn.addEventListener('click', function(){
  var inputData = parseInt(input.value);
  // console.log( typeof(inputData), !!inputData );

  if(inputData >= 20 && !!inputData){
    span.innerText = '성인입니다.';
  }else if(inputData >= 1 && !!inputData){
    span.innerText = '미성년자 입니다.';
  }else {
    span.innerText = '정확한 나이를 입력하세요.'
  }
});