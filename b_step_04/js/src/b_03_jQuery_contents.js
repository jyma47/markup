// b_03_jQuery_contents.js
(function($){
  
  // var exw = document.getElementsByClassName('ex_wrap')[0];
  // exw.innerText = '<p>내용작성</p>';
  
  var exWrap = $('.ex_wrap');
  exWrap.html('<p>하나의 요소를 삽입하기위해 <span>html문서를 생성</span>하여 처리</p>');
  
  // 선택자.html(내용)  :  요소를 삽입
  // 선택자.text(텍스트)  :  글자를 삽입

  var exHtmlCheck = exWrap.html();
  var exTextCheck = exWrap.text();
  var exConCheck  = exWrap.contents();

  console.log( exHtmlCheck );
  console.log( exTextCheck );
  console.log( exConCheck );
  
  exWrap.html('<div class="in_wrap"></div>');
  exWrap.children('div').html( exConCheck );

  exConCheck.wrap('<div class="innner"></div>');
 
console.clear();
// --------------------------------------------------
var inWrap = exWrap.children('.in_wrap');

inWrap.before('<p>before는 어디에 생성이 될 것인가? _ 01 </p>');
inWrap.before('<p>before는 어디에 생성이 될 것인가? _ 02 </p>');
inWrap.before('<p>before는 어디에 생성이 될 것인가? _ 03 </p>');
inWrap.before('<p>before는 어디에 생성이 될 것인가? _ 04 </p>');

inWrap.after('<p>after는 어디에 생성이 되는 것인가? _ 01 </p>');
inWrap.after('<p>after는 어디에 생성이 되는 것인가? _ 02 </p>');
inWrap.after('<p>after는 어디에 생성이 되는 것인가? _ 03 </p>');
inWrap.after('<p>after는 어디에 생성이 되는 것인가? _ 04 </p>');

inWrap.append("<a href=\"#\">append는 어디에 a요소를 통해 생성? - 01</a><br />");
inWrap.append("<a href=\"#\">append는 어디에 a요소를 통해 생성? - 02</a><br />");
inWrap.append("<a href=\"#\">append는 어디에 a요소를 통해 생성? - 03</a><br />");
inWrap.append("<a href=\"#\">append는 어디에 a요소를 통해 생성? - 04</a><br />");

inWrap.append('<div class="link_area"></div>');
var linkarea = inWrap.children('.link_area');

// linkarea내부에 inWrap내부에있는 a요소를 옮겨담겠다.
linkarea.append( inWrap.find('a') );

// inWrap내부에 있는 br요소를 linkarea내부에 옮겨담겠다.
inWrap.find('br').appendTo(linkarea);

// ---------------------------------------------------
inWrap.prepend('<button>버튼삽입 1</button>');
inWrap.prepend('<button>버튼삽입 2</button>');
inWrap.prepend('<button>버튼삽입 3</button>');

// var linkarea = inWrap.find('.link_area');
inWrap.prepend(linkarea);
var btn = inWrap.find('button');
btn.prependTo(linkarea);

// before
// after
// append / appendTo
// prepend / prependTo

})(jQuery);