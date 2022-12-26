// b_03_slide_hofizontal_btn.js

(function($){
  // 기능설명
  /**
   * = 버튼 클릭시 .horizontal_slide 가로로 이동하게 만들기(무한)
   * - next클릭 .hofrizontal_slide 가로 1칸 이동 ( margin-left: -100% )
   * - 움직이고 난 후 내부 div의  첫번째를 마지막으로 강제 이동,
   * - 동시에 .horizontal_slide 를 원위치로 이동 ( margin-left:0 )
   */
  
  // 변수 ======================================
  var slideSet = $('.slide_set');
  var btnArea = slideSet.find('.slide_btn');
  var nextBtn = btnArea.find('.next');
  var prevBtn = btnArea.find('.prev');
  
  var horizontal = slideSet.find('.horizontal_slide');
  var horizonDiv = horizontal.children('div'); // 01-02-03-04-05
  
  var permission = true; // 출입 패스권한(승인)
  
  // 함수 ======================================
  // 기능 수행 ======================================
  
  
  // 이벤트 ======================================
  // next버튼 클릭시 수행
  nextBtn.on('click', function(e){
    e.preventDefault();
    // nextBtn.hide();
  
    if(permission){
  
      permission =false;  // 출입 패스권한(승인취소)
      
      horizontal.stop().animate({marginLeft:-100+'%'}, function(){
        var divFirst =  horizonDiv.eq(0);
        // divFirst.appendTo(horizontal);
        horizontal.append( divFirst ); // 02-03-04-05-01
        horizontal.css({marginLeft:0});
        horizonDiv = horizontal.children('div');  // 02-03-04-05-01
      
        // nextBtn.show();
        permission = true;
      });
  
    }// if(permission)
  });// nextBtn.on('click')
  
  // prev버튼 클릭시 수행
  prevBtn.on('click', function(e){
    e.preventDefault();
    // prevBtn.hide();
    if(permission){
      permission = false; 
  
      var divLast = horizonDiv.eq(-1);
      horizontal.prepend(divLast);
      horizontal.css({marginLeft:-100 + '%'});
      horizontal.stop().animate({marginLeft: 0}, function(){
        horizonDiv = horizontal.children('div');
        prevBtn.show();
        permission = true;
      });
  
    }// if(permission)
  }); // prevBtn.on('click')
  
  })(jQuery);