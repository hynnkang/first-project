$(document).ready(function(){
    
    $('#top .cart .cartbox').hide();
    $('#top .cart .carttext').on('mouseenter',function(){
       $(this).siblings('.cartbox').show(); 
    });
    
     $('#top .cart .carttext').on('mouseleave',function(){
        $(this).siblings('.cartbox').hide(); 
    });
    

    $('#nav .menulist .menubox').hide();
    $('#nav .menulist .menuname').on('mouseenter',function(){
        $(this).siblings('.menubox').slideDown();
    });
    
    $('#nav .menulist').on('mouseleave',function(){
        $('.menubox').slideUp();
    });
    
      
    $(window).scroll(function(){
        if ($(document).scrollTop() >= 400 ) {
        $('#nav').addClass('fixed');} else {
            $('#nav').removeClass('fixed');
        }
    });
    
    
     $('#TopSlider .slider').bxSlider();
    
      
    $('#series .slider').bxSlider({
      infiniteLoop: false,
      hideControlOnEnd: true
    });
    
    
    $('#new .all h3').addClass('active');
    $('#new h3').on('click',function(){
        $('#new .item').css('display', 'none');
        $(this).siblings('#new .item').css('display', 'block');
        $('#new h3').removeClass('active');
        $(this).addClass('active');
    });
    
    
    $('#MidSlider .slider').bxSlider({
      infiniteLoop: false,
      hideControlOnEnd: true
    });
    
    $('#MidSlider .firstmain .mainpic').css('display','block');
    $('#MidSlider .firstmain .thumnail').addClass('clickact');
    
    $('#MidSlider .card01 .thumnail').on('click',function(){
        $('#MidSlider .card01 .thumnail').removeClass('clickact')
        $(this).addClass('clickact')
        $('#MidSlider .card01 .mainpic').css('display','none');
       $(this).siblings('.mainpic').css('display', 'block')  
    });
       $('#MidSlider .card02 .thumnail').on('click',function(){
        $('#MidSlider .card02 .thumnail').removeClass('clickact')
        $(this).addClass('clickact')
        $('#MidSlider .card02 .mainpic').css('display','none');
       $(this).siblings('.mainpic').css('display', 'block')  
    });
    

    
});
    
