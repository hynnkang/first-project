$(document).ready(function(){
  $('#TopSlider .slide').bxSlider();
    
    $('#nav .menubox').hide();
    
    $('#nav .menuname').on('mouseenter',function(){
        $(this).siblings('.menubox').slideDown();
    });
    
    $('#nav .menuname').on('mouseleave',function(){
        $(this).siblings('.menubox').slideUp();
    });
    
    $(window).scroll(function(){
        
        if ($(document).scrollTop() >= 400 ) {
        $('#nav').addClass('fixed');} else {
            $('#nav').removeClass('fixed');
        }
    });
        
    
    
    $('#new .all h3').addClass('active');
    $('#new h3').on('click',function(){
        $('#new .item').css('display', 'none');
        $(this).siblings('#new .item').css('display', 'block');
        $('#new h3').removeClass('active');
        $(this).addClass('active');
    });
    
    $('#MidSlider .slide').bxSlider({
      infiniteLoop: false,
      hideControlOnEnd: true
    });

    
});
    
