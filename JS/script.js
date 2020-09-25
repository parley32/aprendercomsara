$(function(){

    $(".nav-item a, #scroll-back-up a , #entete a, .redirection-text a").on("click", function(event){
    
        event.preventDefault();
        var hash = this.hash;
        
        $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})
        
    });

});