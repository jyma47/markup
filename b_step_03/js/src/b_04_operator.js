// b_04_operator.js

// 산술연산자 ( +, -, *, /, %, +=,-=,*=,/=, ++, -- )

var n = 10;
console.log(n, typeof(n) );

var plus = n + 10; 
console.log( plus );

var minus = n - 10; 
console.log(minus);

var multi = n * n; 
console.log( multi );

var avg = n / 3;
console.log( avg );

var other = n % 3;
console.log( other );

var parI = parseInt(avg);
console.log('나누었을때 몫:',  parI );

// ---------------------------

var textNum = 1004 + 'px';
var textPar = parseInt(textNum);
console.log( textPar, typeof textPar );

console.clear();

console.log('n: ', n);

n = n + 10;  // 변수 n에 기존에 가지고 있던 n의값 + 10을 재대입
console.log( 'n :', n );

n = n + 5;
console.log( 'n :', n );

n +=  10; // 자기자신에게 10을 추가하겠다
console.log( 'n :', n );

n -= 5;
console.log( 'n :', n );

n *= 5;
console.log( 'n :', n );

n /= 50;
console.log( 'n :', n );

n %= 2;
console.log( 'n :', n );

console.clear();
// -----------------------------------------

console.log('n:', n );

n += 1;
console.log('n:', n );

n += 1;
console.log('n:', n );

++n; // 무조건 1을 더한다
console.log('n:', n );

++n; // 무조건 1을 더한다
++n; // 무조건 1을 더한다
++n; // 무조건 1을 더한다
++n; // 무조건 1을 더한다
++n; // 무조건 1을 더한다
++n; // 무조건 1을 더한다  , 먼저 연산 후 결과를 저장
console.log('n:', n );

n++; // 무조건 1을 더한다 , 결과를 먼저 도출 후 연산
console.log('n:', n );
n++;
n++;
n++;
console.log('n:', n );
console.log('n:', n++ );
console.log('n:', n );

console.clear();
// -------------------------------------
console.log('n:', n );
n -= 1;
console.log('n:', n );
--n;
--n;
--n;
--n;
--n;
console.log('n:', n );
n--;
n--;
n--;
n--;
console.log('n:', n ); 
console.log('n:', n-- );
console.log('n:', n );

console.clear();
// -------------------------------------
// 비교 연산자 > (왼쪽값 비교 오른쪽값) 결과 true/false

var m = 30;
var rel = n <= m;
console.log('n:' + n , 'm:' + m, 'result:' + rel);

rel = n >= m;
console.log('n:' + n , 'm:' + m, 'result:' + rel);

var n2 = '4';
var nCk = n === n2;
console.log( n, n2, nCk );

var ck1 = true && false;
console.log( ck1 );

var ck2 = true || true;
console.log( ck2 );

console.clear();
// -------------------------------------
// 삼항연산자->    조건 ? true일때 결과 : false일때 결과 ;

var k = 20;
var kRel;

(k <= 10) ? kRel = '숫자가 10보다 큰 숫자' : kRel = '숫자가 10보다 작은 수' ;
console.log( kRel );

//---------------------------------------
// 버튼-> id="btn"
// 클릭? -> 이벤트 -> addEventListener('이벤트명');
// .content 내용을 변경 ->  ?.innerText = "내용"

// #btn -> getElementById('아이디이름')
// .content => getElementsByClassName('class이름);
var btn = document.getElementById('btn');
var par = document.getElementsByClassName('content')[0];
var i = 0;

btn.addEventListener('click', function(){
  i += 1;
  par.innerText = "내용이 변경," + i + "번 클릭";
})

// --------------------------------------