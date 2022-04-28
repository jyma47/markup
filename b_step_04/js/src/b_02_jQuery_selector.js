// b_02_jQuery_selector.js

(function($){
  // console.log( $.fn );
  
  /* 
    body { background-color:#cdf;}
  */

  // var body = document.getElementsByTagName('body')[0];
  // var body = document.querySelector('body');
  var body = $('body');
  body.css({ 'backgroundColor' : '#adf' });
// -----------------------------------------------------
// 선택자1: $('css선택자')
// css표현:  선택자.css({속성명:값, 속성명:값, 속성명:값});

 $('.ex_wrap').css({
   'backgroundColor':'#fff',
   'border':'1px solid #777'
 });

var box = $('#box');
box.css({ 'backgroundColor': '#fd7', 'padding': 20 + 'px'});

// box > h3 {}
$('#box > h3').css({ 'fontSize': 1.3+'rem'});
var boxH3 = box.children('h3');
boxH3.css({ 'fontWeight' : 700, 'marginBottom': 20+'px' });

// box  h3 {}
$('#box h3').css({'textIndent': 15+'px'});
var boxFindH3 = box.find('h3');
boxFindH3.css({ 'color': '#f05'});

// 메소드체인:  선택자.메소드().메소드().....
// ----------------------------------------------------------
// 선택자
var boxP = box.children('p');
box.children('ol').addClass('list_wrap');
var boxList = box.find('.list_wrap');

boxP.css({'backgroundColor' : '#fff', 'marginBottom': '10px'});
boxList.css({'border': '1px solid #555', 'margin':'10px 0' });
// ---------------------------------------------------------------
// 선택자에 순서를 가르키는 것 -> eq(순번)  : 순번은 첫번째가 0

boxList.eq(0).css({ 'backgroundColor' : '#fff', 'padding': '10px'});
boxList.eq(1).css({ 'backgroundColor' : '#ddf', 'padding': '15px' });
boxList.eq(2).css({ 'backgroundColor' : 'rgba(255, 255, 255, 0.3)', 'padding': '10px' });

// --------------------------------------------------------------------
var boxListEq_01 = boxList.eq(0);
// $('#box').children('.list_wrap').eq(0).children('li')
var boxUl_01_li = boxListEq_01.children('li');

boxUl_01_li.eq(0).next().css({'backgroundColor':'#dd7'}); 
boxUl_01_li.eq(0).nextAll().css({'color':'#f06'});
boxUl_01_li.eq(-2).css({'fontSize':'1.4rem'});
boxUl_01_li.eq(-2).prev().css({'textIndent':'30px'});
boxUl_01_li.eq(-2).prevAll().css({'textTransform':'uppercase'});

var boxOl_li = boxList.eq(-1).children('li');
boxOl_li.css({'color':'#03a'});
boxOl_li.eq(5).css({'fontSize':'1.4rem'});
boxOl_li.eq(5).siblings().css({'fontWeight':700, 'color':'#f06'});

var olEq5 = boxOl_li.eq(4);
boxOl_li.not( olEq5 ).css({ 'textAlign' : 'right' });

// ---------------------------------------------------------
var box2 = $('#box');
var box2_other = box2.children('.other_list');
var box2_li = box2_other.children('li');

// box2_li.eq(2).css({'backgroundColor':'#7af'});

var other = $('#other');
other.css({'backgroundColor':'#7af'});
other.children('button').css({color:'#fff', 'fontWeight':'900' });
other.parent().css({ 'backgroundColor':'#dfa', 'borderRadius':'30px' });
other.parent().parent().css({ 'padding': '30px', 'borderRadius':'20px'});
other.parents('.code_exam').css({ border:'2px dotted #f00'});

other.css({'transform':'rotate(45deg)'});
other.animate({'marginLeft': '200px'});
//  jQuery.animate() 메소드 동작하지 않는 것들 : 
//  - transition, animation, transform, borderRadius


})(jQuery);