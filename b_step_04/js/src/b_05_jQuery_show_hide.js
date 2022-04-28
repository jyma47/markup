// b_05_jQuery_show_hide.js

(function($){
  // jQuery
    
  var exWrap = $('.ex_wrap');
  var galleryImg = exWrap.find('.gallery_img');
  var btnArea = exWrap.find('.btn');
  // var btnList = btnArea.children('li');
  var view = btnArea.find('.view');
  var fade = btnArea.find('.fade');
  var slide = btnArea.find('.slide');
  var classSet = btnArea.find('.class_set');
  var timed = 600;
  
  // galleryImg.css({'display' : 'block'});
  // -------------------------------------
  // view( show/hide/toggle )
  var viewBtn = view.children('button');
  
  viewBtn.eq(0).on('click', function(e){  
    e.preventDefault();
    galleryImg.show( timed );
  });
  
  viewBtn.eq(1).on('click', function(e){
    e.preventDefault();
    galleryImg.hide( timed );
  });
  
  viewBtn.eq(2).on('click', function(e){
    e.preventDefault();
    galleryImg.toggle( timed );
  });
  
  // -------------------------------------
  // fade( fadeIn/ fadeOut/ fadeToggle )
  var fadeBtn = fade.children('button');
  
  fadeBtn.eq(0).on('click', function(e){
    e.preventDefault();
    galleryImg.stop().fadeIn( timed );
  });
  fadeBtn.eq(1).on('click', function(e){
    e.preventDefault();
    galleryImg.stop().fadeOut( timed );
  });
  fadeBtn.eq(2).on('click', function(e){
    e.preventDefault();
    galleryImg.stop().fadeToggle( timed );
  });
  
  // ------------------------------------
  // slide ( slideDown / slideUp/ slideToggle )
  var slideBtn = slide.children('button');
  
  slideBtn.eq(0).on('click', function(e){
    e.preventDefault();
    galleryImg.stop().slideDown( timed * 2 );
  });
  
  slideBtn.eq(1).on('click', function(e){
    e.preventDefault();
    galleryImg.stop().slideUp( timed * 2 );
  });
  
  slideBtn.eq(2).on('click', function(e){
    e.preventDefault();
    galleryImg.stop().slideToggle( timed * 2 );
  });
  
  // -------------------------------------
  // classSet : ( addClass/ removeClass/ toggleClass )
  var classBtn = classSet.children('button');
  var act = 'action_view';
  
  classBtn.eq(0).on('click', function(e){
    e.preventDefault();
    galleryImg.addClass( act );
  });
  
  classBtn.eq(1).on('click', function(e){
    e.preventDefault();
    galleryImg.removeClass( act );
  });
  
  classBtn.eq(2).on('click', function(e){
    e.preventDefault();
    galleryImg.toggleClass( act );
  });
  
  
  })(jQuery);