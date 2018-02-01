"use strict";

$(document).ready(function(){
    
    //const
    const scrollDuration = 2000;
    const btnDuration = 300;
    const distance = 500;
    //var
    
    //main
    bttnActions();
    
    $(window).scroll(function(){
        checkPos();
    });
    
    //fx
    function bttnActions(){
        var bttnTop = document.getElementsByClassName("bckTop")[0];
        var bttnBottom = document.getElementsByClassName("bckBottom")[0];
        
        var stEnd = document.getElementsByTagName("html")[0].scrollHeight;
        
        bttnTop.addEventListener("click",function(){
            scrollTo(0);
        });
        bttnBottom.addEventListener("click",function(){
            scrollTo(stEnd);
        });
    }
    
    function scrollTo(pos){
        
        $("html").animate({
            scrollTop: pos
        },scrollDuration,);
    }
    
    function checkPos(){
        var usrPos = $(window).scrollTop();
        
        var pageHeight = document.getElementsByTagName("html")[0].scrollHeight;
        
        var windowHeight = $(window).height();
        
        if(usrPos>0+distance){
            $(".bckTop").fadeIn(btnDuration);
        }
        if(usrPos<0+distance){
            $(".bckTop").fadeOut(btnDuration);
        }
        if(usrPos<pageHeight-distance-windowHeight){
            $(".bckBottom").fadeIn(btnDuration);
        }
        if(usrPos>pageHeight-distance-windowHeight){
            $(".bckBottom").fadeOut(btnDuration);
        }
    }
});