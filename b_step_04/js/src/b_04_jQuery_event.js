// b_04_jQuery_event.js
(function($){
  var exWrap = $('.ex_wrap');
  var exP = exWrap.find('p');
  var exInnerText = exP.children('span');
  var evt = exWrap.find('.evt');
  var evtLi = evt.children('li');

  exInnerText.text('이벤트처리 전');

  exP.css({ 'backgroundColor' : '#fff', 'border':'1px solid #555'});
  evt.css({'marginTop':'30px'});

// --------------------------------------------
// click :

  // evtLi 첫번째에 클릭 이벤트 발생
  evtLi.eq(0).on('click', function(){
    exInnerText.text('li 첫번째 요소를 클릭하였습니다.');
  });

  evtLi.eq(1).on('click', function(evt){
    evt.preventDefault();
    exInnerText.text('li 두번째 요소 및 a를 클릭하였습니다.');
  });
// ------------------------------------------
// dblclick: 더블클릭

  evtLi.eq(2).on('dblclick', function(){
    exInnerText.text('dblclick')
  });
// -----------------------------------------
// mousedown, mouseup 마우스를 누르거나 띄는 상태
  evtLi.eq(3).on('mousedown', function(e){
    exInnerText.text('마우스를 눌렀습니다.');
    evtLi.eq(3).css({ 'backgroundColor': '#d7d' });
  });

  evtLi.eq(3).on('mouseup', function(){
    exInnerText.text('마우스를 띄었습니다.');
    evtLi.eq(3).css({'backgroundColor':'#57a'});
  });

  // -------------------------------------------
  // mouseenter, mouseleave
  evtLi.eq(4).on('mouseenter', function(){
    exInnerText.text('마우스를 올렸습니다.');
    $(this).css({ color:'#06a', 'backgroundColor':'#ddd'});
  });

  evtLi.eq(4).on('mouseleave', function(){
    exInnerText.text('마우스를 벗어났습니다.');
    $(this).removeAttr('style');
  });

  // ---------------------------------------
  // focus 초점을 맞출때

  evtLi.eq(5).children('a').on('focus', function(){
    exInnerText.text('포커스 처리되었습니다.');
    $(this).css({backgroundColor:'#ccc'})
  });
  evtLi.eq(5).children('a').on('blur', function(){
    exInnerText.text('포커스가 빠져 나갔습니다.');
    $(this).removeAttr('style');
  });

  // ---------------------------------------
  // scroll 움직일경우
  var win = $(window);
  win.on('scroll', function(){
    var scrollCk = parseInt(win.scrollTop());
    console.log( scrollCk );

    if(scrollCk >= 500){
      $('body').css({backgroundColor:'#fda'});
    }else{
      $('body').removeAttr('style');
    }
  });

  evtLi.eq(6).on('click', function(e){
    e.preventDefault();
    // win.scrollTop(600);
    $('html').animate({ scrollTop: 600+'px' });
  });
// --------------------------------------------
// resize 브라우저 사이즈 변경

 win.on('resize', function(e){
   var winW = $(this).width();
   if(winW >= 1024){
     $('body').stop().animate({ backgroundColor : '#add'}, 300);
   }else{
     $('body').stop().animate({backgroundColor:'transparent'}, 300);
   }
 });

 // ---------------------------------------
 evtLi.on('mouseenter', function(){
  $(this).css({'border': '1px solid #333'});
 });
 evtLi.on('mouseleave', function(){
   $(this).removeAttr('style');
 })


 // 이벤트
 // click, dblclick, mouseenter, mouseleave, foucs, blur, scroll, resize
 // window, document, $(this)



})(jQuery); 