// b_07_accordion.js

(function($){
  // jQuery
  
    // 사용할 기능/ 내용 정리
    // 1. dt를 클릭시 이후에나오는 dd를 나타나게 만들기
    //  - dt를 클릭시 선행 이벤트발생 정지
    //  - dt>button를 키보드 포커스처리시 dd를 나타나게
    // 2. dt를 클릭시 이후에 오는 형제인 모든 dd를 나타나게
    // 3. dt를 클릭시 다른형제(siblings) dl에 있는 dd를 사라지게
    // 4. dt를 클릭시 뒤에오는 요소에 dd가 나타나 있는경우 사라지게
    // - class를 삽입하여, 존재하면 사라지게, 없다면 나타나게
  
    // 변수지정
    var accor = $('.accor');
    var accorDl = accor.children('dl');
    var accorDt = accorDl.children('dt');
    var accorDd = accorDl.children('dd');
  
    // 이벤트 기능 
    accorDt.on('click', function(e){
      e.preventDefault();
      // console.log( $(this).text() )
  // -------------------------------------------------------    
      // 1. 선택한 dt 이후에오는 dd를 나타나게 하자
      var _this = $(this);
      // 5번 조건문에 의해 주석
      // _this.nextAll(accorDd).slideDown();
  // -------------------------------------------------------
      // 2. 선택한 dt 의 부모의 다른형제의 자식인 dd를 사라지게하자.
      // 3번과 중복이라 주석
      // $(this).parent().siblings(accorDl).find(accorDd).hide();
  // -------------------------------------------------------
      // 3. 선택한 dt의 부모의 순서
      var i = _this.parent().index();
      
      //3-1. 파악된 순서를 제외한 dl의 내부에존재하는 dd사라지게
      //5번의 조건문에 의해 주석
      // accorDl.eq(i).siblings().find('dd').slideUp();
  // -------------------------------------------------------
      // 4. 선택한 dt에 클래스 삽입
      // 5번기능으로 내용 주석
      // accorDl.eq(i).addClass('on');
      // accorDl.eq(i).siblings().removeClass('on');
  // -------------------------------------------------------
      // 5. class유무 파악후 추가 기능을 설정
      var dlI = accorDl.eq(i);
      // class기능의 유무 hasClass('className') -> t/f
      if( dlI.hasClass('on') ){
        accorDl.removeClass('on');
        dlI.find('dd').stop().slideUp();
      }else{      
        dlI.addClass('on');
        dlI.siblings().removeClass('on');
        _this.nextAll(accorDd).stop().slideDown();
        dlI.siblings().find('dd').stop().slideUp();
      }
  
    });
  
  
  })(jQuery);