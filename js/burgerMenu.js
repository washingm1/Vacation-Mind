

$(document).ready(function(){
    $('.dropbtn').click(function(){
       $('.dropdown').toggleClass("display");
       $('.dropdown2').removeClass("display");
   });

   $('.dropbtn2').click(function(){
       $('.dropdown2').toggleClass("display");
   })

   $('.fa-bars').click(function() {
     $('.menu-content').toggle();
   })

});
 
