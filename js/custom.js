$(document).ready(function(){

  $('#open-btn').click(function(){
    $('.mobile-main-menu').animate({left: "0"}, 500);
    $(this).hide();
    $('#close-btn').css('display', 'block')
});

$('#close-btn').click(function(){
  $('.mobile-main-menu').animate({left: "-80%"}, 500);
  $(this).hide();
  $('#open-btn').css('display', 'block')
});

$('.nav-link').click(function(){
  $('.mobile-main-menu').animate({left: "-80%"}, 500);
  $('#open-btn').css('display', 'block')
  $('#close-btn').css('display', 'none')
});

        //Magnefic Popup Video
        $("#video").magnificPopup({
            type:'iframe',
            iframe: {
               patterns: {
                 youtube: {
                   index: 'youtube.com/',
             
                   id: 'v=',
                   src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                 },
             
               },
             
               srcAction: 'iframe_src',
             }
         });

         //WOW JS
         new WOW().init();

         //Counter
         $('.count-number').counterUp({
             time:  700
         });

         //Magnefic Popup Image
         $('.image-link').magnificPopup({
            type: 'image'
        });

        //MixitUp
        var mixer = mixitup('.portfolio_content');

        //Team Slider
        $('.team_slider').owlCarousel({
            loop:true,
            margin:30,
            responsiveClass:true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 250,
            autoplayHoverPause: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                991:{
                    items:3
                },
                1000:{
                  items:4
              }
            }
        });

        //Testimonial Slide
        $('.testimonial_slide').owlCarousel({
            loop:true,
            margin:0,
            responsiveClass:true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            items: 1,
          });

          //Top Button
        $(window).scroll(function(){
           if($(this).scrollTop() > 20){
            $('#topbtn').fadeIn();
          } else {
            $('#topbtn').fadeOut();
          }
         });
  
         $('#topbtn').click(function(){
                   $('html,body').animate({scrollTop: 0}, 500);
         });

         //Sticky Nav
         $('.sticky-menu').waypoint(function(direction){
            if(direction == 'down'){
              $('header').addClass('sticky-nav')
            } else{
              $('header').removeClass('sticky-nav')
            }
          });
});