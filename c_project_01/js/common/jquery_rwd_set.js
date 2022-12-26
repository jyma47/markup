// b_03_responsive_js_set.js

(function($){
  // 기능설명
  /**
   * = 각 디바이스 환경을 확인하여, 필요시 그에따른 기능을 수행 할 수있는 기본 세팅
   * - 기준 디바이스 가이드를 불러오기 $.ajax() or $getJSON()
   * - 기존 크기를 확인 및 디바이스크기 기준 디바이스를 설정
   * - 브라우저 크기가 변경되면 변경된 크기를 파악하여, 기존 디바이스환경과 비교하여 다른 환경일경우 변경할 처리를 체크
   */
  var jsonData = '../data/device_type.json';
  $.getJSON(jsonData, function(data){
    // console.log( data );
    var deviceGuide = data;
  
    // 변수
    var win = $(window);
    var winW = win.width();
    var checkType;


    // 함수
    var deviceCheckFn = function(){
      var guideLen = deviceGuide.length;
      var i = guideLen-1;
      for(; i >= 0; i-=1 ){
        if(winW >= deviceGuide[i].size){
          checkType = deviceGuide[i].type;
          break;
        }else{
          checkType = deviceGuide[i].type;
        }
      }
      // console.log(checkType);
      return $.CheckType = checkType;
    }; // deviceCheckFn();
  
    var beforeDevice = deviceCheckFn();
    // console.log(beforeDevice);

    // 이벤트
    win.on('resize', function(){
      winW = win.width();
      var afterDevice = deviceCheckFn();
      if(beforeDevice !== afterDevice){     
        beforeDevice = afterDevice;
        location.reload();
      }
    });


  // ---------------------------------------------
  }); // $.getJSON();
})(jQuery);