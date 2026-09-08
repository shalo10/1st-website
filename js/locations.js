/* LOCATIONS PAGE JQUERY LOGIC */

$(document).ready(function() {

  // Function to show/hide section titles depending on visible venue cards
  function updateSectionHeaders() {
    $('.island-section').each(function() {
      const visibleCards = $(this).find('.restaurant-card:visible').length;
      if (visibleCards > 0) {
        $(this).find('.section-title').show();
      } else {
        $(this).find('.section-title').hide();
      }
    });
  }

  // 1. Island Filter Buttons
  $('.filter-btn').on('click', function() {
    const island = $(this).attr('data-filter');

    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    // Clear search box on filter change
    $('#location-search').val('');

    if (island === 'all') {
      $('.island-section').show();
      $('.restaurant-card').fadeIn(200);
    } else {
      $('.island-section').each(function() {
        if ($(this).attr('data-island') === island) {
          $(this).show();
          $(this).find('.restaurant-card').fadeIn(200);
        } else {
          $(this).hide();
        }
      });
    }

    updateSectionHeaders();
  });

  // 2. Real-time Search Filter across all islands
  $('#location-search').on('keyup', function() {
    const value = $(this).val().toLowerCase();

    // Reset button filters to "All Islands" during active typing
    if (value.length > 0) {
      $('.filter-btn').removeClass('active');
      $('.filter-btn[data-filter="all"]').addClass('active');
      $('.island-section').show();
    }

    $('.restaurant-card').filter(function() {
      const text = $(this).text().toLowerCase();
      const isMatch = text.indexOf(value) > -1;
      $(this).toggle(isMatch);
    });

    updateSectionHeaders();
  });

  // 3. Map Modal Popup
  $(document).on('click', '.view-map-btn', function() {
    const name = $(this).data('name');
    const address = $(this).data('address');
    const island = $(this).data('island');

    $('#modal-title').text(name);
    $('#modal-address').text(address + ', ' + island + ' Island');
    $('#location-modal').css('display', 'flex').hide().fadeIn(200);
  });

  $('.modal-close, .modal-overlay').on('click', function(e) {
    if (e.target === this) {
      $('#location-modal').fadeOut(200);
    }
  });

});