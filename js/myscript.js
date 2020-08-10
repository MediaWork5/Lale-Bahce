/*glopal $, alert, console*/

$(function(){

    'use strict';
    
    // the bitton to top
    
    var scrollButton = $("#button-top");
    
    $(window).scroll(function(){
        
        
        if ( $(this).scrollTop() >= 700){
            
            scrollButton.show();
        }
        else{
            
            scrollButton.hide();
            
        }
        
        
    });
    
    scrollButton.click(function(){
            
            $("html, body").animate({ scrollTop: 0}, 2000);
            
        });
    
    //   responsive menu
    
    $(".mobile-header nav i").click(function(){
       
        $(".mobile-header .menu").css({"right":"0%"});
    });
    
    
    $(".mobile-header .menu i").click(function(){
       
        $(".mobile-header .menu").css({"right":"-340px"});
    });
    
    //Magnetic Pop up Plugin

    $('.test-popup-link').magnificPopup({
        type: 'image',

        gallery: {
            enabled: true
        }
    });
    
    // header links
    
    $('.link1').click(function() {
        $('html, body').animate({
            scrollTop: $('#mobile-project-site').offset().top
        },1000);
    });
    
    $('.link2').click(function() {
        $('html, body').animate({
            scrollTop: $('#locations').offset().top
        },1200);
    });
    
    $('.link3').click(function() {
        $('html, body').animate({
            scrollTop: $('#services').offset().top
        },1400);
    });
    
    $('.link4').click(function() {
        $('html, body').animate({
            scrollTop: $('#services').offset().top
        },1600);
    });
    
    $('.link5').click(function() {
        $('html, body').animate({
            scrollTop: $('#offers').offset().top
        },2000);
    });
    
    $('.link6').click(function() {
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        },2200);
    });
    
    $('.link7').click(function() {
        $('html, body').animate({
            scrollTop: $('#form').offset().top
        },2400);
    });
    
});