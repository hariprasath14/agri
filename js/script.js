$(document).ready(function(){
    var t= true;

    $(".search-icon").click(function(){
        $(".search").slideDown()
    })  
    $(document).on("click", function(event){
        if(!$(event.target).closest(".search-div").length){
            $(".search").slideUp();
        }
    })
    $(".carousel-control-prev").click(function(){
       $(this).css({
           color:"black"
       })
    })
    $(".pageup").click(function(){
        $('html body').animate({scrollTop:0}, 3000);
    })
    $(document).scroll(function(){
        var y = $(document).scrollTop();
         if(y>900){				
            $(".v1").fadeIn("fast").animate({opacity:1,
                marginTop:"0px"},900);

            $(".v2").fadeIn("fast").animate({opacity:1,
                marginTop:"0px"},1000);

            $(".v3").fadeIn("fast").animate({opacity:1,
                marginTop:"0px"},1200);

            $(".v4").fadeIn("fast").animate({opacity:1,
                marginTop:"0px"},1500);
         }
         else{
             $(".veg-container").hide().css("marigin-top","410px");
         }
    })

    
    $(document).scroll(function(){
        var z = $(document).scrollTop();
     
         if(z>4330 && t){	
        $('.dummyagriprecent').animate({width:"60%"}, 2000);
        $('.dummyorganincprecent').animate({width:"98%"}, 2000);
        startTimer(1, document.querySelector('#year'));    
        startTimeragri(1, document.querySelector('#agri'));    
        startTimerorganic(1, document.querySelector('#organic'));    
        t=false; 
    }
    })


})


// counter
function startTimer(duration, display) {
    var timer = duration;
    
   var hari= setInterval(()=> {
        seconds = parseInt(timer);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = seconds;
      timer++  
  
    if(timer==41){  
    clearInterval(hari)
    }  

    }, 40);
    
}
function startTimeragri(duration, display) {
    var timer = duration;
    
   var hari= setInterval(()=> {
        seconds = parseInt(timer);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = seconds;
      timer++  
  
    if(timer==61){  
    clearInterval(hari)
    }  

    }, 27);
    
}
function startTimerorganic(duration, display) {
    var timer = duration;
    
   var hari= setInterval(()=> {
        seconds = parseInt(timer);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = seconds;
      timer++  
  
    if(timer==99){  
    clearInterval(hari)
    }  

    }, 20);
    
}

