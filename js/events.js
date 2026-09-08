/* EVENTS PAGE JQUERY LOGIC */

$(document).ready(function() {

  // Function to show/hide section headers depending on visible event cards
  function updateSectionHeaders() {
    $('.category-section').each(function() {
      const visibleCards = $(this).find('.event-card:visible').length;
      if (visibleCards > 0) {
        $(this).find('.section-title').show();
      } else {
        $(this).find('.section-title').hide();
      }
    });
  }

  // 1. Category Filtering
  $('.filter-btn').on('click', function() {
    const selectedCategory = $(this).attr('data-filter');

    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    // Clear search bar on filter switch
    $('#event-search').val('');

    if (selectedCategory === 'all') {
      $('.category-section').show();
      $('.event-card').fadeIn(200);
    } else {
      $('.category-section').each(function() {
        if ($(this).attr('data-category') === selectedCategory) {
          $(this).show();
          $(this).find('.event-card').fadeIn(200);
        } else {
          $(this).hide();
        }
      });
    }

    updateSectionHeaders();
  });

  // 2. Real-time Search Filtering
  $('#event-search').on('keyup', function() {
    const value = $(this).val().toLowerCase();

    // Reset filter buttons to "All Events" during active search
    if (value.length > 0) {
      $('.filter-btn').removeClass('active');
      $('.filter-btn[data-filter="all"]').addClass('active');
      $('.category-section').show();
    }

    $('.event-card').filter(function() {
      const text = $(this).text().toLowerCase();
      const isMatch = text.indexOf(value) > -1;
      $(this).toggle(isMatch);
    });

    updateSectionHeaders();
  });

});