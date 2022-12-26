// b_02_slide_position_indicator.js

(function($){
  // 기능설명
  /**
   * 인디케이터를 선택시, 그에따른 이미지내용을 나타나게 만들자
   * ---------------------------------------------------
   * [o] .indicator 요소 선택이 몇번째인지 인지
   * [o] .slide_wrapper 내부의 div가 몇번째가 나타나야하는지
   * [o] 나타나야하는 요소 외의 다른 div는 사라지게 만들기
   * [o] .slide_wrapper 내부의 div에 .action 처리(추가/해제)
   * [o] .indicator내부의 li에서 .action을 처리(추가/해제) 
   * ---------------------------------------------------
   *  .slide_wrapper 내부의 div가 나타나지만 보이지 않게 처리(display:block)
   *  .slide_wrapper 내부의 div의 .action 으로 처리된 요소를 서서히 사라지게 만들기
   *  나타난 div요소에 .action을 처리(z-index), 이전요소에서는 .action을 삭제
   */
  
  // 변수
  var slideSet = $('.slide_set');
  var indiWrap = slideSet.find('.indicator');
  var indiUl = indiWrap.children('ul');
  var indiLi = indiUl.children('li');
  var indiLink = indiLi.children('a');
  
  var slidePart = slideSet.find('.slide');
  var slideWrap = slidePart.find('.slide_wrapper');
  var slideDiv  = slideWrap.children('div');
  
  var i = 0, j=i;
  var timed = 500;
  
  // 함수
  var indiCheckFn = function(){
    indiLi.eq(i).addClass('action');
    indiLi.eq(i).siblings().removeClass('action');
  };
  
  var slideDivFn = function(){
    // slideDiv순번에 맞는 요소를 먼저 나타나게
    slideDiv.eq(i).stop().show();
    slideDiv.eq(j).stop().fadeOut(timed/2, function(){
      slideDiv.eq(i).addClass('action');
      slideDiv.eq(j).removeClass('action');
      j = i;
    });
  };
  
  // 선행 기능
  slideDiv.eq(i).show();
  
  // step 2 -------------------------------
  indiLink.on('click', function(e){
    e.preventDefault();
    i = $(this).parent().index();
    indiCheckFn();
    slideDivFn();
  });
  
  
  
  })(jQuery);