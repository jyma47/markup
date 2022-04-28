// b_06_jQuery_eq_index.js

(function($){
  // jQuery
  
  var check = $('.check');
  var checkLi = check.find('li');
  var checkBtn = checkLi.find('button');
  
  var set = $('.set');
  var setLi = set.find('li');
  // -------------------------------------------
  
  // checkBtn.eq(2).css({backgroundColor:"#f07"});
  
  checkBtn.on('click', function(e){
    e.preventDefault();
    // $(this).css({backgroundColor:"#f07"});
    // index();  -> 선택된 요소의 순서값을 파악
  
    // 선택된요소의 부모에 해당하는 요소의 순서
    var i = $(this).parent().index();
    console.log( i );
  
    // setLi.removeClass('action');
  
    setLi.eq(i).addClass('action');
    setLi.eq(i).siblings().removeClass('action');
  
  });
  
  // eq(i)    :   i번째에 기능을 수행하기 위해 순서를 지정
  // index()  :   이벤트가 발생된 시점의 순서를 파악
  
  // 선택시, 순서가 형제가 아닌데도 js는 그 순서값을 지정하여 처리가 가능하다
  
  // 하나가아닌 2이상의 여러요소를 수행해야 하는경우 ,
  // jquery에서는 한번에 가능하지만 js는 반복문과 함께 써야한다.
  
  
  })(jQuery);