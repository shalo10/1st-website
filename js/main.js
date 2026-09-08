/* GLOBAL JQUERY LOGIC */

$(document).ready(function() {
  
  // 1. Mobile Menu Toggle (.slideToggle)
  $('.hamburger').on('click', function() {
    $('.nav-menu').slideToggle(300);
  });

  // 2. Navbar Shadow Effect on Scroll
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
    }
  });

});