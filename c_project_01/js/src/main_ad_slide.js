// main_ad_slide.js

(function($){
  // 기능설명
  /**
   * 외부 데이터 불러와서 확인 
   * - $.ajax({url:'jsondataUrl', dataType:'json', context:document.body}).done(function(data){})
   * - $.getJSON('jsondataURL', function(data){})
   */
  
  var jsonData = $.getJSON('../data/osam_main_slide_01.json');
  
  jsonData.done(function(data){
    // 변수
    var slideData = data;
    var sldeType = 'position_slide';
    // console.log( slideData );
    var dataLen = slideData.length;
    var viewBox = $('.slide_set');  
    var viewCover;
    var setNum = 0;
    var beforeN = setNum;
  
    // 기능구현1
    var slideWrapperSet = '<div class="slide"><div class="slide_wrapper"></div></div>';
    viewBox.append(slideWrapperSet);
    var slideWrapperCode = viewBox.find('.slide_wrapper');
    slideWrapperCode.addClass(sldeType);
    var slideDivSet = '<div class="view_cover"><div class="view_con_wrapper"><div class="view_content"><h3></h3><p></p><div class="link"><a href="#"><span class="blind">해당 내용 </span>바로가기<i class="fas fa-arrow-right"></i></a></div></div><figure class="image"><figcaption class="blind"></figcaption><p class="blind"></p></figure></div></div>';
  
    // 함수
    var slideBtn = function(){
      var insertBtn = '<div class="slide_btn blind_area"><button type="button" class="next"><span>다음 내용 보기</span><i class="fas fa-chevron-right"></i></button><button type="button" class="prev"><i class="fas fa-chevron-left"></i><span>이전 내용 보기</span></button></div>';
      slideWrapperCode.before( insertBtn );
    };// slideBtn();
  
  
    var slideDivSetFn = function(n){
      
      slideWrapperCode.append(slideDivSet);
  
      // 변수 
      var slideN     = slideData[n];
      var imgUrl     = '../img/main_slide/';
      var slideDiv   = slideWrapperCode.children('div').eq(n)
  
      var divTitle   = slideDiv.find('h3');
      var divContentWrapper = slideDiv.find('.view_content');
      var divContent = divContentWrapper.find('p');
      var divLink    = slideDiv.find('a');
      var divImg     = slideDiv.find('.image');
      var imgCaption = divImg.find('figcaption');
      var imgContent = divImg.find('p');
      
      // 기능
      slideDiv  .css({backgroundImage:'url('+imgUrl+slideN.background+')'});
      slideDiv  .addClass(slideN.description);
      divTitle  .text(slideN.title);
      divContent.text(slideN.contents);
      divLink   .attr({href:slideN.link});
      divImg    .css({backgroundImage:'url('+imgUrl+slideN.image+')'});
      imgCaption.text(slideN.description);
      imgContent.text(slideN.summary);
  
    }; // slideDivSetFn()
  
    // 광고 위치 표시기능
    
    var actionFn = function(i){
      
      viewCover = $('.view_cover');    
      // viewCover.eq(i).siblings().removeClass('action');
  
      // 기능 수정
      // 선택된 순번 ( setNum , i ) 의 요소를 나타나게하고, 
      // 이후 action처리된 요소를 사라지게(fadeOut) 만든다음
      // 나타난 요소에 action을 부여 ( z-index )
      if(i === beforeN){
        viewCover.eq(i).addClass('action');
      }else{
        viewCover.eq(i).show();
        viewCover.eq(beforeN).fadeOut(function(){
          viewCover.eq(beforeN).removeClass('action');
          viewCover.eq(i).addClass('action');
          beforeN = i;
        })
      } 
  
    };// actionFn();
  
    var i = 0;
    for(; i<dataLen; i+=1){
      slideDivSetFn(i);
    }
  
  
    actionFn(setNum);
    slideBtn();
    // ---------------------------------------------------------------------
    // 인디케이터 생성
    // console.log(viewCover);
    // 설명
    /**
     * = 광고갯수를 파악하여 인디케이터를 생성
     * - 해당하는 순서에맞는 인디케이터에 action을 설정하여, 인지할 수 있도록
     */
    // 담을 코드 작성
    var indiWrapper =  '<div class="slide_check_part">\
                        <ul class="slide_indicator blind_area"></ul>\
                        <p><em class="now_view"></em> / <span class="total_view"></span></p>\
                        </div>';
    var indiCode = '<li><a href="#" data-href="#"><span></span></a></li>';
    
    // 기능설정1 + 변수
    slideWrapperCode.before(indiWrapper);
    var slideCheckPart = viewBox.find('.slide_check_part');
    var indiWrappSelector = viewBox.find('.slide_indicator');
    var viewLenCkNow = slideCheckPart.find('.now_view');
    var viewLenCkTotal = slideCheckPart.find('.total_view');
    var indiSelector;
  
    // 함수
    var indicatorSetFn = function(n){
      indiWrappSelector.append(indiCode);
  
      indiSelector = indiWrappSelector.find('li');
      var indiLiLink = indiSelector.eq(n).find('a');
      var indiLiSpan = indiLiLink.children('span');
  
      indiLiLink.attr({'data-href':'.'+slideData[n].description});
      indiLiSpan.text(slideData[n].summary);
    };// indicatorSetFn(n)
  
    var indicatorCheckFn = function(n){
      viewLenCkNow.text(n+1);
      viewLenCkTotal.text(dataLen);
    }; // indicatorCheckFn(n);
  
    // indicator 생성
    var j = 0;
    for( ; j < dataLen; j+=1 ){    
      indicatorSetFn(j);
    }
  
    indicatorCheckFn(setNum);
    indiSelector.eq(setNum).addClass('action');
  
  // -------------------------------------------------------
  // 실제 광고영역 동작처리
  // 설명
  /**
   * = 다음/이전 버튼을 누르면 광고가 움직이게 해라
   * = 인디케이터를 누르면 광고가 움직이게 해라
   * = 마우스를 광고위에 올리면 일시정지하고, 벗어나면 일정시간마다 내용 변경 해라
   */
  
  // 변수
  var nextBtn = viewBox.find('.next');
  var prevBtn = viewBox.find('.prev');
  console.log( indiSelector );
  
  // 함수
  // 인디케이서 표시
  var indiSetFn = function(n){
    indiSelector.eq(n).siblings().removeClass('action');
    indiSelector.eq(n).addClass('action');
  }; // indiSetFn(n);
  
  // 슬라이드광고, indiSelector, 체크번호 모두 동시에 처리되어야 하는 기능으로 한번에 수행
  var actionNumSetFn = function(n){
    if(n >= dataLen){ 
      n = 0; 
      setNum = n;
    }else if(n < 0){
      n = dataLen -1;
      setNum = n;
    }
  
      actionFn(n);
      indicatorCheckFn(n);
      indiSetFn(n);
  };// actionNumSetFn(n);
  
  
  // 이벤트
  nextBtn.on('click', function(e){
    e.preventDefault();
    // setNum+=1;
    actionNumSetFn(setNum+=1);
  });
  
  prevBtn.on('click', function(e){
    e.preventDefault();
    // setNum-=1;
    actionNumSetFn(setNum-=1);
  });
  
  indiSelector.find('a').on('click', function(e){
    e.preventDefault();
    setNum = $(this).parent().index();
    actionNumSetFn(setNum);
  });
  
  
  
  
  // $ajax ---------------------------------------------------
  });
  })(jQuery);