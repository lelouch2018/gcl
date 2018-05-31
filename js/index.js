$(function() {
    window.onload = function(){

        $(".header .logo img").css("margin-top",-$(".header .logo img").height()/2+"px");
        $(".nav .logo img").css("margin-top",-$(".nav .logo img").height()/2+"px");

    
        $(".time").each(function(index, el) {
            $(this).height($(this).parents('li').find("p").height())
        });


        $(".page1").height($(window).height());
    }




    $(".selects").click(function(event) {
        $(".m_nav").hide();
        if($(".langluge,.m_langluge").css("display") == "block"){
            $(".langluge,.m_langluge").fadeOut();
        }else{
            $(".langluge,.m_langluge").fadeIn();
            $(".dl").hide();
        }
    });

    $(".m_langluge li").click(function(event) {
        $(".m_langluge").fadeOut();
    });


    $(".langluge li").click(function(event) {
        $(".langluge").fadeOut();
    });

    $(".header ul.L li,.m_nav li").click(function(event) {
        $(this).addClass('cur').siblings().removeClass('cur');
        var href = $(this).find("a").attr("data-href")
        $("body,html").animate({
            scrollTop: $("#"+href+"").offset().top - 35
        }, 1000);
    });





    $(".meau").click(function(event) {
        $(".m_nav").fadeIn();
        $(".dl").hide();
    });


    $(".m_nav li").click(function(event) {
        $(".m_nav").fadeOut();
    });




    $(".sign").click(function(event) {
        $(".login").show();
        $(".m_nav").fadeOut();
    });

  
    $(".forget").click(function(event) {
        $(".dl").hide();
        $(".forgetpassword").show();
    });

    $(".dl_li").click(function(event) {
        $(".dl").hide();
        $(".login").show();
    });

  
    $(".zc").click(function(event) {
        $(".dl").hide();
        $(".zhuce").show();
    });

    $(".close").click(function(event) {
        $(".dl").hide();
    });

    
    $(".ceng").height($(document).height());

  
    $(".close_video").click(function(event) {
        $(".video1").hide();
    });

  
    $(window).scroll(function() {
        var sc = $(window).scrollTop();
        if (sc > 0) {
            $(".top").css("display", "block");
        } else {
            $(".top").css("display", "none");
        }
    })


   
    $(".top").click(function() {
        var sc = $(window).scrollTop();
        $('body,html').stop().animate({
            scrollTop: 0
        }, 500);
    });

    
    $(".viseo_btns").click(function(event) {
        $(".video1").show();
    });

    $(".page1,.sign,.header ul.L,.sample,.ceng,.meau").click(function(event) {
        $(".langluge,.m_langluge").fadeOut();
    });

    $(".ceng").click(function(event) {
        $(".dl").hide();
    });

    $(".m_langluge,.m_nav").click(function(){
        $(this).fadeOut();
        return false;
    })
    $('.linka').click(function(){
        $('.clearfixHalf').hide();
        $('.clearfixScreen').show();
    })
    $('.narrow').click(function(){
        $('.clearfixHalf').show();
        $('.clearfixScreen').hide();
    })

    $(".news_xw").click(function(event) {
        $(".news").fadeToggle();
        $('.news').css('height',$(window).height());
    });


    $(".nav").click(function(event) {
        $('.news').hide();
      
    });


   
    $(".Team .more").click(function(event) {
        var index = $(this).parent().index();
        $('.team_A').find('.team_C').hide();
        $('.team_A').find('.team_C').eq(index).show();
    });

  
    $(".guanbi").click(function(event) {
        $(".team_C,.Partners_C,.login_condition").hide();
    });

    $(".Partners ul li a").click(function(event) {
        $(".Partners_C").show();
    });
    $('.login_condition_a').click(function(){
        $('.login_condition').show();
    })
    $(document).keyup(function(event){
      if(event.keyCode ==13){
            if($('.login').css('display') =='block'){
                alert();
            }
      }
    });

    if($(window).width() < 750){
        $('.Rup1').after($('.Ldown1'))
 $('.Rup2').after($('.Ldown2'))
  $('.Rup3').after($('.Ldown3'))
    }
});

