$(document).ready(function(){

    //sticky navigation
    $('.js--section-features').waypoint(function(direction){
        if (direction=="down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        } 
    },{
        offset: '75%'
      });

      //scroll buttons

      $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop:$('.js--section-plans').offset().top},1000);
      });

      $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop:$('.js--section-features').offset().top},500);
      });

      //Animations on scroll
      $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
      },{
        offset: '50%'
      });

      $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated slideInUp ');
      },{
        offset: '50%'
      });

      $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
      },{
        offset: '50%'
      });
      $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated pulse');
      },{
        offset: '30%'
      });
      //mobile navigation

      $('.js--mobile-nav').click(function(){
        var nav = $('.js--main-nav');
        var mobNav = $('.js--mobile-nav-icon');
        var mobNav2 = $('.js--mobile-nav-icon2');
      
        nav.slideToggle(200);

        if(mobNav.hasClass('hide-nav')){
          mobNav.removeClass('hide-nav');
          mobNav2.addClass('hide-nav');
        }else{
          mobNav2.removeClass('hide-nav');
          mobNav.addClass('hide-nav');
        }
      
      })

    });




/*
var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})

*/