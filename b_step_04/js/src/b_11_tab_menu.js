// b_11_tab_menu.js
(function($){
  // step 1 : json data 불러와서 설정 -------------------

  $.ajax({
    url:"../json/menu.json",
    context:document.body
  }).done(function(data){
    var dataFile = data;  
    // console.log( dataFile );

    var i=0;
    var len = dataFile.length;
    var tabTitle = [];
    for(; i < len; i += 1){
      tabTitle.push( dataFile[i].type );
    }
    // console.log( tabTitle );

    /* tab menu title 설정 -------------------------------------- */
    // 배열.filter(function(data, index){});
    // indexOf() : 문자열/배열 에서 작성한 요소와 일치하는 순서를 파악
    // 중복되는 배열의 값을 정리해주는 기능
    var tabTitleCheck = tabTitle.filter(function(data,index){
      return tabTitle.indexOf(data) === index;
    });    
    // console.log(tabTitleCheck);
    
    /* tab menu 내용 구성에 맞는 목록 체크 ----------------------- */
    var tabMenuSet;
    var tabMenuFn = function(n){
      tabMenuSet = dataFile.filter(function(data){
        return data.type === tabTitleCheck[n];
      });
    }
    
    tabMenuFn(1);
    console.log(tabMenuSet);

    // title 구성 : tabTitleCheck
    // title에 따른 메뉴 구성 : 함수 호출 -> tabMenuFn(순서);
    // title에 따른 메뉴 구성 : 구성 사용 -> tabMenuSet;

  // --------------------------------------------------
  // step 2: 불러온 json data 기반으로 구성을 배치
  // 변수(1차 기존 요소)
  var tabArea  = $('.tab_area');
  var tabTitle =  tabArea.find('.tab_title');
  var tabContent = tabArea.find('.tab_content');

  // tabTitle 내부에 탭메뉴 제목부 구성 tabTitleCheck를 이용
  tabTitle.html('<ul></ul>');
  var tabTUl = tabTitle.children('ul');
  var titleEl = '<li><button type="button"></button></li>';
  var tabTLen = tabTitleCheck.length;

  for(i=0; i<tabTLen; i += 1){
    tabTUl.append(titleEl);
    tabTUl.find('button').eq(i).text(tabTitleCheck[i]);
  }

  var tabTLi   = tabTitle.find('li');
  var tabBtn   = tabTLi.find('button');
  tabTLi.css({width: (100 / tabTLen) + '%' });
  tabTLi.eq(0).addClass('on');

  // -------------------------------------------
  // step 3 : 내용을 구성하기 위한 세팅 및 함수 처리
  tabContent.html('<ul class="tab_list clearfix"></ul>');
  var tabConMenu = tabContent.find('.tab_list');

  var tabMenuSetFn = function(k){
    tabMenuFn(k);
    tabConMenu.empty();
    // console.clear();
    console.log( tabMenuSet );
    var tabListSet = '<li><div class="img_con"><span></span></div><dl><dt></dt><dd class="text_con"></dd><dd class="link_con"><a href="#">자세히보기</a></dd></dl></li>';

    var j = 0;
    var tabSetLen = tabMenuSet.length;
    var liIdex, tSet, hrefText;
    
    for(; j < tabSetLen; j += 1){
      tabConMenu.append(tabListSet);
      liIdex = tabConMenu.children('li').eq(j);
      tSet = tabMenuSet[j];
      hrefText = './'+tSet.couse + '/' + tSet.link;

      liIdex.find('dt').text(tSet.menu);
      liIdex.find('.text_con').text(tSet.account);
      liIdex.find('a').attr({href:hrefText});
      // background-image설정, 내용 빠져있는 상태
      
    } // for
  }; // tabMenuSetFn();

  tabMenuSetFn(0);

  // --------------------------------------------------
  // step 4 : 탭메뉴 처리 설정

  // 기능 설명
  // 1. 선택된 버튼의 순서를 파악
  // 2. 선택된 버튼의 내용에 맞는 구성을 설정

  // 이벤트
  tabBtn.on('click', function(e){
    e.preventDefault();
    var n = $(this).parent().index();

    tabBtn.parent().eq(n).addClass('on');
    tabBtn.parent().eq(n).siblings().removeClass('on');
    // tabMenuFn을 통해 찾아낸 타입구성을 재설계하여 배치할 수 있는 함수 호출
    tabMenuSetFn(n);
  });


  // 객체형식을 문자로 변환 : JSON.stringify(객체)


  }); // $.ajax()
})(jQuery);