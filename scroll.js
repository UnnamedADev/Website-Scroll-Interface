"use strict";

$(document).ready(function(){
    
    //const
    
    //var
    
    //main
    bttnActions();
    
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
        
        console.log(window.scrollX);
    }
    
    function scrollTo(pos){
        console.log("xd");
    }
    
});