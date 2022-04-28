// b_09_modal.js

(function($){
  // 기능설명
  // 사용자 속성( attr([속성명]) )값을 가져오는 방법
  /*
    var testLi = $('.modal_list').find('li').eq(0);
    var checkAtttr = testLi.attr('data-img');
    var checkAtttr2 = testLi.attr('data-narr');
    console.log( checkAtttr, ' : ' , checkAtttr2 );
  */
  
  /**
   * 1. 버튼을 클릭시 해당하는 요소의 부모에 있는 속성값(img, narr)을 파악 - ( attr )
   * 2. .modal_content 에 배경이미지를 담고, p요소에 글자를 변경  - ( css, text )
   * 3. .modal_window 나타나게 만들자 - (show, fadeIn, slideDown ... )
   * 4. .modal_window 닫기버튼을 클릭시 사라지게 만들기 - (hide, fadeOut, slideUp ... )
   */
  
  // 변수
  var modal = $('.modal');
  var modalLi = modal.find('li');
  var modalBtn = modalLi.children('button');
  
  var modalWindow = $('.modal_window');
  var modalClose = modalWindow.find('.close_btn');
  var closeBtn = modalClose.children('button');
  
  var modalContent = modalWindow.find('.modal_content');
  var modalP = modalContent.children('p');
  
  var bigImgUrl = '../../img/album/view/';
  var timed = 300; 
  
  // 함수
  var imgUrlFn = function(data){
    // var url = 'url("../../img/album/view/'+ data + '")';
    var url = 'url("'+ bigImgUrl + data + '")';
    return url;
  }
  // console.log( imgUrl('box.png') );
  
  // 이벤트
  modalBtn.on('click', function(e){
    e.preventDefault();
    // 이미지와 기능 가져오기
    var par = $(this).parent();
    var img = par.attr('data-img');
    var narr = par.attr('data-narr');
  
    // 띄울 창의 내용에 담기
    modalContent.css({'backgroundImage': imgUrlFn(img) });
    modalP.text( narr );
  
    // modal_window 나타나게 만들기
    modalWindow.fadeIn(timed, function(){
      closeBtn.focus()
    });
  });
  
  closeBtn.on('click', function(e){
    e.preventDefault();
    modalWindow.fadeOut(timed);
  });
  
  
  })(jQuery);