'use strict';

$(function(){
    /*Zmienne*/
    var slideCount = $('.single-slide').length;
    var slideShow = $('.slide-show');
    var slideWidth = 100/slideCount;
    var slideIndex = 0;
    
    /* Szerokość kontenera*/
    slideShow.css('width', slideCount * 100 + '%');
    
    //szerokość i położenie pojedynczego slajdu
    
    $('.single-slide').each(function(index){
       
        $(this).css({'width': slideWidth + '%', 'margin-left': index * slideWidth + '%'});
        
    });
    
    //funkcja slide
    function slide(newSlideIndex){
        if (newSlideIndex<0 || newSlideIndex>=slideCount){
//            newSlideIndex = 0;
            return;
        }
        
        var marginLeft = (newSlideIndex * (-100)) + '%';
        
//        console.log(marginLeft);
        
        slideShow.animate({'margin-left': marginLeft}, 800, function(){
            
            slideIndex = newSlideIndex;
            
        });
    }
    
    //strzałka w lewo
    $('.prev-slide').click(function(){
    
    slide(slideIndex-1)
        
    });
        
        
    //strzałka w prawo
    $('.next-slide').click(function(){
                      
    slide(slideIndex+1) 
        
    });
    
    
    
    
});