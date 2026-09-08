/* MENU PAGE JQUERY LOGIC */

$(document).ready(function() {

  // Function to check visibility of section headers
  function updateSectionHeaders() {
    $('.category-section').each(function() {
      // Check if this section has any visible cards
      const visibleCards = $(this).find('.dish-card:visible').length;
      if (visibleCards > 0) {
        $(this).find('.section-title').show();
      } else {
        $(this).find('.section-title').hide();
      }
    });
  }

  // 1. Category Filter Buttons
  $('.filter-btn').on('click', function() {
    const selectedCategory = $(this).attr('data-filter');

    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    // Reset Search Input on category change
    $('#dish-search').val('');

    if (selectedCategory === 'all') {
      $('.category-section').show();
      $('.dish-card').fadeIn(200);
    } else {
      $('.category-section').each(function() {
        if ($(this).attr('data-category') === selectedCategory) {
          $(this).show();
          $(this).find('.dish-card').fadeIn(200);
        } else {
          $(this).hide();
        }
      });
    }

    updateSectionHeaders();
  });

  // 2. Real-time Search Filter (Searches across all categories)
  $('#dish-search').on('keyup', function() {
    const query = $(this).val().toLowerCase();

    // Reset filter active status to "All" when user searches
    if (query.length > 0) {
      $('.filter-btn').removeClass('active');
      $('.filter-btn[data-filter="all"]').addClass('active');
      $('.category-section').show();
    }

    $('.dish-card').filter(function() {
      const cardText = $(this).text().toLowerCase();
      const isMatch = cardText.indexOf(query) > -1;
      $(this).toggle(isMatch);
    });

    updateSectionHeaders();
  });

});