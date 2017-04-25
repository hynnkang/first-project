$(document).ready(function(){
  $('#TopSlider .slide').bxSlider();
    
    $('#nav .menubox').hide();
    
    $('#new .all h3').addClass('active');
    $('#new h3').on('click',function(){
        $('#new .item').css('display', 'none');
        $(this).siblings('#new .item').css('display', 'block');
        $('#new h3').removeClass('active');
        $(this).addClass('active');
    });
    
    
    $('#nav .menuname a').on('mouseenter',function(){
        $('#nav .menubox').slideDown();
        
    });
    
    
    $(window).scroll(function(){
        
        if ($(document).scrollTop() >= 700 ) {
        
        $('#nav').css('display','fixed');
    }
        
    });
                     
    

    });