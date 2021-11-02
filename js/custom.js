/*global $, alert, console*/

$(function(){
    'use strict';
 /*   $('html').niceScroll({
        cursorcolor:'#f7600e',
        cursorwidth:10,
        cursorborder:'1px solid f7600e'
    });*/

    //loader
    $(document).ready(function () {
    //  $('.loader').css("display","none")
        $('.loader').delay(100).fadeOut('slow');
    });


    //nice select "dropdown"
    $(document).ready(function() {
        $('select').niceSelect();
      });

    //navbarScoll
    $(window).scroll( function() {
        let x=($(window).scrollTop());
        if(x>"80")
        {
            
            $('.header .navbar').addClass('scroll animate__animated animate__fadeInDown');
          
        }
        else{
            
            $('.header .navbar').removeClass('scroll animate__animated animate__fadeInDown');
        }
    });

    //hover in button
 /*   $('.content button').hover(
        function(){   //hover
            $('.content button').addClass('hover');
        },function(){   //hover out
            $('.content button').removeClass('hover');
        }
    );*/


    //navbar
    $('.collapse .navbar-nav .nav-item').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

});