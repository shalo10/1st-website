/* CONTACT PAGE JQUERY LOGIC */

$(document).ready(function() {
  
  // 1. FAQ Accordion Logic (.slideToggle)
  $('.faq-question').on('click', function() {
    const currentAnswer = $(this).next('.faq-answer');

    // Close other open answers
    $('.faq-answer').not(currentAnswer).slideUp();
    $('.faq-question').not(this).removeClass('active').find('.faq-icon').text('+');

    // Toggle selected answer
    currentAnswer.slideToggle(200);
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $(this).find('.faq-icon').text('-');
    } else {
      $(this).find('.faq-icon').text('+');
    }
  });

  // 2. Contact Form Validation
  $('#contactForm').on('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    
    $('.form-group').removeClass('error');
    $('#form-alert').hide().text('');

    if ($('#fullName').val().trim() === '') {
      $('#fullName').closest('.form-group').addClass('error');
      isValid = false;
    }

    const email = $('#email').val().trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
      $('#email').closest('.form-group').addClass('error');
      isValid = false;
    }

    if (!$('#subject').val()) {
      $('#subject').closest('.form-group').addClass('error');
      isValid = false;
    }

    if ($('#message').val().trim().length < 10) {
      $('#message').closest('.form-group').addClass('error');
      isValid = false;
    }

    if (isValid) {
      $('#form-alert')
        .text('Thank you! Your message has been sent successfully.')
        .fadeIn(200);
      $('#contactForm')[0].reset();
    }
  });

  $('.form-control').on('input change', function() {
    $(this).closest('.form-group').removeClass('error');
  });

});