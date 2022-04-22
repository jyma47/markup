// b_09_function.js

// 함수
/* 
  function(){ 
    내용
   return 최종원하는 것
  }
*/

// 1. 함수 선언식
console.log( fn(100) );

function fn(a){
  var result = 10 * a;
  return result;
}

/*
console.log( fn(5) );
console.log( fn(6) );
console.log( fn(7) );
console.log( fn(8) );
console.log( fn(9) );
*/

// 2. 함수 표현식 : 호이스팅현상 x

var fn2 = function(a){
return a * 10;
};
console.log( fn2(5) );

console.clear();
// ----------------------------------------


var a = 10;
var func = function(){
a = 20;
return console.log( a = a+=10 );
};

console.log( a );
func();
console.log( a );

console.clear();
// -------------------------------------

var func2 = function(){
var b = 10;
return console.log( b );
}

func2();
// console.log( b );

console.clear();
// -------------------------------------

var btn = document.querySelector('.btn');
var btnCon = document.querySelector('.btn_content');
var arr = [ 'coffee', 'juice', 'fruits', 'ade' ];

var button = btn.querySelectorAll('button');
// console.log( button );
button.forEach(function(data, idx){
data.addEventListener('click', function(){
  // console.log( idx );
  btnCon.innerText = arr[idx];
});
});