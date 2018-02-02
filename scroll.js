"use strict";

$(document).ready(function(){
    
    //const
    const scrollDuration = 2000;
    const btnDuration = 300;
    const distance = 500;
    //var
    
    //main
    bttnActions();
    cfgBttn();
    drctBttn();
    scrollBttn();
    
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
    
    function cfgBttn(){
        
        var cfgBttn = document.getElementsByClassName("autoBtn")[0];
        
        cfgBttn.addEventListener("click", function(){
            var isHere = $(".cfg").css("display");

            switch(isHere){
                case "none":
                    $(".cfg").fadeIn(btnDuration);
                    break;
                case "block":
                    $(".cfg").fadeOut(btnDuration);
                    break;
                default:
                    console.log("Default in switch");
            }
            
        });
    }
    
    function scrollBttn(){
        
        
        
        $(".scrollStrt").click(function(){
            if($("#activeBttn").hasClass("scrollTop") == true){
                var drct = "top";
            }
            if($("#activeBttn").hasClass("scrollBottom") == true){
                var drct = "bottom";
            }
            letsScroll(true, drct);
        });
        $(".scrollStp").click(function(){
            var drct = undefined;
            letsScroll(false, drct);
        });
    }
    
    function letsScroll(state, direction){
        
        switch(state){
            case true:
                switch(direction){
                    case "top":
                        var where = 0;
                        break;
                    case "bottom":
                        var where = $("html").height();
                        break;
                    default:
                        console.log("Default in switch");
                }
                var yourPos = $(window).scrollTop();
                
                var dst = Math.abs(yourPos - where);
                var spd = $(".scrollRng").val();
                var tm = dst/spd;
                console.log(tm);
                console.log("#"+yourPos+" # "+where);
                
                $("html").animate({
                    scrollTop: where
                },1000*tm,"linear");
                break;
            case false:
                $("html").stop();
                break;
            default:
                console.log("Default in switch");
        }
    }
    
    function drctBttn(){
        $(".scrollTop").click(function(){
            $(this).attr("id","activeBttn");
            $(".scrollBottom").attr("id","");
        });
        $(".scrollBottom").click(function(){
            $(this).attr("id","activeBttn");
            $(".scrollTop").attr("id","");
        });
    }
});