// b_04_slide_hofizontal_swipe.js

(function($){
  // 기능설명
  
  
  // 변수 -----------------------------------------
  var slideSet = $('.slide_set');
  var horizontal = slideSet.find('.horizontal_slide');
  var horizontalDiv = horizontal.children('div');
  var originDivLen = horizontalDiv.length;
  
  var i = 0;
  var permission = true;
  var startX, endX;
  
  // 함수 -----------------------------------------
  var nextSwipeFn = function(){
    if(permission){
      permission = false;
      i += 1;
      if(i >= originDivLen){
        horizontal.css({marginLeft: 100+'%' });  
        i = 0;
      }
      horizontal.stop().animate({marginLeft: -100 * i +'%'}, function(){
        permission = true;
      });    
    }// if(permission)
  }; // nextSwipeFn();
  
  var prevSwipeFn = function(){
    if(permission){
      permission = false;
      i -= 1;
      horizontal.stop().animate({marginLeft: -100 * i +'%'}, function(){
        if(i < 0) {
          i = originDivLen - 1;
          horizontal.css({marginLeft: -100 * i +'%'});
        }
        permission = true;
      });
    }// f(permission)
  };// prevSwipeFn()
  
  // 기능 -----------------------------------------
  var cloneDiv = horizontalDiv.eq(-1).clone();
  horizontal.prepend(cloneDiv);
  
  var newHorizontalDiv = horizontal.children('div');
  var newDivLen = newHorizontalDiv.length;
  
  horizontal.css({width:(100 * newDivLen) + '%', left: -100 +'%'});
  newHorizontalDiv.css({width:(100 / newDivLen) + '%'});
  
  
  // 이벤트 --------------------------------------
  slideSet.on('touchstart', function(e){
    startX = parseInt(e.originalEvent.changedTouches[0].clientX);
  });
  
  slideSet.on('touchend', function(e){
    endX = parseInt(e.originalEvent.changedTouches[0].clientX);
    var resultX = startX - endX;
    if(resultX > 100){
      nextSwipeFn();
    }else if(resultX < -100){
      prevSwipeFn();
    }
  });
  
  // slideSet.on('touchmove', function(e){
  //   console.log(e);
  // });
  
  // screenX, screenY -> 모니터의 좌표
  // clientX, clientY -> 보이는 화면(브라우저의 보이는 그 자체)
  // pageX, pageY -> 스크롤값을 포함한 브라우저 좌표
  
  })(jQuery);