// headBox_handhelds.js

(function($){
  // 기능설명
  /**
   * #headBox 내부의  .nav_btn을 클릭시 #navBox를 나타나게 해라
   */
  
  // 변수
  var headBox = $('#headBox');
  var navBtn = headBox.find('.nav_btn');
  var btn = navBtn.find('button');
  var navBox = $('#navBox');
  
  // 이벤트
  btn.on('click', function(e){
    e.preventDefault();
    var navState = navBox.css('display') === 'none'; // true/false
    if(navState){
      navBox.fadeIn();
    }else{
      navBox.fadeOut();
    }
  });
  
  
  })(jQuery);